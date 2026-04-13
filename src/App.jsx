import { Route, Routes } from 'react-router-dom'
import './App.css'
import Landingpage from './Common/Allpages/Landingpage'
import Contact from './Common/Allpages/Contact'
import Auth from './Common/Allpages/Auth'
import Pnf from './Common/Allpages/Pnf'
import AllBooks from './Users/Allpages/AllBooks'
import Careers from './Users/Allpages/Careers'
import Profile from './Users/Allpages/Profile'
import Viewbooks from './Users/Allpages/Viewbooks'
import AdminHome from './Admin/Allpages/AdminHome'
import AdminCareer from './Admin/Allpages/AdminCareer'
import AdminBooks from './Admin/Allpages/AdminBooks'
import AdminSettings from './Admin/Allpages/AdminSettings'
import { useContext, useEffect, useState } from 'react'
import Preloader from './Common/Allpages/Preloader'
import { ToastContainer } from 'react-toastify'
import Paymentsuccess from './Users/Allpages/Paymentsuccess'
import Paymenterror from './Users/Allpages/Paymenterror'
import { userauthcontext } from './context/Authcontext'


function App() {

  const [loader,setloader] = useState("true")
  const {role} = useContext(userauthcontext)

  useEffect(()=>{
    setTimeout(() => {
      setloader(false)
      
    }, 5000);
  },[])
 
  return (
    <>

    <Routes>

      {/* common */}
      <Route path='/' element={loader ? <Preloader/> : <Landingpage/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/login' element={<Auth/>}/>
      <Route path='/register' element={<Auth register />}/>
      

      {/* users */}

     {role == "user" && <>
        <Route path='/allbooks' element={<AllBooks/>}/>
        <Route path='/careers' element={<Careers/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/view-books/:id' element={<Viewbooks/>}/>
        <Route path='/paymentsuccess' element={<Paymentsuccess/>}/>
        <Route path='/paymenterror' element={<Paymenterror/>}/>
      </>}


      {/* admin */}
      {role == "admin" && <>
        <Route path='/adminhome' element={<AdminHome/>}/>
        <Route path='/admincareers' element={<AdminCareer/>}/>
        <Route path='/adminbooks' element={<AdminBooks/>}/>
        <Route path='/adminsettings' element={<AdminSettings/>}/>
      </>}


<Route path='*' element={<Pnf/>}/>

    </Routes>
    <ToastContainer
position="top-center"
autoClose={3000}
theme="colored"

/>
     
    </>
  )
}

export default App
