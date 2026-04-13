import React, { useContext, useEffect, useState } from 'react'
import Adminheader from '../Components/Adminheader'
import Footer from '../../Common/Components/Footer'
import Adminsidebar from '../Components/Adminsidebar'
import { toast } from 'react-toastify'
import { updateadminprofileapi } from '../../services/allapi'
import baseurl from '../../services/baseurl'
import { adminprofileupdatecontext } from '../../context/Contextshare'

function AdminSettings() {

  const [token,settoken] = useState("")
  const [admindetails,setadmindetails] = useState({
    username : "",
    password : "",
    confirmpassword : "",
    profile : ""
  })
  const [existingprofile,setexistingprofile] = useState("")
  const [preview,setpreview] = useState("")
  const {setadminprofileupdatestatus} = useContext(adminprofileupdatecontext)

  console.log(admindetails);
  console.log(existingprofile);


  const handlereset = () =>{
    let user = JSON.parse(sessionStorage.getItem("existinguser"))
      setadmindetails({...admindetails,username : user.username,password : user.password,confirmpassword : user.password})
      setexistingprofile(user.profile)
      setpreview("")
  }
  
  const handlefile = (e) =>{
    setadmindetails({...admindetails,profile : e.target.files[0]})
    setpreview(URL.createObjectURL(e.target.files[0]))
  }

  const handlesubmit = async () =>{
    const {username,password,confirmpassword} = admindetails
    if(!username || !password || !confirmpassword){
      toast.info("fill details completely")
    }else{
      if( password != confirmpassword){
        toast.warning("password does not match")
      }else{
        //reqheader
    const reqheader = {
      "Authorization" : `Bearer ${token}`
    }

    if(preview){
      const reqbody = new FormData()
      for(let key in admindetails){
        reqbody.append(key,admindetails[key])
      }

      const result = await updateadminprofileapi(reqbody,reqheader)
      console.log(result);
      if(result.status == 200){
        toast.success("profile updated successfully")
        sessionStorage.setItem("existinguser",JSON.stringify(result.data))
        setadminprofileupdatestatus(result)
      }else{
        toast.error("something went wrong")
      }
      

    }else{
      const result = await updateadminprofileapi({username,password,profile : existingprofile},reqheader)
      console.log(result);
      if(result.status == 200){
        toast.success("profile updated successfully")
        sessionStorage.setItem("existinguser",JSON.stringify(result.data))
        setadminprofileupdatestatus(result)
      }else{
        toast.error("something went wrong")
      }

    }

      }
    }
  }
  

  useEffect(()=>{
    if(sessionStorage.getItem("token")){
      settoken(sessionStorage.getItem("token"))
      let user = JSON.parse(sessionStorage.getItem("existinguser"))
      setadmindetails({...admindetails,username : user.username,password : user.password,confirmpassword : user.password})
      setexistingprofile(user.profile)
    }
  },[])

  return (
    <>
      <Adminheader />

      <div className='md:grid grid-cols-[1fr_4fr]'>
        <div>
          <Adminsidebar />
        </div>
        <div className='p-4'>
          <h1 className='text-3xl text-center font-semibold my-10'>Settings</h1>
          <div className='md:grid grid-cols-2 mt-10'>
            <div className='md:px-10 px-5'>
              <p className='text-justify'> Lorem icumque laborum. Voluptatum qui similique excepturi quibusdam, accusamus quod vitae suscipit obcaecati officiis quis debitis minima nulla! Id excepturi, officiis recusandae quisquam quaerat molestiae ipsam impedit, vitae animi vero magni ex nostrum! Assumenda deleniti aliquam excepturi sint iure dicta distinctio reprehenderit sequi earum consequatur beatae recusandae eaque consequuntur aut maiores aliquid quasi, reiciendis accusamus alias, dolore ad exercitationem optio. Delectus voluptas, in hic at error veritatis itaque rerum magnam natus?</p>
              <p className='text-justify mt-10'>Lorem ipsum obcaecati, ipsa dolor iste? Explicabo iusto, perspiciatis eum non laudantium, omnis ipsam voluptas obcaecati, repellat quas doloribus? Cumque blanditiis maiores consectetur tempore illo dignissimos consequatur corporis ratione autem quis recusandae mollitia expedita reprehenderit, ipsa repudiandae obcaecati iste voluptatem libero! Veniam expedita tempora corporis vitae ex ut maiores amet id aspernatur, enim rem pariatur neque fuga suscipit deleniti mollitia, necessitatibus sequi excepturi porro saepe minus accusantium, accusamus perspiciatis officia! Placeat officia vel delectus nisi earum.</p>
            </div>
            <div className='md:px-10 px-5'>
              <form action="" className='bg-blue-200 md:p-10 p-5 rounded my-10 md:my-0'>
                <div className='flex justify-center items-center my-10'>
                  <label htmlFor="edituserprofile">
                    <input onChange={(e)=>handlefile(e)} type="file" name="" id="edituserprofile" style={{ display: "none" }} />
                   
                    {existingprofile == "" ? <img src={preview ? preview : "https://imgs.search.brave.com/G_CdsrWw2bn9y2hqgj2yHsIscvl6X8-O5qK8puH9B-A/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9wbmctY2lyY2xl/LXByb2ZpbGUtcGlj/dHVyZS1zdGlja2Vy/LWNhc3VhbC1tYW4t/dHJhbnNwYXJlbnQt/YmFja2dyb3VuZF81/Mzg3Ni05NDU4NDUu/anBnP3NlbXQ9YWlz/X2h5YnJpZCZ3PTc0/MCZxPTgw"} alt="" width={"170px"} height={"170px"} style={{ borderRadius: "50%" }} />
                    :
                     <img src={preview ? preview : `${baseurl}/Imguploads/${existingprofile}`} alt="" width={"170px"} height={"170px"} style={{ borderRadius: "50%" }} />
                    }



                  </label>

                </div>
                <div className='mb-3'>
                  <label htmlFor="">Username</label>
                  <input value={admindetails?.username} onChange={(e)=>setadmindetails({...admindetails,username : e.target.value})} type="text" name="" placeholder='Username' className='bg-white w-full rounded p-2' id="" />

                </div>
                <div className='mb-3'>
                  <label htmlFor="">Password</label>
                  <input value={admindetails?.password} onChange={(e)=>setadmindetails({...admindetails,password : e.target.value})} type="text" name="" placeholder='password' className='bg-white w-full rounded p-2' id="" />

                </div>
                <div className='mb-3'>
                  <label htmlFor="">Confirm Password</label>
                  <input value={admindetails?.confirmpassword} onChange={(e)=>setadmindetails({...admindetails,confirmpassword : e.target.value})} type="text" name="" placeholder='confirm password' className='bg-white w-full rounded p-2' id="" />

                </div>
                <div className='flex justify-between mt-10'>
                  <button onClick={handlereset} type='button' className='bg-orange-600 text-white rounded p-4 w-1/2 hover:border hover:border-red-600 hover:text-blue-700'>Reset</button>
                  <button onClick={handlesubmit} type='button' className='bg-green-600 text-white ms-3 rounded p-4 w-1/2 hover:border hover:border-red-600 hover:text-blue-700'>Update</button>

                </div>

              </form>

            </div>

          </div>

        </div>

      </div>



      <Footer />
    </>
  )
}

export default AdminSettings