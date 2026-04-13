import React, { useEffect, useState } from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { FaRegUser } from "react-icons/fa";
import baseurl from '../../services/baseurl';


function Header() {

        const [dropdown,setdropdown] = useState(false)
        const [token,settoken] = useState("")
        const [userprofile,setuserprofile] = useState("")
        const [username,setusername] = useState("")
        console.log(token);
        console.log(userprofile);
        console.log(username);
                
        

        useEffect(()=>{
            if(sessionStorage.getItem("token")){
                    settoken(sessionStorage.getItem("token"))
                    const profileimage = JSON.parse(sessionStorage.getItem("existinguser"))
                    setuserprofile(profileimage.profile)
                    const name = JSON.parse(sessionStorage.getItem("existinguser"))
                    setusername(name.username)
            }
        },[])

    return (
        <>

            <div className="grid grid-cols-3 p-3">
                <div className='flex items-center'>
                    <img width={"50px"} height={"50px"} src="https://i.pinimg.com/736x/8c/fb/97/8cfb97e27f84bf36a525b39207753488.jpg" alt="" />
                    <h1 className='font-bold text-2xl ms-150'>BOOKSTORE</h1>
                </div>
                
                <div className='flex ms-100'>
                   {!token && <div  className='md:flex items-center  hidden'>
                    <FaInstagram className='' />
                    <FaSquareXTwitter className='' />
                    <FaFacebook className='' />
                    <Link to={"/login"}> <button className='flex justify-between items-center border border-black rounded px-3 py-2 ms-3 hover:bg-black hover:text-white '><FaRegUser className='me-2'/>Login
                    </button> </Link>

                </div>}
                    {token && <div>
                        <button className='flex ms-10' onClick={()=>setdropdown(!dropdown)}>
                            <img src={userprofile == "" ? "https://i.pinimg.com/1200x/4c/85/31/4c8531dbc05c77cb7a5893297977ac89.jpg"
                                : userprofile.startsWith("https") ? userprofile 
                                : `${baseurl}/Imguploads/${userprofile}`
                            } width={"50px"} height={"50px"} alt="" />
                            <p className='ms-2 text-xl'>{username}</p>
                        </button>
                        { dropdown && <div className='mt-2 ms-16 flex'>
                                <Link to={"/profile"} className='bg-green-500 text-white w-25 h-8 hover:text-green-600 rounded-xl hover:bg-white'>Profile</Link>
                                <button className='bg-red-500 ms-2 hover:text-red-500 text-white w-25 h-8 rounded-xl hover:bg-white'>logout</button>
                        </div>}
    
                    </div>}
                </div>
                    
            </div>
            <nav className='w-full md:flex justify-center items-center hidden bg-gray-900 text-white p-5'>
                <Link to={"/"} className='mx-4'>Home</Link>
                <Link to={"/allbooks"} className='mx-4'>Books</Link>
                <Link to={"/careers"} className='mx-4'>Careers</Link>
                <Link to={"/contact"} className='mx-4'>Contact</Link>

            </nav>

        </>
    )
}

export default Header