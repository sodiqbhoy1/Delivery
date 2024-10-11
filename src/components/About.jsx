import React from 'react'
import People from '../assets/people.png'
import Door from '../assets/door.png'
const About = () => {
  return (
    <>
<section className="bg-gray-100 py-10 px-5">
  {/* Top Section */}
  <main className="flex flex-col md:flex-row items-center justify-between mb-10">
    {/* Left - Image */}
    <div className="md:w-1/2 flex justify-center mb-6 md:mb-0">
      <img className="w-full h-auto max-w-xs md:max-w-sm" src={People} alt="People" />
    </div>

    {/* Right - Text */}
    <div className="md:w-1/2 text-center md:text-left">
      <h2 className="text-[35px] font-bold mb-4">Find Out A Little More About Us</h2>
      <p className="text-gray-500 text-lg">
        We are a company dedicated to the distribution of products to your home or location, providing the highest quality delivery service to ensure satisfaction and convenience.
      </p>
    </div>
  </main>

  {/* Bottom Section */}
  <main className="flex flex-col md:flex-row items-center justify-between">
    {/* Left - Text */}
    <div className="md:w-1/2 text-center md:text-left mb-6 md:mb-0">
      <h2 className="text-[35px] font-bold mb-4">Your Safety Is Important</h2>
      <p className="text-gray-500 text-lg">
        We follow strict health protocols to ensure your safety during delivery. Watch the video to see how we prioritize your protection during the process.
      </p>
    </div>

    {/* Right - Image */}
    <div className="md:w-1/2 flex justify-center">
      <img className="w-full h-auto max-w-xs md:max-w-sm" src={Door} alt="Door Delivery" />
    </div>
  </main>
</section>


    </>
  )
}

export default About
