import React from 'react';
import communityImage from '../assets/Community.png';
import upwornImage from '../assets/Upworn.png'; 
import homeImage from '../assets/Home.png'; 
import furnitureImage from '../assets/Furniture.png'; 

const ClothesGrid: React.FC = () => {
  return (
    <section id="learn" className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 md:px-12 lg:px-20 mt-12 sm:mt-16 lg:mt-20 mb-4 sm:mb-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-center flex-col items-center mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-sm sm:text-base lg:text-lg border-2 px-2 sm:px-3 py-1 border-lightgreen rounded-full font-medium text-center text-gray-900 mb-3 sm:mb-4">
            We're Just Getting Started
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-center max-w-2xl px-4">
            We don't just donate, we're building a future where no piece of clothing goes to waste.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {/* Card 1 - Community Donations */}
          <div className="relative overflow-hidden rounded-lg sm:rounded-xl group cursor-pointer">
            <img 
              src={communityImage} 
              alt="Community Donations" 
              className="w-full h-80  lg:h-96 object-cover transition-transform duration-500 group-hover:scale-105" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-3 sm:p-4 lg:p-6 text-white">
              <h3 className="font-bold text-lg sm:text-xl mb-1 sm:mb-2">Community Donations</h3>
              <p className="text-xs sm:text-sm text-white/90 mb-2 sm:mb-3 lg:mb-4 leading-relaxed line-clamp-3">
                Delivering hope through clothing donations to refugee camps and vulnerable families in our local communities.
              </p>
              <div className="flex items-center gap-1 sm:gap-2">
                <span className="bg-black/20 backdrop-blur-sm border border-white rounded-full px-2 sm:px-3 py-0.5 sm:py-1 text-xs font-medium flex items-center gap-1">
                  <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-white rounded-full"></span>
                  <span className=" sm:inline">Impacting 100+ families</span>
                  
                </span>
                <div className="w-5 h-5 sm:w-6 sm:h-6 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          
          {/* Card 2 - Upworn Collection */}
          <div className="relative overflow-hidden rounded-lg sm:rounded-xl group cursor-pointer">
            <img 
              src={upwornImage} 
              alt="Upworn Collection" 
              className="w-full h-80  lg:h-96 object-cover transition-transform duration-500 group-hover:scale-105" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-3 sm:p-4 lg:p-6 text-white">
              <h3 className="font-bold text-lg sm:text-xl mb-1 sm:mb-2">Upworn Collection</h3>
              <p className="text-xs sm:text-sm text-white/90 mb-2 sm:mb-3 lg:mb-4 leading-relaxed line-clamp-3">
                Transforming worn-out clothes into stylish, functional products.
              </p>
              <div className="flex items-center gap-1 sm:gap-2">
                <span className="bg-black/20 backdrop-blur-sm border border-white rounded-full px-2 sm:px-3 py-0.5 sm:py-1 text-xs font-medium flex items-center gap-1">
                  <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-white rounded-full"></span>
                  <span className=" sm:inline">1000+ items reborn</span>
                  
                </span>
                <div className="w-5 h-5 sm:w-6 sm:h-6 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          
          {/* Card 3 - Home Insulation */}
          <div className="relative overflow-hidden rounded-lg sm:rounded-xl group cursor-pointer">
            <img 
              src={homeImage} 
              alt="Home Insulation" 
              className="w-full h-80  lg:h-96 object-cover transition-transform duration-500 group-hover:scale-105" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-3 sm:p-4 lg:p-6 text-white">
              <h3 className="font-bold text-lg sm:text-xl mb-1 sm:mb-2">Home Insulation</h3>
              <p className="text-xs sm:text-sm text-white/90 mb-2 sm:mb-3 lg:mb-4 leading-relaxed line-clamp-3">
                Creating insulation for homes from unwearable fabrics.
              </p>
              <div className="flex items-center gap-1 sm:gap-2">
                <span className="bg-black/20 backdrop-blur-sm border border-white rounded-full px-2 sm:px-3 py-0.5 sm:py-1 text-xs font-medium flex items-center gap-1">
                  <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-white rounded-full"></span>
                  <span className="sm:inline">200+ homes insulated</span>
                  
                </span>
                <div className="w-5 h-5 sm:w-6 sm:h-6 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          
          {/* Card 4 - Furniture Filling */}
          <div className="relative overflow-hidden rounded-lg sm:rounded-xl group cursor-pointer">
            <img 
              src={furnitureImage} 
              alt="Furniture Filling" 
              className="w-full h-80  lg:h-96 object-cover transition-transform duration-500 group-hover:scale-105" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-3 sm:p-4 lg:p-6 text-white">
              <h3 className="font-bold text-lg sm:text-xl mb-1 sm:mb-2">Furniture Filling</h3>
              <p className="text-xs sm:text-sm text-white/90 mb-2 sm:mb-3 lg:mb-4 leading-relaxed line-clamp-3">
                Using textile waste as eco-friendly stuffing for furniture like couches and pillows.
              </p>
              <div className="flex items-center gap-1 sm:gap-2">
                <span className="bg-black/20 backdrop-blur-sm border border-white rounded-full px-2 sm:px-3 py-0.5 sm:py-1 text-xs font-medium flex items-center gap-1">
                  <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-white rounded-full"></span>
                  <span className="sm:inline">3 tons of fabric saved</span>
                  
                </span>
                <div className="w-5 h-5 sm:w-6 sm:h-6 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClothesGrid;