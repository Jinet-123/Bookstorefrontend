import React from 'react'
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa'

function Contact() {
  return (
    <>

    <div className="w-full flex flex-col items-center py-20 px-4 md:px-16 bg-white">
      
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-semibold mb-4">Contacts</h2>
      <p className="max-w-4xl text-center text-gray-600 leading-relaxed mb-10 px-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
        inventore placeat nemo voluptatem iure, iste asperiores quia amet sint,
        similique corrupti praesentium delectus nesciunt odit laudantium. Beatae
        repudiandae amet odit!
      </p>

      {/* Contact Info (3 columns) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center mb-14">
        
        <div className="flex flex-col items-center space-y-2">
          <FaMapMarkerAlt className="text-xl" />
          <p className="text-gray-700">123 Main Street, Apt 4B,<br/>Anytown, CA 91234</p>
        </div>

        <div className="flex flex-col items-center space-y-2">
          <FaPhoneAlt className="text-xl" />
          <p className="text-gray-700">+91 9874561230</p>
        </div>

        <div className="flex flex-col items-center space-y-2">
          <FaEnvelope className="text-xl" />
          <p className="text-gray-700">bookstore@gmail.com</p>
        </div>
      </div>

      {/* Form + Map */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl">

        {/* Contact Form */}
        <form className="bg-gray-100 p-6 rounded-lg shadow-md flex flex-col space-y-4">
          <h3 className="text-lg text-center font-semibold mb-2">Send me Message</h3>

          <input
            type="text"
            placeholder="Name"
            className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none"
          />

          <input
            type="email"
            placeholder="Email Id"
            className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none"
          />

          <textarea
            placeholder="Message"
            rows="5"
            className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none"
          ></textarea>

          <button
            type="submit"
            className="bg-[#0A122A] text-white py-2 rounded-md hover:bg-[#0A1A33]"
          >
            Send
          </button>
        </form>

        {/* Google Map */}
        <div className="w-full h-80 md:h-full">
          <iframe
            title="google-map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62863.58541990324!2d76.3193516!3d9.9580835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080d342b794129%3A0x1f51cf69da08644a!2sKakkanad%2C%20Kerala!5e0!3m2!1sen!2sin!4v1709647200000"
            className="w-full h-full rounded-lg shadow-md"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
    
    </>
  )
}

export default Contact