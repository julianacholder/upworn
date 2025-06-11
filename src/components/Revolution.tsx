import React, { useState } from 'react';
import footerImage from '../assets/smart screen.svg';
import whiteUpwornLogo from '../assets/white upworn logo (1).png';
import emailjs from '@emailjs/browser';

const Revolution: React.FC = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  const handleAppStoreClick = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    setEmail('');
    setMessage('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Add your EmailJS logic here
    try {
       await emailjs.send(
        'service_kk1075s', // Get from EmailJS dashboard
        'template_yzt937i', // Get from EmailJS dashboard
        {
          user_email: email,
          message: `New waitlist signup: ${email}`,
        },
        'N7icFC3cwKeNmj9zQ' // Get from EmailJS dashboard
      );
      
      setMessage('Successfully joined the waitlist!');
      setEmail('');
      setTimeout(() => {
        handleClosePopup();
      }, 2000);
    } catch (error) {
      setMessage('Error joining waitlist. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <section 
        className="text-white py-16 px-6 md:px-12 lg:px-20 min-h-screen"
        style={{
          background: 'linear-gradient(180deg, #22AD25 0%, #0E470F 100%)'
        }}
      >
        <div className="max-w-7xl mx-auto h-full">
          <div className="flex flex-col lg:flex-row items-start lg:items-center h-full">
            {/* Left side content */}
            <div className="lg:w-1/2 mb-10 lg:mb-0 lg:pr-12">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 leading-tight">
                Ready to Join the Revolution?
              </h1>
              <p className="text-lg md:text-xl mb-8 font-normal leading-relaxed max-w-lg">
                Download the UPWORN app today and start making a difference with every fashion choice.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={handleAppStoreClick}
                  className="bg-transparent border border-white text-white rounded-full px-3 py-3 flex items-center justify-center hover:bg-white hover:text-green-700 transition-all duration-300 cursor-pointer"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" className="mr-3" fill="currentColor" height="30" viewBox="0 0 30 30">
                    <path d="M15,27c6.627,0,12-5.373,12-12S21.627,3,15,3C8.373,3,3,8.373,3,15S8.373,27,15,27z M9.848,20.53 C9.658,20.833,9.333,21,8.999,21c-0.181,0-0.364-0.049-0.529-0.152c-0.469-0.293-0.611-0.91-0.318-1.378l0.27-0.432 C8.595,19.016,8.782,19,9,19c0.604,0,1.105,0.191,1.526,0.445L9.848,20.53z M9,18c-0.552,0-1-0.448-1-1s0.448-1,1-1h1.321l3.5-5.6 l-1.169-1.87c-0.292-0.468-0.15-1.085,0.318-1.378c0.468-0.292,1.085-0.149,1.378,0.318L15,8.513l0.652-1.043 c0.293-0.469,0.91-0.612,1.378-0.318c0.469,0.293,0.611,0.91,0.318,1.378L12.679,16h3.187c0.255,0.183,0.537,0.467,0.835,0.941 C16.922,17.292,17.03,17.65,17.09,18H9z M21.848,19.47c0.292,0.468,0.15,1.085-0.318,1.378C21.365,20.951,21.182,21,21.001,21 c-0.333,0-0.659-0.167-0.849-0.47l-4.52-7.232c0.08-0.199,0.183-0.413,0.336-0.657c0.277-0.441,0.632-0.748,1.007-0.968L19.679,16 H21c0.552,0,1,0.448,1,1s-0.448,1-1,1h-0.071L21.848,19.47z"></path>
                  </svg>
                  <p className='text-center'>Download on the App Store</p>
                </button>
                <button 
                  onClick={handleAppStoreClick}
                  className="bg-transparent border border-white text-white px-3 py-2 rounded-full font-medium flex items-center justify-center hover:bg-white hover:text-green-700 transition-all duration-300 text-lg cursor-pointer"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                  </svg>
                  <p className='text-center'>Get on Google Play</p>
                </button>
              </div>
            </div>
                       
            {/* Right side - Phone mockups */}
            <div className="lg:w-1/2 flex justify-center lg:justify-end mt-4">
              <div className="relative">
                <img
                   src={footerImage}
                   alt="Upworn App Screenshots"
                   className="w-full max-w-md h-auto"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Footer Section */}
        <footer className="mt-20 border-t border-white border-opacity-20 pt-16">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-14">
              {/* Company Info */}
              <div className="md:col-span-1">
                <div className="flex items-center mb-4">
                  <div className='w-36'> <img className='' src={whiteUpwornLogo} alt="Upworn Logo" /></div>
                </div>
                <p className="leading-relaxed">
                  The sustainable way to refresh your wardrobe. Donate, Earn, Renew.
                </p>
              </div>

              {/* Company Links */}
              <div>
                <h4 className="text-xl font-semibold mb-6">Company</h4>
                <ul className="space-y-3">
                  <li><a href="#about" className="hover:text-white hover:underline transition-colors">About us</a></li>
                  <li><a href="#features" className="hover:text-white hover:underline transition-colors">Features</a></li>
                  <li><a href="#impact" className="hover:text-white hover:underline transition-colors">Impact</a></li>
                  <li><a href="#" className="hover:text-white hover:underline transition-colors">Careers</a></li>
                </ul>
              </div>

              {/* Resources Links */}
              <div>
                <h4 className="text-xl font-semibold mb-6">Resources</h4>
                <ul className="space-y-3">
                  <li><a href="#" className="hover:text-white hover:underline transition-colors">Blog</a></li>
                  <li><a href="#" className="hover:text-white hover:underline transition-colors">Sustainability Guide</a></li>
                  <li><a href="#" className="hover:text-white hover:underline transition-colors">Brand Directory</a></li>
                  <li><a href="#" className="hover:text-white hover:underline transition-colors">FAQ</a></li>
                </ul>
              </div>

              {/* Connect Links */}
              <div>
                <h4 className="text-xl font-semibold mb-6">Connect</h4>
                <ul className="space-y-3">
                  <li><a href="#contact" className="hover:text-white hover:underline transition-colors">Contact Us</a></li>
                  <li><a href="#" className="hover:text-white hover:underline transition-colors">Support</a></li>
                  <li><a href="#" className="hover:text-white hover:underline transition-colors">Instagram</a></li>
                  <li><a href="#" className="hover:text-white hover:underline transition-colors">LinkedIn</a></li>
                </ul>
              </div>
            </div>

            {/* Bottom Footer */}
            <div className="flex flex-col md:flex-row justify-between items-center mt-16 pt-8 border-t border-white border-opacity-20">
              <p className="text-sm text-gray-400 mb-4 md:mb-0">© 2025 UPWORN. All rights reserved.</p>
              <div className="flex space-x-8">
                <a href="#" className="text-sm text-gray-400 hover:text-white hover:underline transition-colors">Privacy Policy</a>
                <a href="#" className="text-sm text-gray-400 hover:text-white hover:underline transition-colors">Terms of Service</a>
              </div>
            </div>
          </div>
        </footer>
      </section>

      {/* Coming Soon Popup */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 relative">
            {/* Close button */}
            <button 
              onClick={handleClosePopup}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl"
            >
              ×
            </button>

            {/* Popup content */}
            <div className="text-center">
              <div className="mb-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-2">Coming Soon! 🌱</h3>
              <p className="text-gray-600 mb-6">
                The Upworn app is launching soon! Join our waitlist to be the first to know when it's available and get early access.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-green-600 text-white py-3 rounded-full font-semibold hover:bg-green-700 transition-colors disabled:opacity-50"
                >
                  {isSubmitting ? 'Joining...' : 'Join Waitlist'}
                </button>
              </form>

              {message && (
                <p className={`mt-4 text-sm ${message.includes('Error') ? 'text-red-500' : 'text-green-600'}`}>
                  {message}
                </p>
              )}

              <p className="text-xs text-gray-500 mt-4">
                We'll notify you as soon as the app is ready for download!
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Revolution;