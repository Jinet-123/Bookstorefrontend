import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";



function Footer() {
  return (
    <>

    <div className='md:grid grid-cols-3 md:gap-9 bg-gray-900 text-white p-10'> 
        <div>
            <h3 className='font-bold'>About Us</h3>
            <p className='text-justify mt-3'>Lorem Lorem ipsum dolor sit amet consectetur. ipsum, dolor sit amet consectetur adipisicing elit. Magni rerum dolores ipsam,
                 quaerat omnis vitae quidem nostrum consequatur dicta numquam odit, esse tenetur error culpa? Debitis vel quod ad quae?</p>
        </div>
        <div>
            <h3 className='font-bold'>NEWSLETTER</h3>
            <p className='my-5'>Stay Updated With Our Latest Trends</p>
            <div>
                <input type="text" placeholder='Email Id' className='p-2 bg-white placeholder-gray-500' />
                <button className='bg-yellow-400 p-3 ms-2'><FaArrowRight /></button>
            </div>
        </div>
        <div>
            <h3 className='font-bold'>Follow Us</h3>
            <p className='my-5'>Let Us Be Social</p>
            <div className='flex mt-4 gap-3'>
                    <FaInstagram className='text-2xl'/>
                    <FaSquareXTwitter className='text-2xl'/>
                    <FaFacebook className='text-2xl'/>
                    <FaLinkedin className='text-2xl'/>

            </div>
        </div>

    </div>
    <div className='bg-black p-3 text-center text-white'>
        <p>Copyright  ⓒ  2025 All Rights Reserved | This website Is made with ❤️ by Jinet KL | Luminar Technolab</p>

    </div>
    
    </>
  )
}

export default Footer