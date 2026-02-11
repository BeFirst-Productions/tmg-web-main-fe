'use client';

import { useRef, useEffect } from 'react';
import { Container } from '../layout/Container';
import { motion, useInView, useAnimation } from 'framer-motion';

const WhyChooseSection = () => {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { margin: '-20% 0px -20% 0px' });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      // Animate underline width left → right → left
      controls.start({
        width: ['0%', '65%', '20%'],
        transition: {
          duration: 3.5, // slower and smoother
          ease: 'easeInOut',
        },
      });
    }
  }, [inView, controls]);

  return (
    <section
      ref={sectionRef}
      className="px-4 sm:px-6 lg:px-0 py-8 lg:py-16 bg-[#F6F9FA]"
    >
      <Container>
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left Side - Content */}
          <div className="w-full lg:w-1/2">
            <div className="max-w-2xl">
              <div className="mb-8">
                <h2 className="text-4xl sm:text-5xl lg:text-[3rem] text-[#49051E] mb-3 lg:mb-4 leading-tight font-bold">
                  Why Choose Us
                </h2>

                {/* Animated Underline */}
                <motion.div
                  animate={controls}
                  initial={{ width: '0%' }}
                  className="h-1 bg-yellow-500 rounded-full origin-left"
                  style={{ width: '0%' }}
                />
              </div>

              <div className="space-y-6 text-gray-700">
                <p className="text-gray-600 text-[0.938rem] md:text-lg font-normal leading-relaxed">
                  At <span className="font-semibold text-gray-900">TMG Global LLC</span>, 
                  we have been the <a href='https://tmgdubai.ae/contact' className="text-decoration-none"><b>
                   best business setup consultants in dubai 
                    </b></a> for more than 
                   <span className="font-semibold text-gray-900"> 18 years</span>, delivering expert solutions that help individuals and companies thrive in the UAE market.
                </p>

                <p className="text-gray-600 text-[0.938rem] md:text-lg font-normal leading-relaxed">
                  With a team of <span className="font-semibold text-gray-900">150+ skilled professionals</span> and <span className="font-semibold text-gray-900">4+ active branches</span>, our strength lies in our people experienced, well trained, and deeply committed to excellence. We maintain strong connections with multiple government agencies to ensure smooth, transparent, and hassle-free processes for our clients.
                </p>

                <p className="text-gray-600 text-[0.938rem] md:text-lg font-normal leading-relaxed">
                  We continuously strive to improve our services, keeping our clients' needs at the center of everything we do. Our commitment to quality, efficiency, quick timing, and responsibility has earned us the trust of <span className="font-semibold text-gray-900">thousands of clients</span> across Dubai and beyond.
                </p>
              </div>

              {/* Features List */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  '18+ Years Experience',
                  '150+ Professionals',
                  '4+ Active Branches',
                  'Government Connections',
                ].map((text, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 shadow-lg p-4 rounded-2xl"
                  >
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-green-600 text-sm">✓</span>
                    </div>
                    <span className="text-gray-700">{text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Image Collage */}
          <div className="w-full lg:w-1/2">
            <div className="relative">
              {/* Main Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="/assets/images/about/Best-business-setup-company-in-dubai.png"
                  alt="TMG Global LLC Professional Team"
                  className="w-full h-80 lg:h-96 object-cover"
                />
              </div>

              {/* Small Top Image */}
              <div className="absolute -top-6 hidden md:block -left-6 w-40 h-40 rounded-xl overflow-hidden shadow-lg border-4 border-white">
                <img
                  src="/assets/images/about/why-choose-tmg-global.png"
                  alt="Client Meeting"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Small Bottom Image */}
              <div className="absolute -bottom-6 hidden md:block -right-6 w-40 h-40 rounded-xl overflow-hidden shadow-lg border-4 border-white">
                <img
                  src="/assets/images/about/why-choose02.png"
                  alt="Business Success"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default WhyChooseSection;
