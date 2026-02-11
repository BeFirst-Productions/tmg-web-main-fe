// src/app/service/[slug]/page.js
import React from "react";
import { ServiceDetails } from "@/data/ServiceDetails";
import { buildMetadata } from "@/lib/seo";
import { Navbar } from "@/components/navbar/Navbar";
import dynamicImport  from "next/dynamic";

const BannerSection = dynamicImport (() => import("@/components/banner/Banner"));
const BusinessBanner = dynamicImport (() => import("@/components/banner/BusinessBanner"));
const Footer = dynamicImport (() => import("@/components/footer/Footer"));
const AdvantageSection = dynamicImport (() => import("@/components/serviceDetails/AdvantageSection"));
const AnimatedTabs = dynamicImport (() => import("@/components/serviceDetails/AnimatedTabs"));
const BusinessSection = dynamicImport (() => import("@/components/serviceDetails/BusinessSection "));
const BusinessSetupComponent = dynamicImport (() => import("@/components/serviceDetails/BusinessSetupComponent"));
const FAQSection = dynamicImport (() => import("@/components/serviceDetails/FaqSection"));
const ServiceClientModalManager = dynamicImport (() => import("@/components/common/ServiceClientModalManager"));


export const dynamic = "force-static";


export async function generateStaticParams() {
  const uniqueSlugs = [...new Set((ServiceDetails || []).map((s) => s.slug))];
  return uniqueSlugs.map((slug) => ({ slug }));
}


export async function generateMetadata({ params }) {

  const { slug } = await params;
  const service = (ServiceDetails || []).find((s) => s.slug === slug);

  if (!service) {
    return buildMetadata({
      title: "Service Not Found",
      description: "The requested service could not be found.",
      path: `/service/${slug}`,
    });
  }


  const seo = service.seo || {};


  return buildMetadata({
    title: seo.metaTitle || service.title,
    description: seo.metaDescription,
    path: `/service/${slug}`,
    keywords: seo.keywords || [],
    image: seo.ogImage || service.image,
    ogTitle: seo.ogTitle,
    ogDescription: seo.ogDescription,
    ogImageAlt: seo.ogImageAlt,
    canonicalUrl: seo.canonicalUrl,
    robots: seo.robots || { index: true, follow: true },
    type: "article",
  });
}


export default async function ServicePage({ params }) {

  const { slug } = await params;
  const service = (ServiceDetails || []).find((s) => s.slug === slug);

  if (!service) {
    return (
      <div className="min-h-screen w-full">
        <Navbar />
        <BannerSection
          title="Service Not Found"
          breadcrumbs={[
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
          ]}
        />
        <div className="flex items-center justify-center py-20">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Service Not Found
            </h2>
            <p className="text-gray-600">
              The service you are looking for does not exist.
            </p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full">
      <Navbar />
      <BannerSection
        title={service.title}
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: service.title, path: `/service/${service.slug}` },
        ]}
      />
      <AnimatedTabs
        data={service.data}
        heading={service.heading}
        image={service.image}
      />
      <BusinessBanner bannerData={service.banner} />

      {service.sections.map((section) => {
        if (section.id === "section1")
          return <BusinessSection key={section.id} section={section} />;
        if (section.id === "section2")
          return <BusinessSetupComponent key={section.id} section={section} />;
        if (section.id === "section3")
          return <AdvantageSection key={section.id} section={section} />;
        if (section.id === "section4")
          return <FAQSection key={section.id} section={section} />;
        return null;
      })}

      <ServiceClientModalManager />
      <Footer />
    </div>
  );
}