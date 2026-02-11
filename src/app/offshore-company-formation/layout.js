
import { buildMetadata } from "@/lib/seo";


const seo = {
  metaTitle: "Offshore Company Formation in Dubai, UAE | TMG Global LLC",
  metaDescription:
    "TMG Global LLC offers expert offshore company formation in Dubai, UAE with complete privacy, tax benefits, and legal compliance. Start your offshore business setup quickly and securely today.",
  keywords: [
    "offshore company formation in dubai, uae",
    "offshore business setup dubai",
    "offshore company registration uae",
    "dubai offshore license services",
    "business setup consultants dubai"
  ],
  ogTitle: "Offshore Company Formation in Dubai, UAE | TMG Global LLC",
  ogDescription:
    "Start your offshore company formation in Dubai, UAE with TMG Global LLC — trusted experts providing fast registration, compliance, and business setup services for global investors.",
  ogImage: "assets/images/offshore/offshore-company-formation.png",
  ogImageAlt: "offshore company formation consultants in dubai uae",
  canonicalUrl: "https://tmgdubai.ae/offshore-company-formation",
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
  path: "/offshore-company-formation",
});


const OffshoreServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Offshore Company Formation in Dubai, UAE",
  "name": "Offshore Company Formation in Dubai, UAE",
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
  "description": "TMG Global LLC provides professional offshore company formation in Dubai, UAE, assisting investors with company registration, banking, documentation, and compliance while ensuring full confidentiality and global accessibility.",
  "serviceOutput": "legally registered offshore company in dubai, uae",
  "termsOfService": "https://tmgdubai.ae/terms-of-service",
  "offers": {
    "@type": "Offer",
    "url": "https://tmgdubai.ae/offshore-company-formation",
    "priceCurrency": "AED",
    "availability": "https://schema.org/InStock"
  }
};


export default function OffshoreLayout({ children }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(OffshoreServiceSchema) }}
      />

      {children}
    </>
  );
}
