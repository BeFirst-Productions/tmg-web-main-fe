
import { buildMetadata } from "@/lib/seo";


const seo = {
  metaTitle:
    "Mainland Company Formation Dubai, UAE | Business Setup Experts - TMG Global LLC",
  metaDescription:
    "TMG Global LLC specializes in mainland company formation Dubai, UAE. Get expert support for trade license, business registration, and government approvals to start your UAE mainland business easily.",
  keywords: [
    "mainland company formation Dubai, UAE",
    "mainland business setup Dubai",
    "company formation in Dubai mainland",
    "Dubai mainland license services",
    "business setup consultants in Dubai",
  ],
  ogTitle: "Mainland Company Formation Dubai, UAE | TMG Global LLC",
  ogDescription:
    "Start your mainland company formation Dubai, UAE with TMG Global LLC — trusted consultants for business setup, licensing, and government approvals in the UAE.",
  ogImage:
    "assets/images/mainland/mainland-company-formation.png",
  ogImageAlt: "Mainland company formation consultants in Dubai UAE",
  canonicalUrl:
    "https://tmgdubai.ae/mainland-company-formation",

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
  path: "/mainland-company-formation",
});


const MainlandServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Mainland Company Formation Dubai, UAE",
  "name": "Mainland Company Formation Dubai, UAE",
  "provider": {
    "@type": "Organization",
    "name": "TMG Global LLC",
    "url": "https://tmgdubai.ae/",
    "logo": "https://tmgdubai.ae/assets/logo/TMG-Global-Services-LLC.png",
    "email": "info@tmgdubai.ae",
    "telephone": "+971545267777",
    "address": {
      "@type": "PostalAddress",
      "streetAddress":
        "Al Twar Centre, Al Barsha Mall, Madina Mall, Al Garhoud",
      "addressLocality": "Dubai",
      "addressRegion": "Dubai",
      "addressCountry": "AE",
    },
  },
  "areaServed": {
    "@type": "Place",
    "name": "Dubai, United Arab Emirates",
  },
  "description":
    "TMG Global LLC offers professional mainland company formation Dubai, UAE services, helping investors with trade license registration, business setup, and documentation for smooth UAE mainland business establishment.",
  "serviceOutput":
    "Registered mainland company with trade license in Dubai, UAE",
  "termsOfService":
    "https://tmgdubai.ae/terms-of-service",
  "offers": {
    "@type": "Offer",
    "url": "https://tmgdubai.ae/mainland-company-formation",
    "priceCurrency": "AED",
    "availability": "https://schema.org/InStock",
  },
};


export default function MainlandLayout({ children }) {
  return (
    <>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(MainlandServiceSchema),
        }}
      />

      {children}
    </>
  );
}
