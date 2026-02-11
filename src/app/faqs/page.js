import BannerSection from "@/components/banner/Banner";
import Blog from "@/components/blog/Blog";
import SmallBanner from "@/components/common/SmallBanner";
import FAQ from "@/components/faqs/Faq";
import Footer from "@/components/footer/Footer";
import { Navbar } from "@/components/navbar/Navbar";
import React from "react";

const Page = () => {
  return (
    <>
      <div className="w-full h-screen">
        <Navbar />
        <BannerSection
          title="FAQ'S"
          breadcrumbs={[
            { name: "Home", path: "/" },
            { name: "FAQ'S", path: "/FAQ'S" },
          ]}
        />
        <FAQ/>
        <Footer />
      </div>
    </>
  );
};

export default Page;
