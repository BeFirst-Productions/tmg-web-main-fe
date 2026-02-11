
import { buildMetadata } from "@/lib/seo";


const seo = {
  metaTitle:
    "TMG Global Gallery | UAE Business Setup Moments & Achievements",
  metaDescription:
    "explore the tmg global gallery featuring our business setup projects, client success stories, workplace moments, events, and achievements across the uae.",
  keywords: [
    "tmg global gallery",
    "business setup gallery dubai",
    "tmg global photos",
    "uae business setup projects",
    "client success stories uae",
    "dubai business consultancy gallery",
    "company formation highlights uae",
    "tmg global events",
  ],
  ogTitle:
    "tmg global gallery | uae business setup projects, events & achievements",
  ogDescription:
    "view photos of tmg global’s company formation success stories, events, team activities, and client interactions showcasing our services across the uae.",
  ogImage: "/assets/logo/TMG-Global-Services-LLC.png",
  ogImageAlt:
    "tmg global gallery showcasing business setup services, events and client interactions in dubai",
  canonicalUrl: "https://tmgdubai.ae/gallery/",
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
  path: "/gallery",
});


const GallerySchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "TMG Global LLC",
  "alternateName": "Thameem Management Group Global LLC",
  "logo": "https://tmgdubai.ae/assets/logo/TMG-Global-Services-LLC.png",
  "url": "https://tmgdubai.ae/gallery",
  "telephone": "+971545267777",
  "email": "info@tmgdubai.ae",
  "description":
    "explore the tmg global llc gallery featuring uae business setup projects, team moments, events, client success stories, and achievements across dubai.",
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


export default function GalleryLayout({ children }) {
  return (
    <>
 
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(GallerySchema) }}
      />

      {children}
    </>
  );
}
