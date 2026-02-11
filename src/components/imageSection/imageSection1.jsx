'use client'
import Image from 'next/image';
import MainButton from '../button/main-button';
import { Container } from '../layout/Container';
import LettersPullUpText from '../text/LettersPullUpText';
import { useState } from 'react';
import ConsultationModal from '../common/ConsultationModal';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const ImageSection = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <section className="relative h-auto lg:h-[278px] py-4 lg:py-4 flex items-center justify-center">
      
      {/* Background Image */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8 }}
      >
        <Image
          src="/assets/images/ImageSection/image-section-01.jpg"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </motion.div>

      {/* Content Container */}
      <Container>
        <div className="relative z-10 container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-12 justify-items-center">

            {/* Left Side */}
            <motion.div
              className="text-white flex justify-center items-center"
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.4 }}
            >
              <LettersPullUpText
                text="Connect with Our Premium Business Consultants"
                className="text-[#FFFFFF]"
              />
            </motion.div>

            {/* Right Side */}
            <motion.div
              className="text-white flex flex-col justify-center items-center"
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.4 }}
            >
              <p className="text-[0.938rem] md:text-lg mb-6 leading-relaxed">
                <a href='https://tmgdubai.ae/contact' className='text-decoration-none'>
                  Best Business Setup Consultants in Dubai
                </a> empowering entrepreneurs 
                with expert planning, seamless documentation, and 
                reliable government-linked solutions
              </p>

              <div className='flex justify-center'>
                <MainButton 
                  bgColor='#C79A59'
                  text='Connect with Us'
                  className=''
                  icon='external'
                  scroll={true}
                  onClick={() => setShowModal(true)}
                />
              </div>
            </motion.div>

          </div>
        </div>
      </Container>

      {showModal && (
        <ConsultationModal isOpen={showModal} setIsOpen={setShowModal} />
      )}

    </section>
  );
};

export default ImageSection;
