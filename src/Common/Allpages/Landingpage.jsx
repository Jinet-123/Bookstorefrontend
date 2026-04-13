import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import { FaSearch } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { homebookapi } from '../../services/allapi';


function Landingpage() {

  const [homebook,sethomebook] = useState([])

  const gethomebooks = async () =>{
    const result = await homebookapi()
    console.log(result);
    sethomebook(result.data)
  }

  useEffect(()=>{
    gethomebooks()
  },[])
  return (
    <>
    <Header/>
  
          <div className='flex flex-col h-screen justify-center items-center bg-[url(https://i.pinimg.com/736x/23/44/7c/23447cf2d17d6962783578c82c11b3b7.jpg)]  bg-no-repeat bg-cover'>
              <div className='flex flex-col h-screen justify-center items-center' style={{width:"1300px", height:"500px",backgroundColor:"rgba(0,0,0,0.5)"}}>
                <h1 className='text-5xl font-bold text-white'>Wonderfull Gifts</h1>
                <p className='text-white'>Give your family and friends a book</p>
                <div className='mt-9 flex'>
                  <input type="text" placeholder='search books' className='bg-white p-2 rounded-3xl placeholder-gray-500 w-100' />
                  <FaSearch className='text-gray-700 mt-3 hover:text-red-500' style={{marginLeft:"-40px"}}/>


                </div>

              </div>
          </div>

<div className='md:px-40 flex flex-col justify-center items-center'>
  <h1 className='text-3xl mt-5'>New Arrivals</h1>
  <h1 className='text-2xl mt-2'>Explore Our Latest Collection</h1>

 {homebook.length >0 ?
    <div className='md:grid grid-cols-4 w-full mt-5'>
      {homebook.map((item)=>(

        <div className='p-3'>
          
            <section className='shadow p-3 rounded'>
             
                <img height={"400px"} width={"100%"} src={item.imageurl} alt="" />
                <div className='text-center mt-3'>
                  <p className='font-bold text-2xl'>{item.title}</p>
                  <p className='font-bold text-2xl'> {item.author}</p>
                  <p className='font-bold'>${item.price}</p>
        
                </div>

          </section>
            
  </div>
      ))
    }
    
  </div>

  :
  <p>Loading ...</p>

}

  <div className='text-center my-5'>
   <Link to={"/allbooks"}> <button className='px-3 py-2 bg-blue-900 text-white hover:border hover:border-blue-900 hover:text-blue-900 hover:bg-white'>Explore More</button></Link>

  </div>

</div>

<div className="w-full flex flex-col items-center py-16 px-4 md:px-20">
      {/* Heading */}
      <div className="text-center mb-10">
        <p className="text-sm tracking-wide uppercase">Featured Authors</p>
        <h2 className="text-3xl md:text-4xl font-semibold mt-2">
          Captivates with every word
        </h2>
      </div>

      {/* Content Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-6xl">
        {/* Text Section */}
        <div className="space-y-6 text-gray-700 leading-relaxed text-justify">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            fuga nostrum illum distinctio eum quidem recusandae soluta aliquam
            laboriosam odit quas, nam molestias fugiat culpa rem nulla iste?
            Modi, molestias. Lorem ipsum dolor sit amet, consectetur adipisicing
            elit. Sunt earum possimus accusantium necessitatibus id neque soluta
            quibusdam explicabo laborum? Deserunt vel quia voluptates dicta
            incidunt illo fuga pariatur sequi error.
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            fuga nostrum illum distinctio eum quidem recusandae soluta aliquam
            laboriosam odit quas, nam molestias fugiat culpa rem nulla iste?
            Modi, molestias. Lorem ipsum dolor sit amet, consectetur adipisicing
            elit. Sunt earum possimus accusantium necessitatibus id neque soluta
            quibusdam explicabo laborum? Deserunt vel quia voluptates dicta
            incidunt illo fuga pariatur sequi error.
          </p>
        </div>

        {/* Image */}
        <div className="flex justify-center">
          <img
            src="https://i.pinimg.com/736x/43/83/72/43837212849118ebbd31c376b2cc472b.jpg" // replace with your image path
            alt="Author portrait"
            width={'300px'}
            className="rounded-lg shadow-lg object-cover"
          />
        </div>
      </div>
    </div>

    <div className="w-full flex flex-col items-center py-20 px-4 md:px-20 bg-white">
      {/* Heading */}
      <div className="text-center mb-10">
        <p className="text-sm tracking-wide uppercase">Testimonials</p>
        <h2 className="text-3xl md:text-4xl font-semibold mt-2">
          See What Others Are Saying
        </h2>
      </div>

      {/* Profile Image */}
      <div className="flex flex-col items-center gap-4">
        <img
          src="https://i.pinimg.com/736x/d0/cb/d1/d0cbd1380c72ddf3750c896433b2dea1.jpg" // Replace with your image
          alt="Testimonial user"
          className="w-32 h-32 rounded-full object-cover shadow-md"
        />
        <h3 className="font-medium text-lg">John Doe</h3> {/* Replace name if needed */}
      </div>

      {/* Testimonial Text */}
      <div className="max-w-4xl mt-6 text-center text-gray-700 leading-relaxed px-6 md:px-0">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore
          perspiciatis porro eveniet. Optio necessitatibus provident autem,
          quam qui, dicta molestiae quis quia deleniti aliquam magnam temporibus
          mollitia ex repellendus! Dicta. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Consequuntur, deserunt optio eum dolorum iure
          consectetur quia facilis porro modi placeat ea quis explicabo maxime
          voluptatum unde animi nemo aperiam quos!
        </p>
      </div>
    </div>
    
    <Footer/>
    </>
  );
}

export default Landingpage