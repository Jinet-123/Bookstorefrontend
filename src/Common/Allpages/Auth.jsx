import React, { useContext, useState } from 'react'
import { FaCircleUser } from "react-icons/fa6";
import { Link, useNavigate } from 'react-router-dom';
import { FaRegEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";
import { googleloginapi, loginapi, registerapi } from '../../services/allapi';
import { toast } from 'react-toastify';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";
import { userauthcontext } from '../../context/Authcontext';


function Auth({ register }) {
  const [viewpass, setviewpass] = useState("false")
  const [userdetails, setuserdetails] = useState({
    username: "",
    email: "",
    password: ""
  })
  console.log(userdetails);

  const {setauthorizeduser} = useContext(userauthcontext)

  const handlegooglelogin = async (credentialResponse) =>{
    console.log(credentialResponse.credential);
    const googledata = jwtDecode(credentialResponse.credential)
    console.log(googledata);
    try {
      const result = await googleloginapi({password : "googlepassword",email :googledata.email,username :googledata.name,profile :googledata.picture})
      console.log(result);
      if(result.status == 200 ){
        sessionStorage.setItem("existinguser",JSON.stringify(result.data.existinguser))
        sessionStorage.setItem("token",result.data.token)
        toast.success('login success')
        setauthorizeduser(true)
        if (result.data.existinguser.role == "admin") {
          navigate("/adminhome")
        } else {
          navigate("/")
        }
      }else{
        toast.error("somthng went wrong")
      }
      
    } catch (error) {
        console.log(error);
        
    }
    
    
  }

  const navigate = useNavigate()

  const handleregister = async () => {
    const { username, email, password } = userdetails
    if (!username || !email || !password) {
      alert("fill completely")
    } else {
      const result = await registerapi(userdetails)
      console.log(result);
      if (result.status == 200) {
        toast.success(`registered successfully`)
        setuserdetails({
          username: "",
          email: "",
          password: ""

        })
        navigate("/login")
      } else if (result.status == 404) {
        toast.warning(result.response.data)
        setuserdetails({
          username: "",
          email: "",
          password: ""

        })

      } else {
        toast.error(`something went wrong`)
        setuserdetails({
          username: "",
          email: "",
          password: ""
        })
      }


    }


  }

  const handlelogin = async () => {
    const { email, password } = userdetails
    if (!email || !password) {
      toast.info("fill completely")
    } else {
      const result = await loginapi(userdetails)
      console.log(result);
      if (result.status == 200) {
        sessionStorage.setItem("existinguser", JSON.stringify(result.data.existinguser))
        sessionStorage.setItem("token", result.data.token)
        toast.success(`Login success`)
        setauthorizeduser(true)
        if (result.data.existinguser.role == "admin") {
          navigate("/adminhome")
        } else {
          navigate("/")
        }
        setuserdetails({
          username: "",
          email: "",
          password: ""
        })

      } else if (result.status == 404) {
        toast.warning(result.response.data)
        setuserdetails({
          username: "",
          email: "",
          password: ""
        })
      } else if (result.status == 401) {
        toast.warning(result.response.data)
      } else {
        toast.error(`something went wrong`)
        setuserdetails({
          username: "",
          email: "",
          password: ""
        })
      }

    }
  }

  return (
    <>

      <div className='w-full min-h-screen flex justify-center items-center flex-col bg-[url(https://i.pinimg.com/1200x/28/26/ad/2826ad3fb9aaf5e4ca2cbd41b65dfc59.jpg)] bg-cover bg-center'>
        <div className='p-10'>
          <h1 className='text-3xl font-bold text-center'>BOOKSTORE</h1>
          <div style={{ width: "400px" }} className='bg-blue-900 text-white p-5 flex flex-col my-5 justify-center items-center'>
            <div style={{ width: "100px", height: "100px", borderRadius: "50%" }} className='border mb-3 flex justify-center items-center'>
              <FaCircleUser className='text-6xl' />
            </div>
            {register ? <h1 className='text-2xl'>Register</h1> : <h1 className='text-2xl'>Login</h1>}

            <form action="">
              {register && <div className='my-5'>
                <label htmlFor="">Username</label>
                <input type="text" value={userdetails?.username} onChange={(e) => setuserdetails({ ...userdetails, username: e.target.value })} placeholder='username' className='bg-white p-2 w-full rounded mt-2 placeholder-gray-500 text-black ' />

              </div>}

              <div className='my-5'>
                <label htmlFor="">Email</label>
                <input type="text" value={userdetails?.email} onChange={(e) => setuserdetails({ ...userdetails, email: e.target.value })} placeholder='Enter email' className='bg-white p-2 w-full rounded mt-2 placeholder-gray-500 text-black ' />

              </div>

              <div className='my-5'>
                <label htmlFor="">Password</label>
                <input type={viewpass ? "text" : "password"} value={userdetails?.password} onChange={(e) => setuserdetails({ ...userdetails, password: e.target.value })} placeholder='Enter password' className='bg-white p-2 w-full rounded mt-2 placeholder-gray-500 text-black ' />
                {viewpass ? <FaRegEye onClick={() => setviewpass(!viewpass)} style={{ marginTop: "-25px", marginLeft: "90%", color: "black" }} /> :
                  <FaEyeSlash onClick={() => setviewpass(!viewpass)} style={{ marginTop: "-25px", marginLeft: "90%", color: "black" }} />}



              </div>
              <div className='mt-2'>
                <p className='text-xs text-orange-400'>*Never share your password with others</p>

              </div>
              <div className='mt-4'>
                {register ? <button type='button' onClick={handleregister} className='bg-green-700 p-2 w-full rounded'>Register</button> :
                  <button type='button' onClick={handlelogin} className='bg-green-700 p-2 w-full rounded'>Login</button>}

              </div>

              {!register &&<div className='mt-2'>


                <GoogleLogin
                  onSuccess={credentialResponse => {
                    console.log(credentialResponse);
                    handlegooglelogin(credentialResponse)
                  }}
                  onError={() => {
                    console.log('Login Failed');
                  }}
                />
              </div>}
              <div className='mt-3'>
                {register ? <p>Are You Already a User <Link className='text-blue-400' to={"/login"}>Login</Link></p> :
                  <p>Are You a New User <Link className='text-blue-400' to={"/register"}>Register</Link></p>}

              </div>
            </form>

          </div>

        </div>
      </div>

    </>
  )
}

export default Auth