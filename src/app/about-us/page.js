import BannerSection from "@/components/banner/Banner";
import { Navbar } from "@/components/navbar/Navbar";
import React from "react";
import dynamic from "next/dynamic";

const AboutUsSection = dynamic(() => import("@/components/about/about"));
const AboutChairmanSection = dynamic(() => import("@/components/about/AboutChairmanSection"));
const MissionVisionSection = dynamic(() => import("@/components/about/MissionVisionSection"));
const OurValuesSection = dynamic(() => import("@/components/about/OurValuesSection"));
const ScheduleSection = dynamic(() => import("@/components/about/ScheduleSection"));
const WhyChooseSection = dynamic(() => import("@/components/about/WhyChooseSection"));
const Footer = dynamic(() => import("@/components/footer/Footer"));

const page = () => {
  return (
    <>
      <div className="min-h-screen w-full">
        <Navbar />
        <BannerSection
          title="About Us"
          breadcrumbs={[
            { name: "Home", path: "/" },
            { name: "About", path: "/about" }
          ]} />
        <AboutUsSection />
        <MissionVisionSection />
        <ScheduleSection />
        <WhyChooseSection />
        <AboutChairmanSection />
        <OurValuesSection />
        <Footer />
      </div>
    </>
  );
};

export default page;
