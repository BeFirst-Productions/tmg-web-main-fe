import dynamic from "next/dynamic";
import { Navbar } from "@/components/navbar/Navbar";

const Footer = dynamic(() => import("@/components/footer/Footer"));
const BannerSection = dynamic(() => import("@/components/banner/Banner"));
const PrivacyPolicy = dynamic(() => import("@/components/privacyPolicy/PrivacyPolicy"));

import React from "react";

const page = () => {
  return (
    <>
      <div className="min-h-screen w-full">
        <Navbar />
        <BannerSection
          title="Privacy Policy"
          breadcrumbs={[
            { name: "Home", path: "/" },
            { name: "Privacy Policy", path: "/privacy-policy" }
          ]} />
        <PrivacyPolicy />
        {/* <SmallBanner /> */}
        <Footer />
      </div>
    </>
  );
};

export default page;
