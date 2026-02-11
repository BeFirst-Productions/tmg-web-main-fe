import { HeroAboutScrollTransition } from "@/components/Scrolling/HeroAboutScrollTransition";
import { Navbar } from "@/components/navbar/Navbar";
import React from "react";
import dynamic from "next/dynamic";

const AboutSection = dynamic(() => import("@/components/about/AboutSection"));
const Schedule = dynamic(() => import("@/components/about/Schedule"));
const WhereAvailableSection = dynamic(() => import("@/components/branches/Branches"));
const BusinessDestination = dynamic(() => import("@/components/businessSection/BusinessDestination"));
const BusinessSection = dynamic(() => import("@/components/businessSection/businessSection"));
const GetInTouch = dynamic(() => import("@/components/contact/ContactSection"));
const FAQSection = dynamic(() => import("@/components/faqs/FaqSection"));
const Footer = dynamic(() => import("@/components/footer/Footer"));
const FounderSection = dynamic(() => import("@/components/founderSection/FounderSection"));
const Gallery = dynamic(() => import("@/components/gallerySection/Gallery"));
const GoldenVisaBanner = dynamic(() => import("@/components/goldenVisa/GoldenVisaBanner"));
const ImageSection = dynamic(() => import("@/components/imageSection/imageSection1"));
const LicenseSetupPage = dynamic(() => import("@/components/licenseCategory/LicenseSetupSection"));
const SocialMediaCards = dynamic(() => import("@/components/socialMedia/SocalSection"));
const BusinessServiceTransiton = dynamic(() => import("@/components/Scrolling/BusinessServiceTransiton"));
const BusinessSetupPackages = dynamic(() => import("@/components/BusinessSetupPackages/BusinessSetupPackages").then(mod => mod.BusinessSetupPackages));



const page = () => {
  return (
    <>
      <div className="min-h-screen w-full">
        <Navbar />
        <HeroAboutScrollTransition />
        <Schedule />
        <ImageSection />
        <BusinessServiceTransiton />
        <GoldenVisaBanner />
        <LicenseSetupPage />
        <BusinessSetupPackages />
        <FounderSection />
        <BusinessDestination />
        <Gallery />
        <WhereAvailableSection />
        <FAQSection />
        <GetInTouch />
        <SocialMediaCards />
        <Footer />
      </div>
    </>
  );
};

export default page;
