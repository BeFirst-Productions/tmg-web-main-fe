"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Container } from "../layout/Container";
import { ArrowUpRight } from "lucide-react";
import ProfileCard from "../animations/Card";
import { useRouter } from "next/navigation";

const FounderSection = () => {
  const router = useRouter();

  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      id: 1,
      image: "/assets/images/chairmanSection/18.png",
      alt: "Slide 1",
    },
    {
      id: 2,
      image: "/assets/images/chairmanSection/150.png",
      alt: "Slide 2",
    },
    {
      id: 3,
      image: "/assets/images/chairmanSection/10.png",
      alt: "Slide 3",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };
  const HighlightWord = ({ children }) => (
    <span className=" inline-block pl-2">
      <span
        className="text-transparent"
        style={{
          WebkitTextStroke: "0.5px #fff",
        }}
      >
        {children}
      </span>
    </span>
  );
  return (
    <section
      className="xl:h-[500px] h-auto lg:py-16 py-8"
      style={{
        backgroundImage:
          "linear-gradient(180deg, rgba(142,26,61,1) 0%, rgba(40,7,17,1) 100%)",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Container>
        <div className="w-full">
          <div className="grid grid-cols-1 lg:grid-cols-3 justify-items-center gap-8 items-center">
            <div className="flex justify-center lg:justify-start xl:w-80 w-72  relative h-96 xl:h-96  overflow-hidden">
              <Image
                src="/assets/images/chairman/THAMEEM-ABOOBACKER.jpg"
                alt="Founder"
                fill
                className="object-contain"
                priority
              />

              <div
                className="absolute lg:bottom-11 bottom-12 left-4 right-4 
      bg-white/30 backdrop-blur-md 
      flex items-center rounded-2xl justify-between 
      px-4 py-3 shadow-lg border border-white/20"
              >
                <div className="text-left">
                  <p className="text-[#B2104B] font-semibold tracking-wide leading-tight">
                    THAMEEM ABOOBACKER
                  </p>
                  <p className="text-gray-800 text-sm font-medium">
                    Chairman of TMG Global
                  </p>
                </div>

                <button
                  onClick={() => router.push("/about-us#about-chairman")}
                  className="bg-[#B2104B] text-white p-2 rounded-2xl hover:bg-[#8e0d3a] transition flex items-center justify-center w-9 h-9"
                >
                  <ArrowUpRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Center - About Content */}
            <div className="text-center lg:text-left">
              <h2 className="text-4xl sm:text-5xl lg:text-[3rem] text-white  mb-6 lg:mb-8 leading-tight font-bold">
                Starting Career
                <HighlightWord>Since </HighlightWord> 2008
              </h2>

              <p className="text-[0.938rem] md:text-lg text-white mb-4 leading-relaxed">
                Since 2008, Mr. Thameem Aboobacker began his journey with a
                clear vision-to create opportunities, inspire people, and
                deliver genuine service. From humble beginnings, his dedication
                and faith turned challenges into milestones. Each step built the
                foundation for{" "}
                <a
                  href="https://www.instagram.com/tmg_global"
                  className="text-decoration-none"
                >
                  <b>TMG Global’s</b>
                </a>{" "}
                growth, driven by integrity, teamwork, and a passion to serve.
              </p>
            </div>

            {/* Right Side - Image Slider */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative md:w-60 w-52  ">
                {/* Slider Container */}
                <div className="relative md:h-60 h-52 rounded-2xl overflow-hidden perspective-1000">
                  {slides.map((slide, index) => (
                    <div
                      key={slide.id}
                      className={`absolute inset-0 transition-transform duration-700 ease-in-out transform-style-preserve-3d ${
                        index === currentSlide
                          ? "rotate-y-0 z-10"
                          : "rotate-y-180 z-0"
                      }`}
                    >
                      <Image
                        src={slide.image}
                        alt={slide.alt}
                        fill
                        className="object-cover backface-hidden"
                      />
                    </div>
                  ))}
                </div>

                {/* Dots Indicator */}
                <div className="flex justify-center mt-6 space-x-3">
                  {slides.map((_, index) => (
                    <div
                      key={index}
                      className={`w-6 h-6 flex items-center justify-center rounded-full transition-all duration-300
        ${
          index === currentSlide
            ? "border-2 border-white"
            : "border-transparent"
        }`}
                    >
                      <button
                        onClick={() => goToSlide(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300
          ${
            index === currentSlide
              ? "bg-[#C79A59] scale-110"
              : "bg-gray-300 hover:bg-gray-400"
          }`}
                        aria-label={`Go to slide ${index + 1}`}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default FounderSection;
