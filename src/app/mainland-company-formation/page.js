import React from "react";
import BannerSection from "@/components/banner/Banner";
import { Navbar } from "@/components/navbar/Navbar";
import { mainlandData } from "@/data/MainlandData";
import dynamic from "next/dynamic";

const ScheduleMeetingContentCard = dynamic(() => import("@/components/common/ScheduleMeetingContentCard"));
const Footer = dynamic(() => import("@/components/footer/Footer"));
const MainlandDetails = dynamic(() => import("@/components/mainland/MainlandDetails"));
const MainlandLicenseSection = dynamic(() => import("@/components/mainland/MainlandLicenseSection"));
const MainlandSetup = dynamic(() => import("@/components/mainland/MainlandSetup"));
const SimplifyProcessSection = dynamic(() => import("@/components/mainland/SimplifyProcessSection"));
const MainlandCompanyFormation = dynamic(() => import("@/components/mainland/MainlandCompanyFormation"));


const page = () => {
  return (
    <>
      <div className="w-full h-screen">
        <Navbar />
        <BannerSection
          title="UAE Mainland Business Setup Services"
          breadcrumbs={[
            { name: "Home", path: "/" },
            {
              name: "Mainland",
              path: "/mainland-company-formation",
            },
          ]}
        />
        <MainlandDetails />
        <MainlandLicenseSection />
        <MainlandSetup />
        <SimplifyProcessSection />
        <MainlandCompanyFormation />
        <ScheduleMeetingContentCard data={mainlandData} />
        <Footer />
      </div>
    </>
  );
};

export default page;
