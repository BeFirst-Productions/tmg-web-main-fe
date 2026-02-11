import React from "react";
import BannerSection from "@/components/banner/Banner";
import Footer from "@/components/footer/Footer";
import { Navbar } from "@/components/navbar/Navbar";


import FreezoneDetails from "@/components/freezone/FreezoneDetails";
import FreezoneBusinessFormation from "@/components/freezone/FreezoneBusinessFormation";
import FreezoneSetup from "@/components/freezone/FreezoneSetup";
import FreezoneFAQ from "@/components/freezone/FreezoneFAQ";
import FreezoneOpportunities from "@/components/freezone/FreezoneOpportunities";

const page = () => {
  return (
    <>
      <div className="w-full h-screen">
        <Navbar />
        <BannerSection
          title="Freezone Business"
          breadcrumbs={[
            { name: "Home", path: "/" },
            {
              name: "Freezone",
              path: "/freezone-company-formation-dubai",
            },
          ]}
        />
        <FreezoneDetails/>
        <FreezoneOpportunities/>
        <FreezoneSetup/>
<FreezoneBusinessFormation/>
<FreezoneFAQ/>

        <Footer />
      </div>
    </>
  );
};

export default page;
