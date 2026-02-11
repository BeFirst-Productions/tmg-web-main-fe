import BannerSection from "@/components/banner/Banner";
import ScheduleMeetingContentCard from "@/components/common/ScheduleMeetingContentCard";
import Footer from "@/components/footer/Footer";
import { Navbar } from "@/components/navbar/Navbar";
import OffshoreDetails from "@/components/offshore/OffshoreDetails";
import OffshoreSetup from "@/components/offshore/OffshoreSetup";
import OffshoreSimplifiesSetup from "@/components/offshore/OffshoreSimplifiesSetup";
import OffshoreCompanyStructure from "@/components/offshore/OffshoreStructure";
import { offshoreData } from "@/data/OffshoreData";
import React from "react";
import OffshoreSolutions from "@/components/offshore/OffshoreSolutions";

const page = () => {
  return (
    <>
      <div className="w-full h-screen">
        <Navbar />
        <BannerSection
          title="UAE Offshore Company Formation"
          breadcrumbs={[
            { name: "Home", path: "/" },
            {
              name: "Offshore",
              path: "/offshore-company-formation-dubai",
            },
          ]}
        />

        <OffshoreDetails />
        <OffshoreSolutions/>
        <OffshoreCompanyStructure />
        <OffshoreSetup />
        <OffshoreSimplifiesSetup />
        <ScheduleMeetingContentCard data={offshoreData} />
        <Footer />
      </div>
    </>
  );
};

export default page;
