import React from 'react';

const PartnerWaitlist: React.FC = () => {
  return (
    <section id="contact" className="bg-white py-16 px-4 md:px-12 lg:px-20 mb-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center text-xl md:text-2xl font-bold mb-3">Become an Upworn Partner or Join the Waitlist</h2>
        
        <div className="mb-6">
          <p className="text-center text-gray-700 text-md sm:text-xl  mx-auto">
            Are you a business, organization, or community group interested in hosting collection points or supporting our mission? Join our network of partners making sustainable fashion accessible to all.
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-2">
          <div className="w-full md:w-auto">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="w-full md:w-96 px-4 py-3 border border-black rounded-full focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>
          <button className="w-full md:w-auto bg-ecogreen text-white px-8 py-3 rounded-full font-medium hover:bg-green-800 transition-colors">
            Submit
          </button>
        </div>
        
        <div className="flex justify-center items-center mt-4">
          <span className="  mr-0 sm:mr-32 text-sm text-gray-500">Join 200 others waiting in line</span>
        </div>
      </div>
    </section>
  );
};

export default PartnerWaitlist;
