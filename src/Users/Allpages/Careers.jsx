import React, { useState } from 'react'
import Header from '../../Common/Components/Header'
import Footer from '../../Common/Components/Footer'
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5";



function Careers() {

  const [newmodal,setnewmodal] = useState(false)

  return (
    <>
    <Header/>

    <div className='flex justify-center items-center flex-col my-5'>
        <h1 className='text-3xl font-bold my-5'>Careers</h1>
        <div className='flex my-5 ms-5'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, rem sed ea voluptates dolorem ut alias aperiam dolorum 
          omnis quam, perferendis dignissimos hic! Eaque, accusamus? Ab expedita neque, a alias porro inventore, modi optio, velit
           laboriosam quod aut. Laudantium quasi saepe ut id. Voluptas, culpa ipsam qui laudantium eveniet tempore.
        </div>
        <div className='my-10'>
          <h1 className='text-2xl font-bold'>Current Openings</h1>
          <div className='flex my-10 justify-center items-center'>
            <input type="text" className='p-2 border border-gray-200 text-black w-100 placeholder-gray-500' placeholder='Search by title' />
          <button className='bg-blue-900 ms-2 text-white p-2 hover:bg-white hover:text-blue-900 hover:border hover:border-blue-900'>Search</button>

          </div>
        </div>
      <div className='border border-gray-200 p-5 shadow my-5'>
        <div className='flex mb-5'>
         <div className='w-full'>
            <h1>Frontend Developer</h1>
            <hr />
         </div>
         <button onClick={()=>setnewmodal(true)} className='bg-blue-900 text-white p-3 ms-5 flex items-center'>Apply <FaArrowUpRightFromSquare className='ms-2'/>
</button>
        </div>
        <p className='flex'><IoLocationSharp className='me-2 mt-1'/>Kochi</p>
        <p>Job Type : Full Time</p>
        <p>Salary : 20000-30000/month</p>
        <p>Qualification : Bca</p>
        <p>Experience : 1-2 Years</p>
        <p className='text-justify'>Description : Lorem Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus, sit. ipsum dolor sit amet consectetur adipisicing elit. Dolore illo eveniet voluptatem architecto eaque placeat accusantium eum voluptatibus consequuntur quidem?</p>

      </div>

      </div>

        {newmodal &&
       <div className='relative z-10 overflow-y-hidden'>
      <div className='bg-gray-500/75 fixed inset-0'>
      <div className='flex justify-center items-center min-h-screen scroll-auto'>
        <div className='bg-gray-300 rounded-2xl md:w-250 w-100'>
          <div className='bg-black text-white flex justify-between items-center p-3'>
            <h3>Application Form</h3>
            <button onClick={()=>setnewmodal(false)}>X</button>

          </div>
          <div className='relative p-5'>
           <div className='mb-3'>
          <input type="text" placeholder='Full Name' className='p-2 bg-white w-100 rounded' name="" id="" />

        </div>
        <div className='mb-3'>
          <input type="text" placeholder='Email' className='p-2 bg-white w-100 rounded' name="" id="" />

        </div>
        <div className='mb-3'>
          <input type="text" placeholder='Qualification' className='p-2 bg-white w-100 rounded' name="" id="" />

        </div>
        <div className='mb-3'>
          <input type="text" placeholder='Phone' className='p-2 bg-white w-100 rounded' name="" id="" />

        </div>
        <div className='mb-3'>
          <textarea type="text" placeholder='Cover Letter' rows={'3'} className='p-2 bg-white w-100 rounded' name="" id="" />

        </div>
        <div>
          <h1>Upload resume</h1>
          <input className='bg-gray-200 h-8 mt-3' type="file" placeholder='choosefile' name="" id="" />
        </div>

        <div className='flex' style={{justifyContent:"end"}}>
          <button className='bg-orange-700 text-white w-20 h-10 rounded mt-4 hover:bg-white hover:text-orange-700'>Reset</button>
          <button className='bg-green-700 ms-5 text-white w-20 h-10 rounded mt-4 hover:bg-white hover:text-green-700'>Submit</button>
        </div>

          </div>
          

        </div>

      </div>

      </div>

    </div>}


    
    <Footer/>
    </>
  )
}

export default Careers