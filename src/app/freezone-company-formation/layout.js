
import { buildMetadata } from "@/lib/seo";


const seo = {
  metaTitle:
    "Freezone Company Formation Dubai, UAE | 100% Ownership Setup - TMG Global LLC",
  metaDescription:
    "TMG Global LLC provides expert assistance for freezone company formation Dubai, UAE. Enjoy 100% ownership, tax benefits, and quick licensing with our professional business setup consultants in Dubai.",
  keywords: [
    "freezone company formation Dubai, UAE",
    "freezone business setup Dubai",
    "Dubai freezone license",
    "company formation UAE freezone",
    "freezone setup consultants in Dubai",
  ],
  ogTitle: "Freezone Company Formation Dubai, UAE | TMG Global LLC",
  ogDescription:
    "Start your freezone company formation Dubai, UAE with TMG Global LLC — experts in business setup, licensing, and investor visa services across UAE freezones.",
  ogImage: "assets/images/freezone/freezone-company-formation.png",
  ogImageAlt: "Freezone company formation consultants in Dubai UAE",
  canonicalUrl:
    "https://tmgdubai.ae/freezone-company-formation",
};


export const metadata = buildMetadata({
  title: seo.metaTitle,
  description: seo.metaDescription,
  keywords: seo.keywords,
  image: seo.ogImage,
  ogTitle: seo.ogTitle,
  ogDescription: seo.ogDescription,
  ogImageAlt: seo.ogImageAlt,
  canonicalUrl: seo.canonicalUrl,
  path: "/freezone-company-formation",
});


const FreezoneServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Freezone Company Formation Dubai, UAE",
  "name": "Freezone Company Formation Dubai, UAE",
  "provider": {
    "@type": "Organization",
    "name": "TMG Global LLC",
    "url": "https://tmgdubai.ae/",
    "logo": "https://tmgdubai.ae/assets/logo/TMG-Global-Services-LLC.png",
    "email": "info@tmgdubai.ae",
    "telephone": "+971545267777",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Al Twar Centre, Al Barsha Mall, Madina Mall, Al Garhoud",
      "addressLocality": "Dubai",
      "addressRegion": "Dubai",
      "addressCountry": "AE"
    }
  },
  "areaServed": {
    "@type": "Place",
    "name": "Dubai, United Arab Emirates"
  },
  "description": "TMG Global LLC offers professional freezone company formation Dubai, UAE services, assisting entrepreneurs with 100% ownership setups, trade licenses, investor visas, and all government approvals for UAE freezones.",
  "serviceOutput": "Registered and licensed freezone company in Dubai, UAE",
  "termsOfService": "https://tmgdubai.ae/terms-of-service",
  "offers": {
    "@type": "Offer",
    "url": "https://tmgdubai.ae/freezone-company-formation",
    "priceCurrency": "AED",
    "availability": "https://schema.org/InStock"
  }
};


export default function FreezoneLayout({ children }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FreezoneServiceSchema) }}
      />

      {children}
    </>
  );
}
