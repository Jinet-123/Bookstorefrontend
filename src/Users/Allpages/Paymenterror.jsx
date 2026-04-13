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
                <h1 className='text-6xl text-blue-600'>Error Occurred !!!</h1>
                <p className='mt-5 mb-10'>Kindly Retry</p>
                <Link to={"/allbooks"} className='text-blue-500'>Explore more books </Link>
        </div>
        <div>
            <img src="https://imgs.search.brave.com/fWVPJHKYMTI4SojTHz8kyY16uMocwjh_IpmcCHwNew4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9naWZk/Yi5jb20vaW1hZ2Vz/L2hpZ2gvcmVkLXdh/cm5pbmctZXJyb3It/Y29tcHV0ZXItZ2xp/dGNoLWJ4dWc2N2U5/OHczMTdtNTUuZ2lm.gif" alt="" />
        </div>
    </div>




    <Footer/>
    
    </>
  )
}

export default Paymentsuccess