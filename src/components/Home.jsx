import Bike from '../assets/bike.png'

const Home = () => {
  return (
    <div className=' py-5 sm:py-24' >
 <section id='home' className="flex flex-col md:flex-row items-center justify-between p-8  ">
      {/* Left Side */}
      <div className="md:w-1/2 mb-6 md:mb-0">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Order Products Faster & Easier</h1>
        <p className="text-gray-600 text-lg mb-6">
          Order your favorite foods anytime, and we will deliver them right to where you are.
        </p>
        <div className='flex gap-4' >
        <button className="bg-yellow-500 text-white py-2 px-5 rounded text-xl hover:bg-yellow-600 transition duration-200">
          Get Started
        </button>
       
      </div>
      </div>

      {/* Right Side */}
      <div className="md:w-1/2 flex justify-center">
        <img src={Bike} alt="Delivery Bike" className="w-full h-auto max-w-sm" />
      </div>
    </section>
          </div>
  )
}

export default Home
