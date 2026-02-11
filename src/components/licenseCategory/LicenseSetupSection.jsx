"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Container } from "../layout/Container";
import { licenseCategories } from "../../data/LicenseCategories";
import Link from "next/link";

const LicenseSetupPage = () => {
  const firstCardRef = useRef(null);

  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    const firstCard = firstCardRef.current;
    if (!firstCard) return;

    const slide1 = firstCard.querySelector(".slide1");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            slide1?.classList.add("auto-open");
            setTimeout(() => {
              slide1?.classList.remove("auto-open");
            }, 1000);
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(firstCard);

    return () => observer.disconnect();
  }, []);

  return (
    <div className=" h-auto xl:h-[900px] bg-white relative overflow-hidden py-4 md:py-8">
      <div className="absolute top-0 right-0 w-64 h-64 bg-amber-200 rounded-full blur-3xl opacity-30"></div>

      <div
        className="absolute right-0 w-72 h-72 opacity-100 top-[38%] md:top-[30%] lg:top-[38%] hidden md:block"
        style={{ transform: "translateY(-50%)" }}
      >
        <img
          src="/assets/images/category/right_element.png"
          alt="Professional woman with tablet"
          className="w-full h-auto rounded-2xl"
        />
      </div>

      <Container>
        <div className="container z-10 mx-auto px-4 py-16 lg:pt-10 lg:py-0">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-[#49051E] mb-4">
              License category
            </h2>
            <p className="text-[#4b5563] max-w-2xl mx-auto">
              Empower your business growth with clear, reliable
              licensing guidance
            </p>
          </motion.div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 justify-items-center gap-6 mb-16 lg:mb-52">
            {licenseCategories.map((category, index) => (
              <div
                key={index}
                className="container flex justify-center"
                ref={index === 0 ? firstCardRef : null}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="card relative">
                  {/* Slide1: Image */}
                  <div
                    className={`slide slide1 ${
                      hoveredIndex === index ? "hovered" : ""
                    }`}
                  >
                    <div className="content">
                      <div className="icon">
                        <img
                          src={category.image}
                          alt={category.title}
                          className="bg-image"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Slide2: Description + Title/Button */}
                  <div className="slide slide2">
                    <div className="content flex flex-col justify-between items-center ">
                      <p>{category.description}</p>

                      {/* Hide title when hovered */}
                      {hoveredIndex !== index && <h3>{category.title}</h3>}

                      {/* Show button only on hover */}
                      {hoveredIndex === index && (
                        <div>
                          <Link href={category.link}>
                            <button className="mt-4 bg-white text-[#941D43] font-bold py-2 px-4 rounded">
                              Learn More
                            </button>
                          </Link>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </Container>
    </div>
  );
};

export default LicenseSetupPage;
