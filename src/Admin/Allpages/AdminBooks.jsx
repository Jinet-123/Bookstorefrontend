import React, { useEffect, useState } from 'react'
import Adminheader from '../Components/Adminheader'
import Adminsidebar from '../Components/Adminsidebar'
import { approvebooksapi, getallbooksinadminapi, getallusersinadminapi } from '../../services/allapi'

function AdminBooks() {

  const [bookliststatus,setbookliststatus] = useState(true)
  const [userliststatus,setuserliststatus] = useState(false)
  const [token,settoken] = useState("")
  const [allusers,setallusers] = useState([])

  const [allbooks,setallbooks] = useState([])

  const getallbooks = async () =>{
    try {
      const result = await getallbooksinadminapi()
      console.log(result);
      setallbooks(result.data)
      
      
    } catch (error) {
      console.log(error);
      
    }
  }

  const approvebook = async (id) =>{
    console.log(id);
    try {
      const result = await approvebooksapi(id)
      console.log(result);
      getallbooks()
      
      
    } catch (error) {
        console.log(error);
        
    }
    
  }

  useEffect(()=>{
    
    getallbooks()
    if(sessionStorage.getItem("token")){
        settoken(sessionStorage.getItem("token"))

    }
  },[])


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
 

  return (
    <>
    <Adminheader/>
    <div className='md:grid grid-cols-5 gap-2'>
      <div className='col-span-1'>
          <Adminsidebar/>
      </div>
      <div className='col-span-4 p-10'>
        <h1 className='text-center text-3xl font-bold'>All books</h1>
        <div className='flex justify-center items-center my-8 font-medium text-lg'>
          <p onClick={()=>{setuserliststatus(false),setbookliststatus(true)}} className={bookliststatus ?"text-blue-500" :'p-4 border-b border-gray-200 cursor-pointer'}>Book List</p>
          <p onClick={()=>{setuserliststatus(true),setbookliststatus(false),getallusers()}} className={userliststatus? "text-blue-500" :'p-4 border-b border-gray-200 cursor-pointer'}>Users</p>
        </div>

        {bookliststatus && 
        <div className='md:grid grid-cols-4 w-full my-5'>
          {allbooks.length > 0 ?
          allbooks?.map((books,index)=>(
<div key={index} className='shadow rounded p-3 m-4'>
            <img width={"100%"} height={"300px"} src={books?.imageurl} alt="" />
            <div className='flex flex-col justify-center items-center mt-4'>
              <p>{books?.title}</p>
              <p>{books?.author}</p>
              <p>$ {books?.disprice}</p>
              {books?.status == "pending" &&
              <button onClick={()=>approvebook(books?._id)} className='w-full mt-3 p-3 rounded border bg-green-700 text-white hover:border-green-600 hover:bg-white hover:text-green-700'>Approve</button>}
            {books?.status == "approved" &&
            <img src="https://i.pinimg.com/1200x/fa/cf/93/facf93a96d7ea1d78b95a354473b16e8.jpg" alt="" style={{width:"60px",borderRadius:"50%"}}/>
            
            }
            </div>

          </div>
          ))
          

          :
          <div className='text-center text-2xl text-red-600'>
            <h1>NO BOOKS ADDED</h1>
          </div>}
         
        </div>}

        {userliststatus && 
      
          <div className='md:grid grid-cols-3 w-full my-5'>
            
           {allusers.length > 0 ?
                allusers.map((user,item)=>(
                  <div key={item} className='shadow rounded p-2 m-2 bg-gray-200'>
                <p className='text-red-700 font-bold '>ID : {user?._id}</p>
                <div className='flex items-center mt-3'>
                  <img src="https://imgs.search.brave.com/BfdzEdiPw-oSlZmGK_TXefakiuLD_TNeL5L6PTzIQo8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS12ZWN0/b3IvbWFuLXByb2Zp/bGVfMTA4MzU0OC0x/NTk2My5qcGc_c2Vt/dD1haXNfaHlicmlk/Jnc9NzQwJnE9ODA" alt="" width={"80px"} height={"80px"} style={{borderRadius:"50%"}}/>
                  <div className='flex flex-col ml-3 w-full'>
                        <p className='text-blue-800 font-bold text-lg'>{user?.username}</p>
                        <p>{user?.email}</p>
    
                  </div>
    
                </div>
    
              </div>

                ))
              
              :
              <div>
                <h1 className='text-2xl text-red-500 text-center'>NO USERS FOUND</h1>
              </div>}
              
              
              
            </div>}
  
              
       
      </div>
       </div>
     

    
    
    </>
  )
}

export default AdminBooks