import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'; // Import icons


const Footer = () => {
  return (
    <>
<section className="bg-[#F3C623] p-8 text-gray-800 rounded  ">
      {/* Footer Content */}
      <div className="flex flex-col md:flex-row justify-between gap-8 mb-8">
        
        {/* Delivery Section */}
        <div className="flex-1">
          <h2 className="font-bold text-lg mb-4">Delivery</h2>
          <p className="text-sm">Order Products Faster, Easier</p>
        </div>

        {/* Our Services */}
        <div className="flex-1">
          <h2 className="font-bold text-lg mb-4">Our Services</h2>
          <p className="text-sm mb-2">Pricing</p>
          <p className="text-sm mb-2">Discounts</p>
          <p className="text-sm mb-2">Report a bug</p>
          <p className="text-sm">Terms of Service</p>
        </div>

        {/* Our Company */}
        <div className="flex-1">
          <h2 className="font-bold text-lg mb-4">Our Company</h2>
          <p className="text-sm mb-2">Blog</p>
          <p className="text-sm mb-2">Our Mission</p>
          <p className="text-sm">Get in touch</p>
        </div>

        {/* Community */}
        <div className="flex-1">
          <h2 className="font-bold text-lg mb-4">Community</h2>
          <p className="text-sm mb-2">Support</p>
          <p className="text-sm mb-2">Questions</p>
          <p className="text-sm">Customer Help</p>
        </div>

        {/* Follow Us Section */}
        <div className="flex-1">
          <h2 className="font-bold text-lg mb-4">Follow Us</h2>
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faFacebook} size="2x" className="text-blue-600" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faTwitter} size="2x" className="text-blue-400" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faInstagram} size="2x" className="text-pink-500" />
            </a>
          </div>
        </div>

      </div>

      {/* Footer Bottom Text */}
      <p className="text-center text-sm text-gray-950 ">
        &#169; Sodiq, All rights reserved
      </p>
    </section>

    </>
  )
}

export default Footer
