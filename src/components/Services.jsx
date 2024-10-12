import React from 'react'
import Payment from '../assets/payment.png'
import Product from '../assets/product.png'
import Received from '../assets/received.png'
import Track from '../assets/track.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAppStoreIos, faGooglePlay } from '@fortawesome/free-brands-svg-icons';


const Services = () => {
  return (
    <>
      <div id='services' className="bg-gray-100 py-10 my-2 rounded">
        <h2 className="font-bold text-3xl md:text-[40px] text-center my-8">Some Services We Offer</h2>

        {/* Card Section */}
        <section className="flex flex-col md:flex-row items-center justify-center gap-8 text-center px-5">
          {/* Card 1 */}
          <div className="w-full md:w-[320px] shadow-lg rounded-lg p-6 flex flex-col items-center justify-center gap-4 bg-white">
            <h2 className="font-bold text-xl">Payment Done</h2>
            <div>
              <img src={Payment} alt="Payment" className="w-24 h-auto" />
            </div>
            <p className="text-gray-500 text-[15px] w-[80%] py-4">Pay with a Visa or PayPal card easily without much ado.</p>
            <p className="font-bold text-yellow-500 cursor-pointer hover:text-yellow-600">Learn More</p>
          </div>

          {/* Card 2 */}
          <div className="w-full md:w-[320px] shadow-lg rounded-lg p-6 flex flex-col items-center justify-center gap-4 bg-white">
            <h2 className="font-bold text-xl">Find Your Product</h2>
            <div>
              <img src={Product} alt="Product" className="w-24 h-auto" />
            </div>
            <p className="text-gray-500 text-[15px] w-[80%] py-4">We offer online sales of various products for your convenience.</p>
            <p className="font-bold text-yellow-500 cursor-pointer hover:text-yellow-600">Learn More</p>
          </div>

          {/* Card 3 */}
          <div className="w-full md:w-[320px] shadow-lg rounded-lg p-6 flex flex-col items-center justify-center gap-4 bg-white">
            <h2 className="font-bold text-xl">Product Received</h2>
            <div>
              <img src={Received} alt="Product Received" className="w-24 h-auto" />
            </div>
            <p className="text-gray-500 text-[15px] w-[80%] py-4">Track the delivery status of your order with our app.</p>
            <p className="font-bold text-yellow-500 cursor-pointer hover:text-yellow-600">Learn More</p>
          </div>
        </section>

        {/* Watch Delivery Section */}
        <section className="flex flex-col md:flex-row items-center justify-between my-10 px-5">
          {/* Left Image */}
          <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
            <img className="w-full h-auto max-w-xs md:max-w-sm" src={Track} alt="Track" />
          </div>

          {/* Right Content */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-2xl md:text-[35px] font-bold my-4 md:my-8">Watch Your Delivery At Any Time</h2>
            <p className="text-gray-700 text-lg my-5">With our app, you can monitor the route of your order from our headquarters to your location. Download the app now!</p>

            {/* App Store Buttons */}
            <div className="flex justify-center md:justify-start gap-4 my-3">
              <button className="bg-yellow-500 p-3 rounded-lg font-bold text-[16px] flex items-center gap-2 hover:bg-yellow-600 transition">
                <FontAwesomeIcon icon={faAppStoreIos} /> App Store
              </button>
              <button className="bg-yellow-500 p-3 rounded-lg font-bold text-[16px] flex items-center gap-2 hover:bg-yellow-600 transition">
                <FontAwesomeIcon icon={faGooglePlay} /> Google Play
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Services
