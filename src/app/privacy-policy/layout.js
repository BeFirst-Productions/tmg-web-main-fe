
import { buildMetadata } from "@/lib/seo";


const seo = {
  metaTitle: "privacy policy | tmg global uae",
  metaDescription:
    "learn how tmg global collects, uses, protects, and manages your personal information in compliance with uae laws. read our complete privacy policy.",
  keywords: [
    "tmg global privacy policy",
    "uae privacy policy",
    "dubai business setup privacy",
    "data protection uae",
    "personal information policy dubai",
    "uae business services privacy",
    "client data security uae",
    "tmg global data usage",
  ],
  ogTitle:
    "tmg global privacy policy | data protection & confidentiality in the uae",
  ogDescription:
    "read tmg global’s privacy policy outlining how personal, financial, and business information is collected, stored, shared, and protected under uae compliance.",
  ogImage: "/assets/logo/TMG-Global-Services-LLC.png",
  ogImageAlt:
    "tmg global services llc privacy protection and data security policies in uae",
  canonicalUrl: "https://tmgdubai.ae/privacy-policy",
};

// ----------------------
// Next.js Metadata
// ----------------------
export const metadata = buildMetadata({
  title: seo.metaTitle,
  description: seo.metaDescription,
  keywords: seo.keywords,
  image: seo.ogImage,
  ogTitle: seo.ogTitle,
  ogDescription: seo.ogDescription,
  ogImageAlt: seo.ogImageAlt,
  canonicalUrl: seo.canonicalUrl,
  path: "/privacy-policy",
});

// ----------------------
// JSON-LD Schema
// ----------------------
const PrivacySchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "TMG Global LLC",
  "alternateName": "Thameem Management Group Global LLC",
  "logo": "https://tmgdubai.ae/assets/logo/TMG-Global-Services-LLC.png",
  "url": "https://tmgdubai.ae/privacy-policy",
  "telephone": "+971545267777",
  "email": "info@tmgdubai.ae",
  "description":
    "read tmg global llc's privacy policy — learn how your personal data is collected, stored, shared, and protected under uae laws and compliance guidelines.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Al Twar Centre, Al Barsha Mall, Madina Mall, Al Garhoud",
    "addressLocality": "Dubai",
    "addressRegion": "Dubai",
    "postalCode": "00000",
    "addressCountry": "AE",
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 25.276987,
    "longitude": 55.296249,
  },
  "areaServed": {
    "@type": "Place",
    "name": "Dubai, United Arab Emirates",
  },
  "openingHours": "Mo-Sa 09:00-18:00",
  "sameAs": [
    "https://www.facebook.com/tmgdubai",
    "https://www.instagram.com/tmgdubai",
    "https://www.linkedin.com/company/tmgglobaluae",
  ],
};


export default function PrivacyLayout({ children }) {
  return (
    <>
   
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(PrivacySchema) }}
      />

      {children}
    </>
  );
}
