import dynamic from "next/dynamic";
import { Navbar } from "@/components/navbar/Navbar";

const TermsOfService = dynamic(() => import("@/components/termsOfService/Terms"));
const BannerSection = dynamic(() => import("@/components/banner/Banner"));
const Footer = dynamic(() => import("@/components/footer/Footer"));

import React from "react";

const page = () => {
  return (
    <>
      <div className="min-h-screen w-full">
        <Navbar />
        <BannerSection
          title="Terms Of Service"
          breadcrumbs={[
            { name: "Home", path: "/" },
            { name: "Terms Of Service", path: "/terms-of-service" }
          ]} />
        <TermsOfService />
        <Footer />
      </div>
    </>
  );
};

export default page;
