import React from 'react'
import { FaRegUser } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

function Adminheader() {

   const navigate = useNavigate()
   const logout = () =>{
    sessionStorage.clear()
    toast.success("logout success")
    navigate("/")
   }

  return (
    <>
    <div className="grid grid-cols-3 p-3">
                    <div className='flex items-center'>
                        <img width={"50px"} height={"50px"} src="https://i.pinimg.com/736x/8c/fb/97/8cfb97e27f84bf36a525b39207753488.jpg" alt="" />
                        <h1 className='font-bold text-2xl ms-150'>BOOKSTORE</h1>
                    </div>
                    <div style={{marginLeft:"890px"}} className='md:flex items-center  hidden'>
                        <button onClick={logout} className='flex justify-between items-center border border-black rounded px-3 py-2 ms-3 hover:bg-black hover:text-white '><FaRegUser className='me-2'/>Logout
                        </button> 
    
                    </div>
                </div>
    </>
  )
}

export default Adminheader