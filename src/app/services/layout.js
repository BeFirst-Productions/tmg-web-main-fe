import { buildMetadata } from "@/lib/seo";

const seo = {
  title: "Business setup services in Dubai,UAE  | tmg global uae",
  description:
    "Explore tmg global’s complete range of business setup services in Dubai, including mainland & free zone company formation, visa services, pro support, document clearing, banking assistance, and government approvals",
  keywords: [
    "business setup services dubai",
    "uae business setup consultants",
    "company formation services dubai",
    "mainland business setup uae",
    "free zone license dubai",
    "pro services dubai",
    "visa services uae",
    "tmg global services",
  ],
  ogTitle: "Business setup services in Dubai,UAE  | tmg global uae",
  ogDescription:
    "Discover tmg global’s full suite of business setup services in Dubai, offering expert company formation, visa processing, document clearing, and government liaison support.",
  ogImage: "/assets/logo/TMG-Global-Services-LLC.png",
  ogImageAlt: "Business setup and consultancy support in Dubai",
  canonicalUrl: "https://tmgdubai.ae/services",
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
  path: "/services",
});

const OrganizationSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "TMG Global LLC",
  alternateName: "Thameem Management Group Global LLC",
  logo: "https://tmgdubai.ae/assets/logo/TMG-Global-Services-LLC.png",
  url: "https://tmgdubai.ae/services",
  telephone: "+971545267777",
  email: "info@tmgdubai.ae",
  description:
    "Tmg global llc offers complete uae business setup services including mainland company formation, free zone licenses, visa services, pro support, document clearing, attestation, corporate banking, and government approvals in Dubai.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Al Twar Centre, Al Barsha Mall, Madina Mall, Al Garhoud",
    addressLocality: "Dubai",
    addressRegion: "Dubai",
    postalCode: "00000",
    addressCountry: "AE",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 25.276987,
    longitude: 55.296249,
  },
  areaServed: {
    "@type": "Place",
    name: "Dubai, United Arab Emirates",
  },
  openingHours: "Mo-Sa 09:00-18:00",
  serviceType: [
    "Mainland Company Formation",
    "Free Zone Business Setup",
    "Offshore Company Formation",
    "PRO Services",
    "Visa Services",
    "Document Clearing",
    "Attestation Services",
    "Corporate Bank Account Assistance",
    "Trademark Registration",
    "Insurance & VAT Services",
    "Legal Translation",
    "ISO Certification",
  ],
  sameAs: [
    "https://www.facebook.com/tmgdubai",
    "https://www.instagram.com/tmgdubai",
    "https://www.linkedin.com/company/tmgglobaluae",
  ],
};

export default function ServicesLayout({ children }) {
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
