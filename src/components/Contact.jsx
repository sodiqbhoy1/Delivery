import React from 'react'
import Footer from './Footer'

const Contact = () => {
  return (
    <>

<section className="flex flex-col md:flex-row gap-8 items-center justify-center p-8 bg-gray-100">
  {/* Left Side: Contact Information */}
  <div className="w-full md:w-[350px] text-center md:text-left">
    <h2 className="font-bold text-2xl mb-4">Contact Us from Here</h2>
    <p className="text-gray-600">
      You can contact us from here. Write to us, call us, or visit our service center. We will gladly assist you.
    </p>
  </div>

  {/* Middle: Contact Details */}
  <div id='contact' className="w-full md:w-[350px] text-center md:text-left">
    <p className="mb-2">
      <span className="font-bold">Telephone:</span> 123-456-789
    </p>
    <p className="mb-2">
      <span className="font-bold">Email:</span> delivery&#64;gmail.com
    </p>
    <p>
      <span className="font-bold">Location:</span> Oyo - Nigeria
    </p>
  </div>

  {/* Right Side: Contact Button */}
  <div className="w-full md:w-[350px] flex justify-center md:justify-start">
    <button className="bg-yellow-500 font-bold py-2 px-6 rounded hover:bg-yellow-600 transition duration-300">
      Contact Us
    </button>
  </div>
</section>

<Footer></Footer>


    </>
  )
}

export default Contact
