import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const PartnerWaitlist: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

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
    } catch (error) {
      setMessage('Error joining waitlist. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="bg-white py-16 px-4 md:px-12 lg:px-20 mb-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center text-xl md:text-2xl font-bold mb-3">
          Become an Upworn Partner or Join the Waitlist
        </h2>
        
        <div className="mb-6">
          <p className="text-center text-gray-700 text-md sm:text-xl mx-auto">
            Are you a business, organization, or community group interested in hosting collection points or supporting our mission? Join our network of partners making sustainable fashion accessible to all.
          </p>
        </div>
        
        <form onSubmit={handleSubmit} className="flex flex-col md:flex-row justify-center items-center gap-4 mt-2">
          <div className="w-full md:w-auto">
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email" 
              required
              className="w-full md:w-96 px-4 py-3 border border-black rounded-full focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>
          <button 
            type="submit"
            disabled={isSubmitting}
            className="w-full md:w-auto bg-ecogreen text-white px-8 py-3 rounded-full font-medium hover:bg-green-800 transition-colors disabled:opacity-50"
          >
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </button>
        </form>

        {message && (
          <p className={`text-center mt-4 ${message.includes('Error') ? 'text-red-500' : 'text-green-500'}`}>
            {message}
          </p>
        )}
        
        <div className="flex justify-center items-center mt-4">
          <span className="text-center text-sm text-gray-500">Join 200 others waiting in line</span>
        </div>
      </div>
    </section>
  );
};

export default PartnerWaitlist;