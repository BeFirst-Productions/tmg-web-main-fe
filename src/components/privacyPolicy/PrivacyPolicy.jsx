"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, Shield, Mail, Phone, MapPin } from "lucide-react";

export default function PrivacyPolicy() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("2.1");
  const [scrollProgress, setScrollProgress] = useState(0);

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

  const sections = [
    {
      id: "2.1",
      title: "2.1 Introduction",
      content:
        "TMG Global respects your privacy. This policy explains how we collect, use, and protect your personal information.",
    },
    {
      id: "2.2",
      title: "2.2 Information We Collect",
      items: [
        "Personal Information: Name, email, phone number, passport copy, visa, and business documents.",
        "Usage Information: IP address, device type, browser, pages visited on our website.",
        "Financial Information: Payment details for transactions.",
      ],
    },
    {
      id: "2.3",
      title: "2.3 How We Use Your Information",
      items: [
        "To provide and manage our services.",
        "To communicate updates, offers, and service-related information.",
        "To comply with UAE laws and regulatory requirements.",
        "To improve our services and website functionality.",
      ],
    },
    {
      id: "2.4",
      title: "2.4 Sharing Information",
      items: [
        "Information may be shared with UAE government authorities as required by law.",
        "We do not sell or rent personal information to third parties.",
        "Service partners (banks, insurance providers, or consultants) may receive information strictly to fulfill service requirements.",
      ],
    },
    {
      id: "2.5",
      title: "2.5 Data Protection",
      items: [
        "TMG Global employs industry-standard security measures to protect your data.",
        "Personal information is stored securely and access is restricted to authorized personnel only.",
      ],
    },
    {
      id: "2.6",
      title: "2.6 Cookies & Tracking",
      items: [
        "Our website uses cookies to enhance user experience and monitor performance.",
        "You may disable cookies in your browser, though some site features may not function correctly.",
      ],
    },
    {
      id: "2.7",
      title: "2.7 Your Rights",
      items: [
        "You can request access, correction, or deletion of your personal information.",
        "Requests should be made by contacting info@tmg-global.com.",
      ],
    },
    {
      id: "2.8",
      title: "2.8 Retention of Data",
      content:
        "We retain personal information only as long as necessary for service provision, legal compliance, or legitimate business purposes.",
    },
    {
      id: "2.9",
      title: "2.9 Updates to This Policy",
      items: [
        "TMG Global may update these terms or privacy policy periodically.",
        "Updates will be posted on our website with the effective date.",
      ],
    },
    {
      id: "2.10",
      title: "2.10 Contact Us",
      content:
        "For any questions or concerns regarding our Terms & Privacy Policy, contact us at the information below.",
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
    <div className="min-h-screen pb-14 lg:pb-28 bg-white">
      {/* Scroll Progress Bar */}
      {/* <div className="fixed top-0 left-0 h-1 bg-gradient-to-r from-[#C79A59] to-blue-800 z-50" style={{ width: `${scrollProgress}%` }}></div> */}

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
            <motion.h1 className="text-4xl sm:text-5xl text-[#941D43] font-bold mb-4">
              Privacy Policy
            </motion.h1>
            {/* <div className="w-16 h-1 bg-gradient-to-r from-amber-500 to-amber-600 mb-6"></div> */}
            {/* <p className="text-xl font-semibold text-[#941D43] mb-2">TMG Global</p> */}
            <p className="text-black">Last Updated: 31th Oct 2025</p>
          </motion.div>
        </div>
      </motion.header>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-2 lg:gap-8">
          {/* Mobile Menu Button */}
          {/* <motion.button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden fixed bottom-8 right-8 bg-amber-600 hover:bg-amber-700 text-white p-3 rounded-full shadow-lg z-40"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
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
                <h3 className="text-lg font-bold text-gray-900 mb-6 pb-4 border-b border-gray-200">
                  Table of Contents
                </h3>
                <nav className="space-y-2">
                  {sections.map((section) => (
                    <motion.button
                      key={section.id}
                      onClick={() => handleSectionClick(section.id)}
                      whileHover={{ x: 4 }}
                      whileTap={{ scale: 0.98 }}
                      className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-300 font-medium text-sm ${
                        activeSection === section.id
                          ? "bg-[#C79A59] text-white shadow-md"
                          : "text-black hover:bg-gray-100"
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
              className="mb-12 p-8 bg-blue-50 border-l-4 border-[#C79A59] rounded"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <p className="text-gray-800 text-lg leading-relaxed">
                <span className="font-bold text-[#941D43]">
                  Welcome to TMG Global.
                </span>{" "}
                We are committed to protecting your privacy and ensuring you
                have a positive experience on our website and when using our
                services.
              </p>
            </motion.div>

            {/* Sections Content */}
            <div className="space-y-12">
              {sections.map((section) => (
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

            {/* Contact Information Section */}
            <motion.div
              className="mt-16  text-white rounded-lg shadow-lg overflow-hidden"
              style={{
                backgroundImage:
                  "linear-gradient(180deg, rgba(40,7,17,1.00) 0%, rgba(142,26,61,1.00) 100%)",
                backgroundPosition: "center center",
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-8">Get in Touch</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {/* Email */}
                  <motion.div
                    whileHover={{ y: -4 }}
                    className="flex items-start gap-4"
                  >
                    <Mail className="w-6 h-6 text-[#C79A59] flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-white mb-1">Email</p>
                      <p className="text-white hover:text-[#C79A59] transition-colors duration-300">
                        <a href="mailto:info@tmgdubai.com">info@tmgdubai.com</a>
                      </p>
                    </div>
                  </motion.div>

                  {/* Phone */}
                  <motion.div
                    whileHover={{ y: -4 }}
                    className="flex items-start gap-4"
                  >
                    <Phone className="w-6 h-6 text-[#C79A59] flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-white mb-1">Phone</p>
                      <p className="text-white hover:text-[#C79A59] transition-colors duration-300">
                        <a
                          href="tel:+971545267777"
                          className="text-white transition-colors duration-300"
                        >
                          +971 54 526 7777
                        </a>
                      </p>
                    </div>
                  </motion.div>

                  {/* Address */}
                  <motion.div
                    whileHover={{ y: -4 }}
                    className="flex items-start gap-4 sm:col-span-2 lg:col-span-1"
                  >
                    <MapPin className="w-6 h-6 text-[#C79A59] flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-white mb-1">Address</p>
                      <p className="text-white">
                        Al Twar Centre, Al Barsha Mall, Madina Mall, Al Garhoud
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Legal Notice */}
            {/* <motion.div
              className="mt-12 p-8 bg-gray-900 text-white rounded-lg border border-gray-700"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-xl font-bold mb-4">Important Notice</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                This Privacy Policy is an integral part of TMG Global's commitment to transparency and data protection. By using our services and website, you acknowledge that you have read and understood this policy and consent to the collection and use of your information as described herein.
              </p>
              <p className="text-gray-300 leading-relaxed">
                If you have any concerns about how we handle your personal data or if you believe we have not complied with this privacy policy, please contact us immediately for resolution.
              </p>
            </motion.div> */}
          </motion.main>
        </div>
      </div>
    </div>
  );
}
