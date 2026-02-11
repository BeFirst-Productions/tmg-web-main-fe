import { buildMetadata } from "@/lib/seo";

const seo = {
  metaTitle: "Best business setup company in dubai | tmg global services llc",
  metaDescription:
    "tmg global services llc is the best business setup company in dubai, offering expert solutions for company formation, document clearing, and uae business consulting.",
  keywords: [
    "best business setup company in dubai",
    "business setup company in dubai",
    "tmg global services llc",
    "thameem aboobacker",
    "document clearing services dubai",
    "uae business consultants",
    "company formation experts dubai",
    "about tmg global",
  ],
  ogTitle:
    "Best business setup company in dubai | trusted uae business setup partner",
  ogDescription:
    "Discover why tmg global is recognized as the best business setup company in dubai, helping entrepreneurs establish and grow their ventures across the uae.",
  ogImage: "/images/about-banner.jpg",
  ogImageAlt:
    "tmg global services llc team providing professional business setup services in dubai",
  canonicalUrl: "https://tmgdubai.ae/about-us/",
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
  path: "/about-us",
});

// JSON-LD schema 
const OrganizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "TMG Global Services LLC",
  "alternateName": "Thameem Management Group Global LLC",
  "url": "https://tmgdubai.ae",
    "logo": "/assets/logo/TMG-Global-Services-LLC.png",
  "description":
    "TMG Global Services LLC is the best business setup company in Dubai, offering expert business formation, PRO, and document clearing services for entrepreneurs and corporations across the UAE.",
  "founder": {
    "@type": "Person",
    "name": "Thameem Aboobacker",
  },
  "slogan": "Best Business Setup Company in Dubai",
  "address": {
    "@type": "PostalAddress",
    "streetAddress":
      "Al Twar Centre, Al Barsha Mall, Madina Mall, Al Garhoud",
    "addressLocality": "Dubai",
    "addressRegion": "Dubai",
    "postalCode": "00000",
    "addressCountry": "AE",
  },
  "telephone": "+971545267777",
  "email": "info@tmgdubai.ae",
  "sameAs": [
    "https://www.facebook.com/tmgdubai",
    "https://www.instagram.com/tmgglobaluae",
    "https://www.linkedin.com/company/tmg-global-llc",
  ],
  "knowsAbout": [
    "best business setup company in dubai",
    "business setup services uae",
    "document clearing dubai",
    "company formation experts dubai",
    "uae business consultancy",
  ],
  "areaServed": {
    "@type": "Place",
    "name": "United Arab Emirates",
  },
};

export default function AboutLayout({ children }) {
  return (
    <>
    
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(OrganizationSchema),
        }}
      />


      {children}
    </>
  );
}
