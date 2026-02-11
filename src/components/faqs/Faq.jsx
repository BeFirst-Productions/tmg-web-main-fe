"use client";

import { useState, useRef, useMemo } from "react";
import { motion, useInView } from "framer-motion";
import { Container } from "../layout/Container";
import FAQItem from "./FAQItem";

export default function FAQ() {
  const [openIndexLeft, setOpenIndexLeft] = useState(0);
  const [openIndexRight, setOpenIndexRight] = useState(null);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const faqsLeft = useMemo(
    () => [
      {
        question: "What services does TMG Global provide?",
        answer:
          "TMG Global offers end-to-end business solutions in the UAE, including business setup, company formation, visa services, PRO services, Golden Visa, ISO certification, trademarks, virtual office, bank account opening, document attestation, legal translation, insurance, and more.",
      },
      {
        question: "How can I start a business in Dubai with TMG Global?",
        answer:
          "You can schedule a consultation with our experts. We guide you through company structure, trade license selection, approvals, visas, and full setup compliance.",
      },
      {
        question:
          "What is the difference between Mainland, Freezone, and Offshore company setups?",
        answer:
          "Mainland companies allow trading in the UAE market, Freezones provide 100% ownership with tax benefits and restricted local trade, and Offshore companies are ideal for asset protection and international operations.",
      },
      {
        question: "How long does it take to set up a company in Dubai?",
        answer:
          "The timeline varies by jurisdiction and business activity. Mainland setups typically take 5–15 working days, Freezone setups 1–2 weeks, and Offshore setups 1–5 days.",
      },
      {
        question: "What is the UAE Golden Visa and who is eligible?",
        answer:
          "The Golden Visa is a 5- or 10-year long-term residency visa for investors, entrepreneurs, exceptional talents, and outstanding students. Eligibility depends on your investment, business, or professional category.",
      },
      {
        question: "Do you help with visa and PRO services?",
        answer:
          "Yes. TMG Global manages visa applications, renewals, cancellations, medical tests, Emirates ID, and all PRO-related government approvals.",
      },
      {
        question: "How do I get a local sponsor for my Mainland company?",
        answer:
          "We connect you with verified UAE national sponsors or Local Service Agents (LSA) and help draft legally compliant agreements.",
      },
      {
        question: "Can you help me open a corporate bank account in the UAE?",
        answer:
          "Yes. We provide bank selection guidance, document preparation, application submission, and liaison with bank officials to increase your chances of approval.",
      },
      {
        question:
          "What is the process for ISO certification and trademark registration?",
        answer:
          "We assist with ISO gap analysis, documentation, audits, and provide complete trademark filing, monitoring, and protection services with UAE authorities.",
      },
      {
        question: "Do you provide virtual office and Ejari services?",
        answer:
          "Yes. TMG Global offers prestigious virtual office addresses, mail handling, meeting room access, and Ejari registration for Mainland and Freezone businesses.",
      },
    ],
    []
  );

  const faqsRight = useMemo(
    () => [
      {
        question: "Which free zones are best for my business?",
        answer:
          "The best free zone depends on your business activity. Popular options include DMCC for commodities, DIFC for financial services, Dubai Internet City for tech, and JAFZA for trading and logistics.",
      },
      {
        question: "Can I open a corporate bank account remotely?",
        answer:
          "While most UAE banks require in-person visits, we facilitate the entire process including documentation, bank introductions, and appointment scheduling to make it as seamless as possible.",
      },
      {
        question: "What documents are needed for company formation?",
        answer:
          "Basic documents include passport copies, visa copies, business plan, proof of address, and NOC if applicable. Additional documents may be required based on your specific business activity.",
      },
      {
        question: "How does document attestation work?",
        answer:
          "Document attestation involves verification by relevant authorities in your home country and UAE. We handle the entire process including embassy attestation, MOFA attestation, and notarization.",
      },
      {
        question: "What types of business licenses are available?",
        answer:
          "Main license types include Commercial (trading), Professional (services), Industrial (manufacturing), and Tourism licenses. The type depends on your business activities and operational requirements.",
      },
      {
        question: "Can TMG Global help with business restructuring?",
        answer:
          "Yes, we provide business restructuring services including change of ownership, adding/removing partners, license amendments, and conversion between different business structures.",
      },
      {
        question: "What insurance services do you offer?",
        answer:
          "We offer various insurance solutions including health insurance for employees, business liability insurance, property insurance, and other commercial insurance products.",
      },
      {
        question: "How do I renew my trade license?",
        answer:
          "Trade license renewal is done annually through the relevant authority. We handle the entire renewal process including documentation, fee payment, and coordination with government departments.",
      },
      {
        question: "What is the difference between mainland and free zone?",
        answer:
          "Mainland companies can trade directly in the UAE market but may need a local sponsor. Free zones offer 100% foreign ownership, tax benefits, and easier setup but have limitations on local trading.",
      },
      {
        question: "Does TMG Global provide post-incorporation support?",
        answer:
          "Yes, we offer ongoing support including accounting, auditing, compliance management, license renewals, visa services, and general business advisory to ensure smooth operations.",
      },
    ],
    []
  );

  const toggleLeft = (index) => {
    setOpenIndexLeft(openIndexLeft === index ? null : index);
  };

  const toggleRight = (index) => {
    setOpenIndexRight(openIndexRight === index ? null : index);
  };

  const leftColumnVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    }),
  };

  const rightColumnVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    }),
  };

  return (
    <div className="min-h-screen bg-white pt-12 sm:pt-16 md:pt-24 pb-24 md:pb-36 relative overflow-hidden">
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.2 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="absolute top-[50%] right-4 sm:right-8 w-16 h-16 sm:w-24 sm:h-24"
      >
        <div className="w-full h-full bg-gradient-to-br from-amber-300 to-amber-500 rounded-full blur-2xl"></div>
      </motion.div>

      <div className="absolute  left-0 top-24 w-64 h-64 opacity-100 z-0">
        <img
          src="/assets/images/about/left_element.png"
          alt="Professional woman with tablet"
          className="w-full h-full object-contain opacity-80"
        />
      </div>

      <Container>
        <div className="max-w-7xl mx-auto relative z-10">
      
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="mb-10 sm:mb-14 md:mb-24"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#49051E]">
              Frequently Asked Questions
            </h1>
          </motion.div>

      
          <div
            ref={containerRef}
            className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5 md:gap-6"
          >
            {/* Left Column */}
            <div className="space-y-4 sm:space-y-5">
              {faqsLeft.map((faq, index) => (
                <FAQItem
                  key={`left-${index}`}
                  faq={faq}
                  index={index}
                  isOpen={openIndexLeft === index}
                  toggle={toggleLeft}
                  variants={leftColumnVariants}
                  customIndex={index}
                />
              ))}
            </div>

            {/* Right Column */}
            <div className="space-y-4 sm:space-y-5">
              {faqsRight.map((faq, index) => (
                <FAQItem
                  key={`right-${index}`}
                  faq={faq}
                  index={index}
                  isOpen={openIndexRight === index}
                  toggle={toggleRight}
                  variants={rightColumnVariants}
                  customIndex={index}
                />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
