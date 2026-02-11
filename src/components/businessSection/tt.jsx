// components/ImageWithRectangles.tsx
'use client';

import Image from 'next/image';
import { Container } from '../layout/Container';

const BusinessDestination = () => {
  const rectangles = [
    {
      id: 1,
      icon: '/assets/images/BusinessSection/logos/icon01.png',
      title: 'World-Class Infrastructure',
      description: 'Dubai offers state-of-the-art facilities, modern office spaces, and cutting-edge logistics that empower businesses to operate efficiently and scale seamlessly. Our offices provide a professional environment with top-tier amenities to ensure productivity and comfort.',
      position: 'top-left'
    },
    {
      id: 2,
      icon: '/assets/icons/icon2.svg',
      title: 'Strategic Location',
      description: 'Dubai\'s prime location connects businesses to key markets across the Middle East, Asia, Europe, and beyond, making it a global hub for trade and investment. We have 4 strategically located branches to serve you efficiently across the city.',
      position: 'top-right'
    },
    {
      id: 3,
      icon: '/assets/icons/icon3.svg',
      title: 'Ease of Doing Business',
      description: 'Dubai is recognized as one of the world\'s easiest cities to start and operate a business, thanks to streamlined government processes and investor-friendly policies. With 18+ years of industry experience, TMG Global ensures a smooth and hassle-free setup process.',
      position: 'middle-left'
    },
    {
      id: 4,
      icon: '/assets/icons/icon4.svg',
      title: 'Explore Our Departments',
      description: 'TMG Global supports every aspect of business setup — from licensing and document clearance to PRO services and government approvals. Explore all our departments designed to cater to your unique business requirements.',
      position: 'middle-right'
    },
    {
      id: 5,
      icon: '/assets/icons/icon5.svg',
      title: '0% Corporate & Income Tax',
      description: 'Dubai provides a highly attractive tax environment, including 0% corporate and personal income tax, allowing businesses to maximize profits and growth.',
      position: 'bottom-left'
    },
    {
      id: 6,
      icon: '/assets/icons/icon6.svg',
      title: '100% Ownership',
      description: 'Foreign investors enjoy 100% ownership of their businesses in Dubai\'s free zones, giving complete control and operational freedom without the need for a local partner.',
      position: 'bottom-right'
    }
  ];

  return (
    <div className="min-h-screen relative bg-white overflow-hidden py-16">
      <div className="w-full">
        
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-16">
          {/* Heading - Left Side */}
          <Container>
            <div className="lg:w-1/2 mb-8 lg:mb-0">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Our Comprehensive
                <span className="text-blue-600 block">Business Solutions</span>
              </h2>
              <p className="text-lg text-gray-600 mt-4 max-w-2xl">
                We provide end-to-end business consulting services to help you achieve 
                your goals and drive sustainable growth in today's competitive market.
              </p>
            </div>
          </Container>

          {/* Image - Right Top */}
          <div
            className="absolute top-[15%] right-[-3%] w-80 h-80 opacity-100"
            style={{ transform: "translateY(-50%)" }}
          >
            <img
              src="/assets/images/common/right_element.png"
              alt="Professional woman with tablet"
              className="w-full h-auto rounded-2xl"
            />
          </div>
        </div>

        {/* Central Logo with Connecting Lines */}
        <Container>
          <div className="relative min-h-[800px] lg:min-h-[600px] py-8">
            
            {/* Central Logo Container */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
              <div className="relative w-32 h-32 lg:w-40 lg:h-40 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full shadow-2xl flex items-center justify-center border-4 border-white">
                <div className="w-20 h-20 lg:w-24 lg:h-24 relative">
                  <Image
                    src="/assets/images/BusinessSection/logos/icon01.png"
                    alt="Central Business Hub"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
                
                {/* Pulsing Animation */}
                <div className="absolute inset-0 rounded-full border-2 border-blue-400 animate-ping-slow opacity-75"></div>
              </div>
            </div>

            {/* Grid Layout for Cards */}
            <div className="grid grid-cols-2 gap-8 lg:gap-12 relative">
              
              {/* Left Column */}
              <div className="space-y-8  flex flex-col items-start">
                {rectangles.filter(item => item.position.includes('left')).map((item) => (
                  <div
                    key={item.id}
                    className={`relative ${
                      item.position === 'top-left' ? 'lg:mt-8' : 
                      item.position === 'middle-left' ? 'lg:my-auto' : 
                      'lg:mb-8'
                    }`}
                  >
                    {/* Connecting Line */}
                    <div className="hidden lg:block absolute top-1/2 right-0 w-1/2 h-0.5 bg-gradient-to-l from-blue-400 to-blue-200 transform -translate-y-1/2">
                      <div className="absolute top-1/2 left-0 w-4 h-4 bg-blue-500 rounded-full transform -translate-y-1/2 -translate-x-1/2 animate-pulse-slow"></div>
                      <div className="absolute top-1/2 left-0 w-full h-0.5 bg-blue-300">
                        <div className="absolute top-0 left-0 w-full h-full bg-blue-500 animate-pulse-line"></div>
                      </div>
                    </div>

                    {/* Card - Decreased width and removed icon */}
                    <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:border-blue-500 hover:shadow-xl transition-all duration-300 group ml-0 lg:ml-auto lg:mr-8 w-full max-w-xs">
                      <div className="flex flex-col">
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                            {item.title}
                          </h3>
                          <p className="text-gray-600 leading-relaxed text-sm">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Right Column */}
              <div className="space-y-8 lg:space-y-16 flex flex-col items-end">
                {rectangles.filter(item => item.position.includes('right')).map((item) => (
                  <div
                    key={item.id}
                    className={`relative ${
                      item.position === 'top-right' ? 'lg:mt-8' : 
                      item.position === 'middle-right' ? 'lg:my-auto' : 
                      'lg:mb-8'
                    }`}
                  >
                    {/* Connecting Line */}
                    <div className="hidden lg:block absolute top-1/2 left-0 w-1/2 h-0.5 bg-gradient-to-r from-blue-400 to-blue-200 transform -translate-y-1/2">
                      <div className="absolute top-1/2 right-0 w-4 h-4 bg-blue-500 rounded-full transform -translate-y-1/2 translate-x-1/2 animate-pulse-slow"></div>
                      <div className="absolute top-0 left-0 w-full h-0.5 bg-blue-300">
                        <div className="absolute top-0 left-0 w-full h-full bg-blue-500 animate-pulse-line-reverse"></div>
                      </div>
                    </div>

                    {/* Card - Decreased width and removed icon */}
                    <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:border-blue-500 hover:shadow-xl transition-all duration-300 group mr-0 lg:mr-auto lg:ml-8 w-full max-w-xs">
                      <div className="flex flex-col">
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                            {item.title}
                          </h3>
                          <p className="text-gray-600 leading-relaxed text-sm">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Add custom animations to your global CSS */}
      <style jsx global>{`
        @keyframes ping-slow {
          0% {
            transform: scale(1);
            opacity: 1;
          }
          75%, 100% {
            transform: scale(2);
            opacity: 0;
          }
        }
        @keyframes pulse-line {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        @keyframes pulse-line-reverse {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        .animate-ping-slow {
          animation: ping-slow 3s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
        .animate-pulse-slow {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        .animate-pulse-line {
          animation: pulse-line 2s ease-in-out infinite;
        }
        .animate-pulse-line-reverse {
          animation: pulse-line-reverse 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default BusinessDestination;