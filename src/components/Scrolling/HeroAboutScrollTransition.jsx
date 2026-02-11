"use client";
import dynamic from "next/dynamic";

import { HeroSection } from "../hero/HeroSection";
const AboutSection = dynamic(() => import("../about/AboutSection"));


export const HeroAboutScrollTransition = () => {

  return (
    <div className="relative z-20">
      <div className="sticky top-0 ">
        <HeroSection />
      </div>
      <div className="sticky top-0 ">
        <AboutSection />
      </div>
    </div>
  );
};
