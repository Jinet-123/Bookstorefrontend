import React, { useEffect, useState } from 'react'
import Header from '../../Common/Components/Header'
import Footer from '../../Common/Components/Footer'
import { FaRegEye } from "react-icons/fa";
import { FaBackward } from "react-icons/fa";
import { Link, useParams } from 'react-router-dom';
import { getabookapi, makepaymentapi } from '../../services/allapi';
import baseurl from '../../services/baseurl';
import {loadStripe} from '@stripe/stripe-js';


function Viewbooks() {

  const [modal,setmodal] = useState(false)
  const [bookdetails,setbookdetails] = useState({})
  const {id} = useParams()

  const getabook = async () =>{
    const token = sessionStorage.getItem("token")
     const reqheader = { "Authorization" : `Bearer ${token}`}
     try {
        const result = await getabookapi(id, reqheader)
        console.log(result);
        setbookdetails(result.data)
        
     } catch (error) {
        console.log(error);
        
     }

  }
  console.log(bookdetails);

  const handlepurchase = async () =>{
      const stripe = await loadStripe('pk_test_51ScgVUAtPzzowVVGVk0YyXaf7AppgzfERQTt72lYwxrvBAfyrPemnYxSDnR1L0uETiC7zjEh4iwOhCowAonX3BDH00olrAlljh');
      console.log(stripe);
      const token = sessionStorage.getItem("token")
      if(token){
         const reqheader = { "Authorization" : `Bearer ${token}`}
         try {
          const result = await makepaymentapi(bookdetails,reqheader)
          console.log(result);
          const checkoutSessionUrl = result.data.checkoutSessionUrl
          if(checkoutSessionUrl){
            window.location.href = checkoutSessionUrl
          }
          
         } catch (error) {
          console.log(error);
          
          
         }
      }
      
  }

  

  useEffect(()=>{
    getabook()
  },[])
  
  return (
    <>
    <Header/>

    <div className='md:p-20 p-5'>
        <div className='shadow w-full md:p-10 p-5'>
          <div className='flex justify-end'>
              <FaRegEye onClick={()=>setmodal(true)}/>


</div>
<div className='md:grid grid-cols-[1fr_3fr] w-full'>
  <div>
    <img src={bookdetails?.imageurl} className='w-full h-100' alt="" />
    
  </div>
  <div className='px-4'>
    <h1 className='text-center font-medium text-2xl'>{bookdetails?.title}</h1>
    <p className='text-center text-blue-500'> - {bookdetails?.author} (author)</p>
    <div className='md:flex justify-between mt-10'>
      <p>Publisher :{bookdetails?.publisher} </p>
      <p>Languages :{bookdetails?.language} </p>
      <p>No. of Pages :{bookdetails?.noofpages}</p>

    </div>
    <div className='md:flex justify-between mt-10'>
      <p>Seller Mail :{bookdetails?.usermail} </p>
      <p>Real Price :{bookdetails?.price} </p>
      <p>ISBN :{bookdetails?.isbn}</p>
    </div>
<p className='text-justify mt-10'>{bookdetails?.abstract}</p>

    <div className='mt-10 flex justify-end'>
      <Link to={"/allbooks"} className='flex px-4 py-3 bg-blue-800 rounded text-white hover:bg-white hover:text-blue-800 hover:border hover:border-blue-800'><FaBackward className='mt-1 me-2'/>Back
</Link>
<button onClick={handlepurchase} type='button' className='px-4 py-3 bg-green-800 rounded text-white hover:bg-white hover:text-green-800 hover:border hover:border-green-800 ms-5'>$ Buy</button>

    </div>

  </div>

          </div>
          
        </div>
    </div>
    {modal &&
     <div className='relative z-10 overflow-y-hidden'>
      <div className='bg-gray-500/75 fixed inset-0'>
      <div className='flex justify-center items-center min-h-screen scroll-auto'>
        <div className='bg-white rounded-2xl md:w-250 w-100'>
          <div className='bg-black text-white flex justify-between items-center p-3'>
            <h3>Book Images</h3>
            <button onClick={()=>setmodal(false)}>X</button>

          </div>
          <div className='relative p-5'>
            <p className='text-blue-600'>camera click of the book by the seller</p>

          </div>
          <div className='md:flex flex-wrap my-4 overflow-y-hidden'>

            {bookdetails?.uploadimages.length >0 ?
            bookdetails?.uploadimages?.map(img=>(
              <img src={`${baseurl}/Imguploads/${img}`} alt="" height={"250px"} width={"250px"} className='mx-2 md:mb-0 mb-2'/>
            ))
             
           :
           <p className='text-red-600'>user uploaded images not available</p>}

          </div>

        </div>

      </div>

      </div>

    </div>}

    
    <Footer/>
    </>
  )
}

export default Viewbooks