import React, { useState, useEffect, useRef } from 'react';
import step1Image from '../assets/phone.svg'; 
import step2Image from '../assets/phone2.svg';
import step3Image from '../assets/phone3.svg';
import step4Image from '../assets/phone4.svg';

// Placeholder Icon Components
// You can replace these with more detailed SVGs or icon library components
const HomeIcon: React.FC<{ className?: string; isActive?: boolean }> = ({ className, isActive }) => (
 <img 
  width="32" 
  height="32" 
  src={isActive ? "https://img.icons8.com/puffy/32/ffffff/home.png" : "https://img.icons8.com/puffy/32/0E470F/home.png"}
  alt="home"
  className="w-6 h-6 sm:w-8 sm:h-8"
/>
);

const HandHoldingHeartIcon: React.FC<{ className?: string; isActive?: boolean }> = ({ className, isActive }) => (
 <img 
  width="32" 
  height="32" 
  src={isActive ? "https://img.icons8.com/fluency-systems-regular/32/ffffff/hand-holding-heart.png" : "https://img.icons8.com/fluency-systems-regular/32/0E470F/hand-holding-heart.png"}
  alt="home"
  className="w-6 h-6 sm:w-8 sm:h-8"
/>
);

const SafetyCollectionPlaceIcon: React.FC<{ className?: string; isActive?: boolean }> = ({ className, isActive }) => (
 <img 
  width="32" 
  height="32" 
  src={isActive ? "https://img.icons8.com/fluency-systems-regular/32/ffffff/crowd.png" : "https://img.icons8.com/fluency-systems-regular/32/0E470F/crowd.png"}
  alt="home"
  className="w-6 h-6 sm:w-8 sm:h-8"
/>
);

const WorldIcon: React.FC<{ className?: string; isActive?: boolean }> = ({ className, isActive }) => (
 <img 
  width="32" 
  height="32" 
  src={isActive ? "https://img.icons8.com/fluency-systems-regular/32/ffffff/green-earth.png" : "https://img.icons8.com/fluency-systems-regular/32/0E470F/green-earth.png"}
  alt="home"
  className="w-6 h-6 sm:w-8 sm:h-8"
/>
);

const HowItWorks: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<(HTMLDivElement | null)[]>([]);
  const phoneRef = useRef<HTMLDivElement>(null);
  
  const steps = [
    {
      id: 1,
      title: "Discover Donations",
      description: "Browse items people are giving away. Find clothes that match your style and get connected to the community.",
      phoneImage: step1Image,
      icon: HomeIcon,
    },
    {
      id: 2,
      title: "Give What You Don't Need",
      description: "Upload items from your closet that you no longer use. Help someone in need while earning points and making space in your wardrobe.",
      phoneImage: step2Image,
      icon: HandHoldingHeartIcon,
    },
    {
      id: 3,
      title: "Connect with Donors",
      description: "Engage with like-minded individuals who share your values. Chat with donors, exchange fashion tips, and build a supportive network of conscious consumers.",
      phoneImage: step3Image,
      icon: SafetyCollectionPlaceIcon,
    },
    {
      id: 4,
      title: "Track Your Impact",
      description: "Our AI tracks your sustainability contributions, from CO₂ savings to landfill reduction, giving you a real-time view of how your donations are helping the planet.",
      phoneImage: step4Image,
      icon: WorldIcon,
    }
  ];

  // Initialize refs array
  useEffect(() => {
    stepsRef.current = stepsRef.current.slice(0, steps.length);
  }, [steps.length]);

// Scroll animation logic
useEffect(() => {
  let animationFrameId: number;
  let lastScrollTime = 0;
  const scrollThrottle = 50; // milliseconds

  const handleScroll = () => {
    const now = Date.now();
    if (now - lastScrollTime < scrollThrottle) return;
    
    lastScrollTime = now;
    
    animationFrameId = requestAnimationFrame(() => {
      if (!sectionRef.current) return;

      const sectionRect = sectionRef.current.getBoundingClientRect();
      const sectionTop = sectionRect.top;
      const sectionHeight = sectionRect.height;
      const windowHeight = window.innerHeight;

      // Only proceed if section is in view
      if (sectionTop <= windowHeight && sectionTop + sectionHeight >= 0) {
        const scrolledIntoSection = Math.max(0, -sectionTop);
        const availableScrollDistance = sectionHeight - windowHeight;
        const scrollProgress = Math.min(1, Math.max(0, scrolledIntoSection / availableScrollDistance));

        // Calculate active step based on scroll progress
        const stepSize = 1 / steps.length;
        const newStep = Math.min(steps.length - 1, Math.floor(scrollProgress / stepSize));

        if (newStep !== activeStep) {
          setActiveStep(newStep);
          animatePhoneBounce();
        }
      }
    });
  };

  const animatePhoneBounce = () => {
    if (phoneRef.current) {
      phoneRef.current.style.transition = 'transform 0.3s ease';
      phoneRef.current.style.transform = 'translateY(-8px)';
      setTimeout(() => {
        if (phoneRef.current) {
          phoneRef.current.style.transform = 'translateY(0)';
        }
      }, 300);
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll(); // Initial check
  
  return () => {
    window.removeEventListener('scroll', handleScroll);
    cancelAnimationFrame(animationFrameId);
  };
}, [activeStep, steps.length]);
  return (
    <section id="features" ref={sectionRef} className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 md:px-12 lg:px-20 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-sm sm:text-base md:text-lg lg:text-xl font-medium mb-8 sm:mb-12 lg:mb-16">HOW DOES THE APP WORK?</h2>
        
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-0">
          {/* Left side - Steps */}
          <div className="w-full lg:w-1/2 mb-6 lg:mb-0">
            {steps.map((step, index) => (
              <div 
                key={step.id}
                ref={el => { stepsRef.current[index] = el; }}
                className={`flex mb-4 sm:mb-6 lg:mb-8 transition-all duration-500 ${
                  activeStep === index 
                    ? 'opacity-100 transform translate-x-0' 
                    : 'opacity-50 transform -translate-x-2 lg:-translate-x-4'
                }`}
              >
                <div className="mr-3 sm:mr-4 lg:mr-6 flex flex-col items-center">
                  {/* Circle with icon */}
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 rounded-full flex items-center justify-center transition-all duration-500 ${
                    activeStep === index 
                      ? 'bg-gradient-to-r from-[#0E470F] to-[#22AD25]' 
                      : 'bg-white border-2'
                  }`}
                  style={activeStep !== index ? {
                    borderImage: 'linear-gradient(45deg, #0E470F, #22AD25) 1',
                    border: '2px solid transparent',
                    backgroundImage: 'linear-gradient(white, white), linear-gradient(45deg, #0E470F, #22AD25)',
                    backgroundOrigin: 'border-box',
                    backgroundClip: 'content-box, border-box'
                  } : {}}
                  >
                    <step.icon 
                      className={`${
                        activeStep === index
                          ? 'text-white'
                          : 'text-green-800'
                      }`} 
                      isActive={activeStep === index}
                    />
                  </div>
                  {index < steps.length - 1 && (
                    <div className="w-0.5 h-8 sm:h-12 lg:h-16 bg-gray-200"></div>
                  )}
                </div>
                <div className="flex-1">
                  <h3 className="text-base sm:text-lg lg:text-xl mb-1 sm:mb-2">
                    <strong className="font-bold">Step {step.id}:</strong>
                    <span className=""> {step.title}</span>
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Right side - Phone mockup */}
          <div className="w-full lg:w-1/2 flex justify-center lg:sticky lg:top-1/4">
            <div ref={phoneRef} className="relative max-w-[200px] sm:max-w-[250px] lg:max-w-[300px] w-full transition-all duration-700 rounded-lg overflow-hidden">
              {/* Phone content - Full size images */}
              <div className="relative">
                {steps.map((step, index) => (
                  <div 
                    key={index}
                    className={`transition-opacity duration-500 ${
                      activeStep === index ? 'opacity-100 z-10' : 'opacity-0 z-0 absolute top-0 right-0 left-0 w-full'
                    }`}
                  >
                    {/* Display the phone image at full size */}
                    <img 
                      src={step.phoneImage} 
                      alt={`Step ${step.id} Screenshot`} 
                      className="w-full h-auto object-contain rounded-lg"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;