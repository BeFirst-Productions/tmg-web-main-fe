
import React from "react";
import { Navbar } from "@/components/navbar/Navbar";
import { LicenseDetails } from "@/data/LicenseData";
import { buildMetadata } from "@/lib/seo";

import BannerSection from "@/components/banner/Banner";
import Footer from "@/components/footer/Footer";
import BusinessJourneySection from "@/components/license/BusinessJourneySection";
import LicenseDetailSection from "@/components/license/LicenseDetailSection";
import LicenseFAQSection from "@/components/license/LicenseFaqSection";

export const dynamic = "force-static";


export async function generateStaticParams() {
  const uniqueSlugs = [...new Set((LicenseDetails || []).map((lic) => lic.slug))];
  return uniqueSlugs.map((slug) => ({ slug }));
}


export async function generateMetadata({ params }) {

  const { slug } = await params;
  const license = (LicenseDetails || []).find((l) => l.slug === slug);

  if (!license) {
    return buildMetadata({
      title: "License Not Found",
      description: "The requested license could not be found.",
      path: `/license/${slug}`,
    });
  }

 
  const seo = license.seo || {};

  const title = seo.metaTitle || (license?.title ? `${license.title} | TMG Global` : "License Details | TMG Global");
  const description = seo.metaDescription || (license?.description?.replace(/\s+/g, " ")?.slice(0, 155)) || "Explore this license offering from TMG Global in the UAE.";
  const image = seo.ogImage || license?.imageUrl || undefined;

  return buildMetadata({
    title,
    description,
    path: `/license/${slug}`,
    image,
    keywords: seo.keywords || [],
    ogTitle: seo.ogTitle,
    ogDescription: seo.ogDescription,
    ogImageAlt: seo.ogImageAlt,
    canonicalUrl: seo.canonicalUrl,
    robots: seo.robots || { index: true, follow: true },
    type: "article",
  });
}


export default async function LicensePage({ params }) {

  const { slug } = await params;
  const license = (LicenseDetails || []).find((l) => l.slug === slug);

  if (!license) {
    return (
      <div className="min-h-screen w-full">
        <Navbar />
        <BannerSection
          title="License Not Found"
          breadcrumbs={[
            { name: "Home", path: "/" },
            { name: "License", path: "/license" },
          ]}
        />
        <div className="flex items-center justify-center py-20">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">License Details Not Found</h2>
            <p className="text-gray-600">The License you are looking for does not exist.</p>
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
        title={license.title}
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: license.title, path: `/license/${license.slug}` },
        ]}
      />
      <LicenseDetailSection license={license} />
      <BusinessJourneySection license={license} />
      <LicenseFAQSection license={license} />
      <Footer />
    </div>
  );
}