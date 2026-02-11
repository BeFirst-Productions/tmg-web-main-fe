"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Container } from "../layout/Container";
import SmallBanner from "../common/SmallBanner";
import MainButton from "../button/main-button";

export default function TermsOfService() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("1.1");
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef(null);

  const [isInView, setIsInView] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const progress = (scrollTop / (documentHeight - windowHeight)) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const circleVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: (i) => ({
      opacity: 0.1,
      scale: 1,
      transition: {
        delay: 0.4 + i * 0.15,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const descriptionVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.1,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.3,
        duration: 0.5,
        type: "spring",
        stiffness: 120,
      },
    },
  };

  const sections = [
    {
      id: "1.1",
      title: "1.1 Services",
      content:
        "TMG Global provides business setup, company formation, visa services, PRO services, government approvals, virtual office solutions, ISO certification, trademark registration, legal translation, insurance & VAT services, corporate bank account support, document attestation, and related business consultancy in the UAE.",
    },
    {
      id: "1.2",
      title: "1.2 Use of Services",
      items: [
        "Services are intended for lawful purposes only.",
        "You must provide accurate and complete information when engaging our services.",
        "TMG Global reserves the right to refuse service if information is found fraudulent or misleading.",
      ],
    },
    {
      id: "1.3",
      title: "1.3 Payment & Fees",
      items: [
        "All fees for services are as agreed in our quotation or invoice.",
        "Payments must be completed before service delivery unless stated otherwise.",
        "Late payments may attract additional charges as per the agreement.",
      ],
    },
    {
      id: "1.4",
      title: "1.4 Client Responsibilities",
      items: [
        "Clients are responsible for providing all required documents in a timely manner.",
        "Clients must comply with UAE laws and regulations in relation to the services provided.",
      ],
    },
    {
      id: "1.5",
      title: "1.5 Limitation of Liability",
      items: [
        "TMG Global will exercise due diligence and care in providing services.",
        "TMG Global is not liable for delays, government processing times, or regulatory changes beyond our control.",
        "Liability for any service is limited to the fees paid for the specific service rendered.",
      ],
    },
    {
      id: "1.6",
      title: "1.6 Intellectual Property",
      content:
        "All content, designs, logos, and materials on the TMG Global website are intellectual property of TMG Global and cannot be reproduced without written consent.",
    },
    {
      id: "1.7",
      title: "1.7 Termination",
      items: [
        "TMG Global reserves the right to suspend or terminate services if terms are breached.",
        "Refunds are subject to the service agreement and UAE law.",
      ],
    },
    {
      id: "1.8",
      title: "1.8 Governing Law",
      content:
        "These Terms are governed by the laws of the United Arab Emirates. Any disputes will be resolved under the jurisdiction of Dubai courts unless otherwise mutually agreed.",
    },
  ];

  const handleSectionClick = (id) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    const element = document.getElementById(`section-${id}`);
    setTimeout(() => {
      element?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const contentVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Scroll Progress Bar */}
      {/* <div className="fixed top-0 left-0 h-1 bg-gradient-to-r from-[#C79A59] to-amber-800 z-50" style={{ width: `${scrollProgress}%` }}></div> */}
      <Container>
        {/* Header */}
        <motion.header
          className="bg-white text-black py-12 flex flex-col items-center justify-center text-center border-b border-gray-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-7xl mx-auto">
            <motion.div
              variants={headerVariants}
              initial="hidden"
              animate="visible"
            >
              <h1 className="text-4xl sm:text-5xl text-[#941D43] font-bold mb-4">
                Terms of Service
              </h1>
              {/* <div className="w-16 h-1 bg-gradient-to-r from-amber-500 to-amber-600 mb-6"></div> */}
              {/* <p className="text-xl font-semibold text-[#941D43] mb-2">TMG Global</p> */}
              <p className="text-black">Last Updated: 31th Oct 2025</p>
            </motion.div>
          </div>
        </motion.header>

        {/* Main Content Area */}
        <div className="max-w-7xl mx-auto  py-8">
          <div className="flex gap-2 md:gap-8">
            {/* Mobile Menu Button */}
            {/* <motion.button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden fixed bottom-8 right-8 bg-amber-600 hover:bg-amber-700 text-white p-3 rounded-full shadow-lg z-40"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </motion.button> */}

            {/* Sidebar - Left */}
            <motion.aside
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className={`${
                mobileMenuOpen ? "fixed inset-0 z-30 bg-black/50" : ""
              } lg:block lg:relative lg:bg-transparent lg:z-auto`}
              onClick={() => setMobileMenuOpen(false)}
            >
              <motion.div
                className={`${
                  mobileMenuOpen
                    ? "fixed left-0 top-0 bottom-0 w-72 bg-white shadow-2xl z-40 overflow-y-auto pt-20"
                    : "lg:w-72"
                } hidden lg:block lg:sticky lg:top-8 h-fit bg-white rounded-lg border border-gray-200 shadow-sm`}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="p-6">
                  <h1 className="text-lg font-bold text-black mb-6 pb-4 border-b border-gray-200">
                    Table of Contents
                  </h1>
                  <nav className="space-y-2">
                    {sections.map((section, index) => (
                      <motion.button
                        key={section.id}
                        onClick={() => handleSectionClick(section.id)}
                        whileHover={{ x: 4 }}
                        whileTap={{ scale: 0.98 }}
                        className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-300 font-medium ${
                          activeSection === section.id
                            ? "bg-[#C79A59] text-white shadow-md"
                            : "text-gray-700 hover:bg-gray-100"
                        }`}
                      >
                        {section.title}
                      </motion.button>
                    ))}
                  </nav>
                </div>
              </motion.div>
            </motion.aside>

            {/* Content - Right */}
            <motion.main
              className="flex-1 min-w-0"
              variants={contentVariants}
              initial="hidden"
              animate="visible"
            >
              {/* Introduction */}
              <motion.div
                className="mb-12 p-8 bg-amber-50 border-l-4 border-[#C79A59] rounded"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <p className="text-gray-800 text-lg leading-relaxed">
                  <span className="font-bold text-[#941D43]">
                    Welcome to TMG Global.
                  </span>{" "}
                  By using our website, services, or interacting with our team,
                  you agree to the following terms and conditions.
                </p>
              </motion.div>

              {/* Sections Content */}
              <div className="space-y-12">
                {sections.map((section, index) => (
                  <motion.section
                    key={section.id}
                    id={`section-${section.id}`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5 }}
                    className="scroll-mt-8"
                  >
                    <div className="bg-white border-b-4 border-[#C79A59] pb-6">
                      <h2 className="text-3xl font-bold text-gray-900 mb-6">
                        {section.title}
                      </h2>

                      {section.content ? (
                        <p className="text-gray-700 leading-relaxed text-base lg:text-lg">
                          {section.content}
                        </p>
                      ) : (
                        <ul className="space-y-4">
                          {section.items?.map((item, itemIndex) => (
                            <li key={itemIndex} className="flex gap-4">
                              <span className="text-[#C79A59] font-bold flex-shrink-0 mt-1">
                                •
                              </span>
                              <span className="text-gray-700 leading-relaxed text-base lg:text-lg">
                                {item}
                              </span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </motion.section>
                ))}
              </div>

              {/* Legal Notice */}
              <motion.div
                className="mt-16 p-8 bg-gray-900 text-white rounded-lg border border-gray-700"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-xl font-bold mb-4">Legal Notice</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  These Terms of Service represent a legally binding agreement
                  between you and TMG Global. By accessing and using our
                  services, you acknowledge that you have read, understood, and
                  agree to be bound by all of these terms and conditions.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  If you do not agree with any part of these terms, please do
                  not use our services. TMG Global reserves the right to modify
                  these terms at any time. Your continued use of our services
                  following any changes constitutes your acceptance of the new
                  terms.
                </p>
              </motion.div>

              {/* <SmallBanner/> */}
              <div ref={sectionRef} className="relative pb-32 lg:pt-16 pt-8">
                <motion.div
                  className="min-h-[200px] w-full rounded-2xl p-6  flex items-center justify-center text-white relative overflow-hidden"
                  style={{
                    backgroundImage:
                      "linear-gradient(180deg, rgba(40,7,17,1.00) 0%, rgba(142,26,61,1.00) 100%)",
                    backgroundPosition: "center center",
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <motion.div
                      custom={0}
                      variants={circleVariants}
                      initial="hidden"
                      animate={isInView ? "visible" : "hidden"}
                      className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full -translate-y-16 translate-x-16"
                    />
                    <motion.div
                      custom={1}
                      variants={circleVariants}
                      initial="hidden"
                      animate={isInView ? "visible" : "hidden"}
                      className="absolute bottom-0 left-0 w-24 h-24 bg-white rounded-full translate-y-12 -translate-x-12"
                    />
                  </div>

                  <motion.div
                    className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                  >
                    {/* Icon */}

                    <motion.h1
                      variants={titleVariants}
                      className="text-3xl md:text-4xl font-bold mb-3"
                    >
                      Ready to Start Your Business Journey
                    </motion.h1>

                    <motion.p
                      variants={descriptionVariants}
                      className="text-lg mb-6 max-w-2xl mx-auto opacity-90"
                    >
                      Get expert assistance from TMG Global and launch your UAE
                      business with confidence. Contact us today for a free
                      consultation and customized setup plan.
                    </motion.p>

                    <motion.div
                      variants={buttonVariants}
                      className=" flex justify-center"
                    >
                      <MainButton text="Contact Now" />
                    </motion.div>
                  </motion.div>
                </motion.div>
              </div>
            </motion.main>
          </div>
        </div>
      </Container>
    </div>
  );
}
