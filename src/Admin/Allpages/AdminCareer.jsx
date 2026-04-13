import React, { useState } from 'react'
import Adminheader from '../Components/Adminheader'
import Adminsidebar from '../Components/Adminsidebar'
import { IoLocationSharp } from 'react-icons/io5'
import { FaArrowUpRightFromSquare } from 'react-icons/fa6'
import { MdDeleteSweep } from "react-icons/md";
import { Link } from 'react-router-dom'


function AdminCareer() {

  const [jobpoststatus, setjobpoststatus] = useState(true)
  const [jobapplicants, setjobapplicant] = useState(false)

  return (
    <>
      <Adminheader />
      <div className='md:grid grid-cols-5 gap-2'>
        <div className='col-span-1'>
          <Adminsidebar />
        </div>
        <div className='col-span-4 p-10'>
          <h1 className='text-center text-3xl font-bold'>Careers</h1>

          <div className='col-span-4 p-10'>
            <div className='flex justify-center items-center my-8 font-medium text-lg'>
              <p onClick={() => { setjobapplicant(false), setjobpoststatus(true) }} className={jobpoststatus ? "text-blue-500" : 'p-4 border-b border-gray-200 cursor-pointer'}>Job List</p>
              <p onClick={() => { setjobapplicant(true), setjobpoststatus(false) }} className={jobapplicants ? "text-blue-500" : 'p-4 border-b border-gray-200 cursor-pointer'}>Applicants</p>
            </div>
          </div>

          {jobpoststatus &&
            <div>
              <div className='md:flex justify-center items-center my-8 w-full md:px-20 px-5'>
                <div className='md:flex w-full ms-2 md:ms-0'>
                  <input type="text" name="" id="" placeholder='search by name' className='border border-gray-200  placeholder-gray-200 p-2 md:w-1/4 w-3/4' />
                  <button className='bg-green-800 ms-3 text-white hover:bg-white hover:text-red-400 w-30 h-9 rounded'>Search</button>
                </div>
                <div>
                  <button className='bg-blue-800 ms-3 text-white hover:bg-white hover:text-red-400 w-30 h-9 rounded'>Add job +</button>
                </div>


              </div>
              <div className='border border-gray-200 p-5 shadow my-5'>
                <div className='flex mb-5'>
                  <div className='w-full'>
                    <h1>Frontend Developer</h1>
                    <hr />
                  </div>
                  <button className='bg-red-900 text-white hover:bg-white hover:text-red-500 p-3 ms-5 flex items-center'>Delete <MdDeleteSweep
                    className='ms-2' />
                  </button>
                </div>
                <p className='flex'><IoLocationSharp className='me-2 mt-1' />Kochi</p>
                <p>Job Type : Full Time</p>
                <p>Salary : 20000-30000/month</p>
                <p>Qualification : Bca</p>
                <p>Experience : 1-2 Years</p>
                <p className='text-justify'>Description : Lorem Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus, sit. ipsum dolor sit amet consectetur adipisicing elit. Dolore illo eveniet voluptatem architecto eaque placeat accusantium eum voluptatibus consequuntur quidem?</p>

              </div>

              <p className='text-3xl text-red-600'>No job Openings</p>


            </div>}

          {jobapplicants && 
          <div className='p-10 '>
            <table className='w-full my-3 shadow'>
              <thead>
                <tr>
                  <th className='p-3 text-center bg-blue-800 text-white border-gray-500 '>Sl. No</th>
                  <th className='p-3 text-center bg-blue-800 text-white border-gray-500 '>Job Title</th>
                  <th className='p-3 text-center bg-blue-800 text-white border-gray-500 '>Name</th>
                  <th className='p-3 text-center bg-blue-800 text-white border-gray-500 '>Qualification</th>
                  <th className='p-3 text-center bg-blue-800 text-white border-gray-500 '>Email</th>
                  <th className='p-3 text-center bg-blue-800 text-white border-gray-500 '>Phone</th>
                  <th className='p-3 text-center bg-blue-800 text-white border-gray-500 '>Cover Letter</th>
                  <th className='p-3 text-center bg-blue-800 text-white border-gray-500 '>Resume</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className='border border-gray-500 p-3 text-center'>1</td>
                  <td className='border border-gray-500 p-3 text-center'>web developer</td>
                  <td className='border border-gray-500 p-3 text-center'>jinet</td>
                  <td className='border border-gray-500 p-3 text-center'>bca</td>
                  <td className='border border-gray-500 p-3 text-center'>jinet@gmail.com</td>
                  <td className='border border-gray-500 p-3 text-center'>989383838</td>
                  <td className='border border-gray-500 p-3 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora voluptatibus tenetur corporis atque harum velit, sint deserunt quas dolorem quaerat?</td>
                  <td className='border border-gray-500 p-3 text-center'><Link className='text-blue-500 underline'>Resume</Link></td>
                </tr>
              </tbody>

            </table>

            <p className='text-red-600 text-2xl'>No Applications Available</p>
            
          </div>}


        </div>

      </div>

    </>
  )
}

export default AdminCareer