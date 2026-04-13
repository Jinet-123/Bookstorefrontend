import React from 'react'
import Header from '../../Common/Components/Header'
import Footer from '../../Common/Components/Footer'
import { Link } from 'react-router-dom'

function Paymentsuccess() {
  return (
    <>

    <Header/>

    <div className='grid grid-cols-2 py-20 px-40 justify-center items-center'>
        <div>
                <h1 className='text-6xl text-blue-600'>Congratulation !!!</h1>
                <p className='mt-5 mb-10'>Thanks for shopping with us, we thought a good time you spend</p>
                <Link to={"/allbooks"} className='text-blue-500'>Explore more books </Link>
        </div>
        <div>
            <img src="https://i.pinimg.com/originals/74/2f/7e/742f7ea29cbfd7fd3f4848f17e621070.gif" alt="" />
        </div>
    </div>




    <Footer/>
    
    </>
  )
}

export default Paymentsuccess