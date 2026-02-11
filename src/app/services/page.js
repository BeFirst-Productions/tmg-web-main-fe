"use client";
import BannerSection from "@/components/banner/Banner";
import { Navbar } from "@/components/navbar/Navbar";
import React, { useState } from "react";
import dynamicImport  from "next/dynamic";

const ConsultationModal = dynamicImport (() => import("@/components/common/ConsultationModal"));
const SmallBanner = dynamicImport (() => import("@/components/common/SmallBanner"));
const Footer = dynamicImport (() => import("@/components/footer/Footer"));
const Services = dynamicImport (() => import("@/components/services/Services"));

export const dynamic = "force-static";

const Page = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="min-h-screen w-full">
        <Navbar />
        <BannerSection
          title="Services"
          breadcrumbs={[
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
          ]}
        />
        <Services />
        <SmallBanner onOpenModal={() => setShowModal(true)} />
        <Footer />
        <ConsultationModal isOpen={showModal} setIsOpen={setShowModal} />
      </div>
    </>
  );
};

export default Page;
