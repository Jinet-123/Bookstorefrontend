import React, { useEffect, useState } from 'react'
import Header from '../../Common/Components/Header'
import Footer from '../../Common/Components/Footer'
import { Link } from 'react-router-dom'
import { getallbooksapi } from '../../services/allapi'

function AllBooks() {

  const [token,settoken] = useState("")
  const [allbooks,setallbooks] = useState([])
  const [category,setcategory] = useState([])
  const [tempbooks,settempbooks] = useState([])
  const [searchkey,setsearchkey] = useState("")
  console.log(searchkey);
  

    const getallbooks = async (usertoken) =>{
       //reqheader
    const reqheader = { "Authorization" : `Bearer ${usertoken}`}

    try {
      const result = await getallbooksapi(reqheader,searchkey)
      console.log(result);
      setallbooks(result.data)
      settempbooks(result.data)
      // setcategory(result.data.map(item=>item.category))
      const tempcategory = result.data.map(item=>item.category)
      setcategory([...new Set(tempcategory)])
    }catch (error){
      console.log(error);
      
    }
      
    }
console.log(allbooks);
console.log(category);


const categoryfilter = (category) =>{
  console.log(category);

  if(category == "No Filter"){
    setallbooks(tempbooks)

  }else{
    setallbooks(tempbooks.filter(item=>item.category.toLowerCase() == category.toLowerCase()))
  }

  
  

}


    useEffect(()=>{
      if(sessionStorage.getItem("token")){
        const usertoken = (sessionStorage.getItem("token"))
        settoken(usertoken)
        getallbooks(usertoken)
      }
      
    },[searchkey])


  return (
    <>
      <Header />

      

      {token ?

      <div>
        <div className='flex justify-center items-center flex-col my-5'>
          <h1 className='text-3xl font-bold my-5'>Collections</h1>
          <div className='flex my-5'>
            <input value={searchkey} onChange={(e)=>setsearchkey(e.target.value)} type="text" className='p-2 border border-gray-200 text-black w-100 placeholder-gray-500' placeholder='Search by title' />
            <button  className='bg-blue-900 ms-2 text-white p-2 hover:bg-white hover:text-blue-900 hover:border hover:border-blue-900'>Search</button>
          </div>
        </div>
        
        <div className='md:grid grid-cols-4 md:px-20 p-5 mb-10'>
          {/* filters */}
          <div className='col-span-1'>
            <h1>Filters</h1>
            
            {category.map((item,index)=>(
              <div onClick={()=>categoryfilter(item)} key={index} className='mt-5'>
              <input type="radio" id={item} name="filter"/>
              <label htmlFor={item} className='ms-2'>{item}</label>
  
            </div>

            )) }
             <div className='mt-5'>
              <input onClick={()=>categoryfilter("No Filter")} type="radio" id='nofilter' name='filter'/>
              <label htmlFor="nofilter" className='ms-2'>No Filter</label>
  
            </div>
  
          </div>
  
          <div className='col-span-3'>
  
            {allbooks?.length >0 ?<div className='md:grid grid-cols-4 mt-5 md:mt-0'>
  {
    allbooks?.map((item,index)=>(
  
      <div key={index}>
                <img src={item?.imageurl} alt="" width={"100%"} height={"300px"}/>
                <div>
                  <p className='mt-2'>{item.title}</p>
                  <p className='mt-2'>Author :{item.author}</p>
                    <Link to={`/view-books/${item?._id}`}><button className='bg-blue-900 w-40 mt-2 text-white p-2 hover:bg-white hover:text-blue-900 hover:border hover:border-blue-900'>View Book</button></Link>
    
                </div>
              </div>
  
    ))
  }
  
              
  
            </div>
  :
            <p className='text-red-500 mt-10 font-bold'>No Books Available</p>}
  
          </div>
  
        </div>
      </div>
:
        <div className='my-10 flex justify-center items-center flex-col'>
          <img src="https://i.pinimg.com/originals/11/ad/48/11ad486604ba6802ffe7cda95ce1f528.gif" alt="" />
          <p className='font-semibold text-xl mt-4 '>Please Login to explore more <Link to={"/login"} className='text-blue-500'>click</Link></p>

        </div>}

      <Footer />

    </>
  )
}

export default AllBooks