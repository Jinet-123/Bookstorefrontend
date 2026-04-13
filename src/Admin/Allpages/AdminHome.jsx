import React, { useEffect, useState } from 'react'
import Adminheader from '../Components/Adminheader'
import Adminsidebar from '../Components/Adminsidebar'
import { FaBook } from "react-icons/fa";
import { getallbooksapi, getallbooksinadminapi, getallusersinadminapi } from '../../services/allapi';


function AdminHome() {

  const [allbooks,setallbooks] = useState([])
  const [allusers,setallusers] = useState([])
  const [token,settoken] = useState("")

  //get books
  const getallbooks = async () =>{
    try {
      const result = await getallbooksinadminapi()
      if(result.status == 200){
        setallbooks(result.data)
      }
    } catch (error) {
      console.log(error);
      
    }
  }

  //get users
  const getallusers = async () =>{
    try {
       //reqheader
    const reqheader = {
      "Authorization" : `Bearer ${token}`
    }
    const result = await getallusersinadminapi(reqheader)
    console.log(result);
    if(result.status == 200){
      setallusers(result.data)
    }
    
      
    } catch (error) {
      console.log(error);
      
    }
  }

  useEffect(()=>{
    if(sessionStorage.getItem("token")){
      settoken(sessionStorage.getItem("token"))
    }
  },[])

  useEffect(()=>{
    if(token){
      getallbooks()
      getallusers()
    }
  },[token])


  return (
    <>
      <Adminheader />
      <div className='md:grid grid-cols-[1fr_4fr]'>
        <div>
          <Adminsidebar />
        </div>
        <div className='p-4'>
          <div className='md:grid grid-cols-3 text-white'>
            <div className='px-5'>
              <div className='grid grid-cols-[1fr_3fr] bg-blue-700 rounded p-4'>
                <div className='flex justify-center items-center'><FaBook className='text-3xl' />
                </div>
                <div className=''>
                  <h1>Total No of Books : <span className='text-xl'>{allbooks?.length}</span></h1>

                </div>

              </div>

            </div>
            
             <div className='px-5'>
              <div className='grid grid-cols-[1fr_3fr] bg-green-700 rounded p-4'>
                <div className='flex justify-center items-center'><FaBook className='text-3xl' />
                </div>
                <div className=''>
                  <h1>Total No of Users : <span className='text-xl'>{allusers?.length}</span></h1>

                </div>

              </div>

            </div>

             <div className='px-5'>
              <div className='grid grid-cols-[1fr_3fr] bg-yellow-700 rounded p-4'>
                <div className='flex justify-center items-center'><FaBook className='text-3xl' />
                </div>
                <div className=''>
                  <h1>Total No of Applicants : <span className='text-xl'>65</span></h1>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </>
  )
}

export default AdminHome