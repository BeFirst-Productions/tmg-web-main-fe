import BannerSection from "@/components/banner/Banner";
import { Navbar } from "@/components/navbar/Navbar";
import React from "react";
import dynamic from "next/dynamic";

const ContactUs = dynamic(() => import("@/components/contact/Contact"));
const Map = dynamic(() => import("@/components/contact/Map"));
const Footer = dynamic(() => import("@/components/footer/Footer"));

const Page = () => {
  return (
    <>
      <div className="min-h-screen w-full">

        <Navbar />
        <BannerSection
          title="Contact"
          breadcrumbs={[
            { name: "Home", path: "/" },
            { name: "Contact", path: "/contact" },
          ]}
        />
        <ContactUs />
        <Map />
        <Footer />


      </div>
    </>
  );
};

export default Page;
