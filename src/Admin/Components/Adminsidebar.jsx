import React, { useContext, useEffect, useState } from 'react'
import { FaHome } from "react-icons/fa";
import { ImBooks } from "react-icons/im";
import { GiGraduateCap } from "react-icons/gi";
import { IoMdSettings } from "react-icons/io";
import { Link } from 'react-router-dom';
import baseurl from '../../services/baseurl';
import { adminprofileupdatecontext } from '../../context/Contextshare';



function Adminsidebar() {

    const [adminname,setadminname] = useState("")
    const [existingprofile,setexistingprofile] = useState("")
    const {adminprofileupdatestatus} = useContext(adminprofileupdatecontext)

    useEffect(()=>{
        setadminname(JSON.parse(sessionStorage.getItem("existinguser")).username)
        setexistingprofile(JSON.parse(sessionStorage.getItem("existinguser")).profile)
    },[adminprofileupdatestatus])

    return (
        <>
            <div className='bg-gray-200 w-full md:min-h-screen flex items-center flex-col'>
                <div className='my-10'>
                    <img src={existingprofile == "" ? "https://imgs.search.brave.com/Cq0hMu5m_foHR6T0FqS5uvj0DKj9PIAQAA8iHLWTdpY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS12ZWN0/b3IvdXNlci1wcm9m/aWxlLWljb24tdmVj/dG9yLWltYWdlLWNh/bi1iZS11c2VkLWdh/bWluZy1lY29tbWVy/Y2VfMTIwODE2LTQw/Njg4NC5qcGc_c2Vt/dD1haXNfaHlicmlk/Jnc9NzQwJnE9ODA" : `${baseurl}/Imguploads/${existingprofile}`} alt="" style={{ width: "150px", height: "150px", borderRadius: "50%" }} />

                </div>
                <h1 className='text-2xl mb-10'>{adminname}</h1>
                <div className='mb-10'>
                    <div className='mb-4 flex'>
                        <input type="radio" name="" id="home" readOnly/>
                       <Link to={"/adminhome"}>
                            <label htmlFor="home" className='flex ms-3'><FaHome className='mt-1 me-1' />
                                Home</label>
                       </Link>
                    </div>
                    <div className='mb-4 flex'>
                        <input type="radio" name="" id="books" readOnly/>
                        <Link to={"/adminbooks"}>
                            <label htmlFor="books" className='flex ms-3'><ImBooks
                                className='mt-1 me-1' />
                                Books</label>
                        </Link>
                    </div>
                    <div className='mb-4 flex'>
                        <input type="radio" name="" id="career" readOnly/>
                       <Link to={"/admincareers"}>
                            <label htmlFor="career" className='flex ms-3'><GiGraduateCap
                                className='mt-1 me-1' />
                                Career</label>
                       </Link>
                    </div>
                    <div className='mb-4 flex'>
                        <input type="radio" name="" id="settings" readOnly/>
                        <Link to={"/adminsettings"}>
                            <label htmlFor="settings" className='flex ms-3'><IoMdSettings
                                className='mt-1 me-1' />
                                Settings</label>
                        </Link>
                    </div>

                </div>

            </div>
        </>
    )
}

export default Adminsidebar