import React from 'react';
import headerImageSrc from '../assets/HeaderImage.png'; // Import the image
import cardImage001 from '../assets/001.png'; // Import 001.png
import cardImage002 from '../assets/002.png'; // Import 002.png

const Hero: React.FC = () => {
  return (
    <section className="bg-white py-8 sm:py-12 px-4 sm:px-6 md:px-12 lg:px-32 lg:pl-36">
      <div className="">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Left side content */}
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0 lg:pr-8">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-[35px] sm:leading-[45px] md:leading-[50px] lg:leading-[68px] text-gray-900 mb-4">
              The Sustainable <br /> way to refresh your <span className='rounded-full border-2 border-lightgreen px-2'>wardrobe</span> and donate
            </h1>
            <p className="text-black mb-6 leading-[26px] text-sm sm:text-base">
              Upworn helps you donate your <span className='underline'> pre-loved</span> clothes to those in need. Simply <span className='underline'> donate </span> what you don't need, <span className='underline'> earn points,</span> and shop guilt-free.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 sm:gap-10">
              <a href="#contact" className="border border-black text-black text-base sm:text-lg px-4 sm:px-6 py-2.5 rounded-full flex items-center justify-center hover:scale-105 hover:shadow-lg">
                Join Upworn Now
                <img className='h-7 sm:h-9 ml-2' src="/src/assets/Peercoin.png" alt="" />
              </a>
              <a href="#learn" className="text-black text-base sm:text-lg flex items-center justify-center hover:scale-105">
                Learn More
                <img className='h-10 sm:h-12 ml-2' src="/src/assets/arrowcircle.png" alt="" />
              </a>
            </div>
          </div>
          
          {/* Right side - Header image */}
          <div className="w-full lg:w-1/2 flex justify-center items-center mt-8 lg:mt-0">
            <img
              src={headerImageSrc} // Use the imported image
              alt="Upworn App Showcase"
              className="w-full h-auto max-w-sm sm:max-w-md md:max-w-lg rounded-lg"
            />
          </div>
        </div>
      </div>
      
      {/* Stats section */}
      <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-14">
        {/* Card 001 - Donations */}
        <div className='flex flex-col sm:flex-row bg-grayish p-6 sm:p-8 py-4 sm:py-4 rounded-3xl gap-3'>
          <div className="flex-1">
            <div className='flex items-center gap-3 sm:gap-5 mb-3 sm:mb-5'>
              <p className='bg-white rounded-3xl py-0.5 px-2 text-sm'>001</p>
              <img src="/src/assets/Frame 2.png" alt="" className="" />
            </div>
            <p className='text-xl sm:text-2xl lg:text-3xl leading-[35px] sm:leading-[45px]'>Over 5000 thousand expected donations</p>
          </div>
         <div className="flex justify-center sm:justify-end">
  <img src="/src/assets/bag.png" alt="" className="w-24 h-26 sm:w-auto sm:h-auto" />
</div>
        </div>

        {/* Card 002 - Carbon Emissions */}
        <div className='flex flex-col sm:flex-row bg-grayish p-6 sm:p-8 py-4 sm:py-4 rounded-3xl gap-3'>
          <div className="flex-1">
            <div className='flex items-center gap-3 sm:gap-5 mb-3 sm:mb-5'>
              <p className='bg-white rounded-3xl py-0.5 px-2 text-sm'>002</p>
              <img src="/src/assets/people.png" alt=""  />
            </div>
            <p className='text-xl sm:text-2xl lg:text-3xl leading-[35px] sm:leading-[45px]'>Carbon emmisions reductions</p>
          </div>
          <div className="flex justify-center sm:justify-end">
            <img src="/src/assets/trouser.png" alt="" className="w-24 h-26 sm:w-auto sm:h-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;