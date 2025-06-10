import React, { useState, useEffect } from 'react';
// Import your dotted world map image
import worldMapImage from '../assets/map (1).svg'; // Update this path to match your image location

const MapImpactSection = () => {
  const [animatedAmount, setAnimatedAmount] = useState(0);
  const [animatedContributors, setAnimatedContributors] = useState(0);
  
  const targetAmount = 500000; 
  const targetContributors = 512;

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const stepTime = duration / steps;

    // Animate amount
    const amountIncrement = targetAmount / steps;
    let currentAmount = 0;
    const amountInterval = setInterval(() => {
      currentAmount += amountIncrement;
      if (currentAmount >= targetAmount) {
        currentAmount = targetAmount;
        clearInterval(amountInterval);
      }
      setAnimatedAmount(Math.floor(currentAmount));
    }, stepTime);

    // Animate contributors
    const contributorsIncrement = targetContributors / steps;
    let currentContributors = 0;
    const contributorsInterval = setInterval(() => {
      currentContributors += contributorsIncrement;
      if (currentContributors >= targetContributors) {
        currentContributors = targetContributors;
        clearInterval(contributorsInterval);
      }
      setAnimatedContributors(Math.floor(currentContributors));
    }, stepTime);

    return () => {
      clearInterval(amountInterval);
      clearInterval(contributorsInterval);
    };
  }, []);

  return (
    <section id="impact" className="relative py-12 sm:py-20 px-4 sm:px-6 bg-gradient-to-br from-green-50 via-white to-green-100 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full">
          {/* Dotted pattern */}
          <div className="w-full h-full" style={{
            backgroundImage: 'radial-gradient(circle, #22c55e 1px, transparent 1px)',
            backgroundSize: '20px 20px'
          }}></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-0">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight max-w-4xl mx-auto px-4">
            Upworn is helping communities across Africa with
            <span className="text-green-600"> sustainable clothing solutions</span>.
            Join us to reduce waste and make a difference for every community.
          </h2>
        </div>

        {/* Map Container */}
        <div className="relative w-full">
          {/* World Map with Image - Full Width */}
          <div className="relative">
            {/* Map Image Container */}
            <div className="relative">
              <img 
                src={worldMapImage}
                alt="Dotted World Map" 
                className="w-full h-auto"
              />
              
              {/* Overlay for connection lines and impact points */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                {/* Connection Lines */}
                <path d="M20 40 Q35 30 50 35" stroke="#10b981" strokeWidth="0.5" fill="none" strokeDasharray="2,2" className="animate-pulse" vectorEffect="non-scaling-stroke"/>
                <path d="M35 50 Q50 45 65 50" stroke="#10b981" strokeWidth="0.5" fill="none" strokeDasharray="2,2" className="animate-pulse" style={{animationDelay: '0.5s'}} vectorEffect="non-scaling-stroke"/>
                <path d="M25 70 Q40 65 55 70" stroke="#10b981" strokeWidth="0.5" fill="none" strokeDasharray="2,2" className="animate-pulse" style={{animationDelay: '1s'}} vectorEffect="non-scaling-stroke"/>

                {/* Impact Points */}
                <circle cx="20" cy="40" r="1" fill="#10b981" className="animate-ping"/>
                <circle cx="50" cy="35" r="1" fill="#10b981" className="animate-ping" style={{animationDelay: '0.3s'}}/>
                <circle cx="75" cy="55" r="1" fill="#10b981" className="animate-ping" style={{animationDelay: '0.6s'}}/>
                <circle cx="30" cy="70" r="1" fill="#10b981" className="animate-ping" style={{animationDelay: '0.9s'}}/>
                
                {/* Static dots for reference */}
                <circle cx="20" cy="40" r="0.8" fill="#059669"/>
                <circle cx="50" cy="35" r="0.8" fill="#059669"/>
                <circle cx="75" cy="55" r="0.8" fill="#059669"/>
                <circle cx="30" cy="70" r="0.8" fill="#059669"/>
              </svg>
            </div>

            {/* Floating Stats Cards - Responsive positioning */}
            <div className="absolute top-2 right-2 sm:top-4 sm:right-4 md:top-8 md:right-8 lg:top-12 lg:right-12">
              <div className="bg-white rounded-lg sm:rounded-xl md:rounded-2xl shadow-xl p-2 sm:p-4 md:p-6 border border-green-100 max-w-[150px] sm:max-w-[200px] md:max-w-none">
                <div className="text-xs sm:text-sm text-gray-600 mb-1 sm:mb-2">Total Expected Impact</div>
                <div className="text-sm sm:text-lg md:text-2xl lg:text-3xl font-bold text-green-600 mb-1 sm:mb-2">
                  {animatedAmount.toLocaleString()} <span className='text-[10px] sm:text-xs md:text-sm text-gray-600 font-normal'>clothing donations</span>
                </div>
                <div className="flex items-center gap-1 sm:gap-2 md:gap-3">
                  {/* Avatar Stack */}
                  <div className="flex -space-x-1 sm:-space-x-2">
                    <div className="w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 rounded-full bg-gradient-to-r from-green-400 to-green-500 border-1 sm:border-2 border-white">
                      <img className='w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 rounded-full' src="/src/assets/avatar1.jpg" alt="" />
                    </div>
                    <div className="w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 rounded-full bg-gradient-to-r from-blue-400 to-blue-500 border-1 sm:border-2 border-white">
                      <img className='w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 rounded-full' src="/src/assets/alison-erickson-Zt8IkNfhk54-unsplash.jpg" alt="" />
                    </div>
                    <div className="w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 rounded-full bg-gradient-to-r from-purple-400 to-purple-500 border-1 sm:border-2 border-white">
                      <img className='w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 rounded-full' src="/src/assets/kim-carpenter-IHIgnhLvz5Q-unsplash.jpg" alt="" />
                    </div>
                    <div className="w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 rounded-full bg-gradient-to-r from-orange-400 to-orange-500 border-1 sm:border-2 border-white">
                      <img className='w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 rounded-full' src="/src/assets/african-american-woman-smiling-with-hand-chin.jpg" alt="" />
                    </div>
                    <div className="w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 rounded-full bg-gray-300 border-1 sm:border-2 border-white flex items-center justify-center text-[8px] sm:text-xs text-gray-600 font-semibold">
                      +{animatedContributors - 4}
                    </div>
                  </div>
                  <div className="text-[10px] sm:text-xs md:text-sm text-gray-600">
                    <span className="hidden md:inline">{animatedContributors} Happy Contributors</span>
                    <span className="md:hidden">{animatedContributors}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Community Impact Card - Responsive positioning */}
            <div className="absolute bottom-2 left-2 sm:bottom-4 sm:left-4 md:bottom-8 md:left-8 lg:bottom-12 lg:left-12">
              <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-lg sm:rounded-xl md:rounded-2xl shadow-xl p-2 sm:p-4 md:p-6 text-white max-w-[140px] sm:max-w-[200px] md:max-w-xs">
                <div className="flex items-center gap-1 sm:gap-2 md:gap-3 mb-1 sm:mb-2 md:mb-3">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 rounded-full bg-white/20 flex items-center justify-center">
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-xs sm:text-sm md:text-base">Expected Reach</div>
                    <div className="text-[10px] sm:text-xs md:text-sm text-white/80">Making impact across Africa</div>
                  </div>
                </div>
                <div className="text-sm sm:text-lg md:text-xl lg:text-2xl font-bold mb-1">15+ Countries</div>
                <div className="text-[10px] sm:text-xs md:text-sm text-white/90">Communities supported through clothing donations</div>
              </div>
            </div>

            {/* Donate Button - Responsive positioning */}
            <div className="absolute top-1/2 right-2 sm:right-4 md:right-8 lg:right-12 -translate-y-1/2">
              <button className="group bg-white hover:bg-gray-50 border-2 border-green-500 text-green-600 font-semibold px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg text-sm sm:text-base">
                <span className="flex items-center gap-1 sm:gap-2">
                  <span className="hidden sm:inline">Donate Now</span>
                  <span className="sm:hidden">Donate</span>
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </button>
            </div>
          </div>

          {/* Bottom Stats */}
          <div className="mt-8 sm:mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-ecogreen mb-2">500,000+</div>
              <div className="text-gray-700 text-sm sm:text-base">Items Donated</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-ecogreen mb-2">15+</div>
              <div className="text-gray-700 text-sm sm:text-base">Countries Reached</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-ecogreen mb-2">500+</div>
              <div className="text-gray-700 text-sm sm:text-base">Lives Impacted</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapImpactSection;