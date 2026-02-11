"use client";
import BannerSection from "@/components/banner/Banner";
import Blog from "@/components/blog/Blog";
import ConsultationModal from "@/components/common/ConsultationModal";
import SmallBanner from "@/components/common/SmallBanner";
import Footer from "@/components/footer/Footer";
import { Navbar } from "@/components/navbar/Navbar";
import React, { useState } from "react";

const Page = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="w-full h-screen">
        <Navbar />
        <BannerSection
          title="Blogs"
          breadcrumbs={[
            { name: "Home", path: "/" },
            { name: "Blogs", path: "/blogs" },
          ]}
        />
        <Blog />
        <SmallBanner onOpenModal={() => setShowModal(true)} />
        <Footer />
        <ConsultationModal isOpen={showModal} setIsOpen={setShowModal} />
      </div>
    </>
  );
};

export default Page;
