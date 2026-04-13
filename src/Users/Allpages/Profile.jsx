import React, { useContext, useEffect, useState } from 'react'
import Header from '../../Common/Components/Header'
import Footer from '../../Common/Components/Footer'
import { MdVerified } from "react-icons/md";
import { FaFileUpload, FaRegEdit } from "react-icons/fa";
import { toast } from 'react-toastify';
import { addbookapi, deleteuseraddedbooksapi, gethistoryapi, getuseraddedbooksapi } from '../../services/allapi';
import Editprofile from '../Editprofile';
import { userprofileupdatecontext } from '../../context/Contextshare';



function Profile() {

  const [sellbook,setsellbook] = useState(true)
  const [bookstatus,setbookstatus] = useState(false)
  const [phistory,setphistory] = useState(false)
  const [preview,setpreview] = useState("")
  const [alluploadimages,setalluploadimages] = useState([])
  const [token,settoken] = useState("")
  const [username,setusername] = useState("")
  const [useraddedallbooks,setuseraddedallbooks] = useState([])
  const [deletebookstatus,setdeletebookstatus] = useState(false)
  const [bookdetails,setbookdetails] = useState({title:"",author:"",noofpages:"",imageurl:"",price:"",disprice:"",abstract:"",publisher:"",language:"",isbn:"",category:"",uploadimages:[]})
console.log(bookdetails);

const {userprofileupdatestatus} = useContext(userprofileupdatecontext)

const handlefile = (e) =>{
  console.log(e.target.files[0]);
  const filearray = bookdetails.uploadimages
  filearray.push(e.target.files[0])
  setbookdetails({...bookdetails,uploadimages : filearray})
 
  //convert files to url
  const url = URL.createObjectURL(e.target.files[0])
  setpreview(url)
  let images = alluploadimages
  images.push(url)
  setalluploadimages([...images])
  
}
console.log(alluploadimages);

const handleaddbook = async () =>{
  const { title,author,noofpages,imageurl,price,disprice,abstract,publisher,language,isbn,category,uploadimages } = bookdetails
  if(!title || !author || !noofpages || !imageurl || !price || !disprice || !abstract || !publisher || !language || !isbn || !category || uploadimages.length ==0 ){
    toast.info("fill completely")
  }else{
    //reqheader
    const reqheader = {
      "Authorization" : `Bearer ${token}`
    }
    //reqbody - formData() //append - reqbody.append(key,value)
    //reqbody.append("title",title)

    const reqbody = new FormData()

    for(let key in bookdetails){
      if(key != "uploadimages"){
          reqbody.append(key,bookdetails[key])
      }else{
        bookdetails.uploadimages.forEach(img =>{
          reqbody.append("uploadimages",img)
        })
      }
    }
    try{
      const result = await addbookapi(reqbody,reqheader)
      console.log(result);
      if(result.status == 200){
        toast.success("Bokk added")
        reset()
      }else if(result.status == 401){
        toast.warning(result.response.data)
      }else{
        toast.error("Error Occurred")
        reset()
      }
      
    }catch (error){
      toast.error("something went wrong")
    }
  }
}

//get user added books
const getuseraddedbooks = async () =>{
  try {
     //reqheader
    const reqheader = {
      "Authorization" : `Bearer ${token}`
    }
    const result = await getuseraddedbooksapi(reqheader)
    console.log(result);
    setuseraddedallbooks(result.data)
    
  } catch (error) {
    console.log(error);
    
  }
}
console.log(useraddedallbooks);

const getuserboughtbooks = async () =>{
  try {
     //reqheader
    const reqheader = {
      "Authorization" : `Bearer ${token}`
    }
    const result = await gethistoryapi(reqheader)
    console.log(result);
    setuseraddedallbooks(result.data)
    
  } catch (error) {
    console.log(error);
    
  }
}


const handledeletebook = async (id) =>{
  try {
    const result = await deleteuseraddedbooksapi(id)
    console.log(result);

    if(result.status == 200){
      setdeletebookstatus(true)
      toast.success("Book deleted")
    }else{
      toast.error("Smthng went wrong")
    }
    
  } catch (error) {
    console.log(error);
  }
}



useEffect(()=>{
  if(sessionStorage.getItem("token")){
    settoken(sessionStorage.getItem("token"))
  }
  if(sessionStorage.getItem("existinguser")){
    const name = JSON.parse(sessionStorage.getItem("existinguser"))
    setusername(name.username)
  }
},[userprofileupdatestatus])

const reset = () =>{
  setbookdetails({
    title:"",author:"",noofpages:"",imageurl:"",price:"",disprice:"",abstract:"",publisher:"",language:"",isbn:"",category:"",uploadimages:[]
  })
  setpreview("")
  setalluploadimages([])
}

useEffect(()=>{
  if(bookstatus == true){
    getuseraddedbooks()
  }
},[bookstatus,deletebookstatus])

  return (
    <>
      <Header />
      <div style={{ height: "200px" }} className='bg-black'> </div>
      <div className='bg-white p-3' style={{ width: "230px", height: "230px", borderRadius: "50%", marginLeft: "70px", marginTop: "-130px" }}>
        <img style={{ width: "200px", height: "200px", borderRadius: "50%" }} src="https://i.pinimg.com/1200x/4c/85/31/4c8531dbc05c77cb7a5893297977ac89.jpg" alt="" />
      </div>
      <div className='md:flex justify-between px-20 mt-5'>
        <div className='flex items-center'>
          <h1 className='font-bold md:text-3xl text-2xl'>{username}</h1>
          <MdVerified className='text-blue-500 ms-3 text-xl' />


        </div>
        <div>
          <Editprofile/>

        </div>

      </div>
<p className='text-justity px-5 my-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit perferendis, eligendi suscipit veniam amet, est, eaque molestias voluptas sint rerum repellat illum quidem unde beatae.</p>

<div className='flex justify-center items-center my-8 font-medium text-lg'>
          <p onClick={()=>{setsellbook(true),setbookstatus(false),setphistory(false)}} className={sellbook ?"text-blue-500" :'p-4 border-b border-gray-200 cursor-pointer'}>Sell Book</p>
          <p onClick={()=>{setsellbook(false),setbookstatus(true),setphistory(false)}} className={bookstatus? "text-blue-500" :'p-4 border-b border-gray-200 cursor-pointer'}>Book Status</p>
          <p onClick={()=>{setsellbook(false),setbookstatus(false),setphistory(true)}} className={phistory? "text-blue-500" :'p-4 border-b border-gray-200 cursor-pointer'}>Purchase History</p>
        </div>

{sellbook && <div className='md:p-20 p-5'>
  <div className='bg-gray-200 md:p-10 p-5 rounded'>
    <h1 className='text-center text-3xl font-medium'>Book Details</h1>
    <div className='md:grid grid-cols-2'>
      <div className='md:my-10 mt-5 px-2'>
        <div className='mb-3'>
          <input value={bookdetails.title} onChange={(e)=>setbookdetails({...bookdetails,title:e.target.value})} type="text" placeholder='title' className='p-2 bg-white w-full rounded' name="" id="" />

        </div>
         <div className='mb-3'>
          <input value={bookdetails.author} onChange={(e)=>setbookdetails({...bookdetails,author:e.target.value})} type="text" placeholder='author' className='p-2 bg-white w-full rounded' name="" id="" />

        </div>
         <div className='mb-3'>
          <input value={bookdetails.noofpages} onChange={(e)=>setbookdetails({...bookdetails,noofpages:e.target.value})} type="text" placeholder='no of pages' className='p-2 bg-white w-full rounded' name="" id="" />

        </div>
         <div className='mb-3'>
          <input value={bookdetails.imageurl} onChange={(e)=>setbookdetails({...bookdetails,imageurl:e.target.value})} type="text" placeholder='img url' className='p-2 bg-white w-full rounded' name="" id="" />

        </div>
         <div className='mb-3'>
          <input value={bookdetails.price} onChange={(e)=>setbookdetails({...bookdetails,price:e.target.value})} type="text" placeholder='price' className='p-2 bg-white w-full rounded' name="" id="" />

        </div>
         <div className='mb-3'>
          <input value={bookdetails.disprice} onChange={(e)=>setbookdetails({...bookdetails,disprice:e.target.value})} type="text" placeholder='discount price' className='p-2 bg-white w-full rounded' name="" id="" />

        </div>
         <div className='mb-3'>
          <textarea value={bookdetails.abstract} onChange={(e)=>setbookdetails({...bookdetails,abstract:e.target.value})} type="text" placeholder='abstract' rows={'8'} className='p-2 bg-white w-full rounded' name="" id="" />

        </div>

      </div>
      <div className='md:my-10 px-2'>
         <div className='mb-3'>
          <input value={bookdetails.publisher} onChange={(e)=>setbookdetails({...bookdetails,publisher:e.target.value})} type="text" placeholder='publisher' className='p-2 bg-white w-full rounded' name="" id="" />

        </div>
         <div className='mb-3'>
          <input value={bookdetails.language} onChange={(e)=>setbookdetails({...bookdetails,language:e.target.value})} type="text" placeholder='language' className='p-2 bg-white w-full rounded' name="" id="" />

        </div>
         <div className='mb-3'>
          <input value={bookdetails.isbn} onChange={(e)=>setbookdetails({...bookdetails,isbn:e.target.value})} type="text" placeholder='ISBN' className='p-2 bg-white w-full rounded' name="" id="" />

        </div>
         <div className='mb-3'>
          <input value={bookdetails.category} onChange={(e)=>setbookdetails({...bookdetails,category:e.target.value})} type="text" placeholder='category' className='p-2 bg-white w-full rounded' name="" id="" />

        </div>

        <div>
          {preview ? <img src={preview} alt="" style={{width:"200px",height:"200px"}}/>
          :
          <label htmlFor="uploadbookimg">
            <input onChange={(e)=>handlefile(e)} id='uploadbookimg' type="file" style={{display:"none"}}/>
            <img src="https://i.pinimg.com/736x/db/1c/88/db1c886cdd05cbdc5dff9716d6794e81.jpg" alt="" style={{width:"200px",height:"200px"}}/>
          </label>}

          {preview && 
          <div className='mt-10 flex items-center gap-5'>
            { 
              alluploadimages.map((item)=>(
                <img src={item} alt="" style={{width:"50px",height:"50px"}}/>
              )
            )
            }
            {alluploadimages.length < 3 && 
                <label htmlFor="uploadbookimg" className='ms-4'>
                  <input onChange={(e)=>handlefile(e)} id='uploadbookimg' type="file" style={{display:"none"}} />
                  <img src="https://i.pinimg.com/736x/db/1c/88/db1c886cdd05cbdc5dff9716d6794e81.jpg" alt="" style={{width:"50px",height:"50px"}}/>
                </label>}


          </div>}
        </div>
          <button onClick={reset} className='w-20 h-8 rounded-md hover:bg-white hover:text-red-700 bg-red-400 ms-90 mt-60'>Reset</button>
          <button onClick={handleaddbook} className='w-20 h-8 rounded-md hover:bg-white hover:text-green-700 bg-green-500 ms-10'>Submit</button>
      </div>

    </div>

  </div>

  
</div>}
{bookstatus &&
<div className='p-10 my-20 shadow rounded'>

  {useraddedallbooks?.length>0 ?
  useraddedallbooks?.map((book)=>(
    <div className='bg-gray-200 p-5 rounded mt-4'>
    <div className='md:grid grid-cols-[]3fr_1fr'>
      <div className='px-4'>
        <h1 className='text-2xl'>{book?.title}</h1>
        <h2>Author : {book?.author}</h2>
        <h3 className='text-blue-600'>$ {book?.price}</h3>
        <p>{book?.abstract}</p>
          <div className='flex mt-5'>
            {book?.status == "pending" ? <img src="https://www.psdstamps.com/wp-content/uploads/2022/04/round-pending-stamp-png.png" alt="" style={{width:"70px",height:"70px"}}/>
            : book?.status == "approved" ?
             <img src="https://juststickers.in/wp-content/uploads/2017/08/seal-of-approval.png" alt="" style={{width:"70px",height:"70px"}}/>
             :
              <img src="https://cdn-icons-png.flaticon.com/512/6188/6188726.png" alt="" style={{width:"70px",height:"70px"}}/>}

          </div>
      </div>
<div className='px-4 mt-4 md:mt-4'>
<img src={book?.imageurl} alt="" className='w-70' style={{height:"250px"}}/>
<div className='flex justify-end mt-4'>
  <button type='button' onClick={()=>handledeletebook(book?._id)} className='p-2 rounded bg-red-600 text-white hover:bg-white hover:text-red-600'>Delete</button>

</div>
</div>
    </div>

  </div>

  ))
   
  :
  <div className='flex justify-center items-center flex-col'>
    <img src="https://i.pinimg.com/originals/67/d2/3e/67d23e71a266fc70849da9ee475d9c13.gif" alt="" style={{width:"200px",height:"200px",marginTop:"30px"}} />
    <p className='text-red-600 text-2xl'>No books added yet</p>

  </div>}

  
</div>}

{phistory &&<div>
  <div className='bg-gray-200 p-5 rounded mt-4'>
    <div className='md:grid grid-cols-[]3fr_1fr'>
      <div className='px-4'>
        <h1 className='text-2xl'>title</h1>
        <h2>Author :</h2>
        <h3 className='text-blue-600'>$ price</h3>
        <p>abstract</p>
          
      </div>
<div className='px-4 mt-4 md:mt-4'>
<img src="https://i.pinimg.com/736x/d9/50/37/d950379c07075047fb91a39020a95c4f.jpg" alt="" className='w-70' style={{height:"250px"}}/>
<div className='flex justify-end mt-4'>
 

</div>
</div>
    </div>

  </div>
</div>
}



      <Footer />
    </>
  )
}

export default Profile