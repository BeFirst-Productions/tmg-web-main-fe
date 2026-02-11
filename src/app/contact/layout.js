import { buildMetadata } from "@/lib/seo";

const seo = {
  metaTitle: "Best Business Setup Consultants in Dubai - Contact TMG Global llc",
  metaDescription:
    "get in touch with tmg global llc - leading business setup consultants in dubai. visit our office or call 054 526 7777 for expert uae business support.",
  keywords: [
    "best business setup consultants in dubai",
    "contact tmg global llc",
    "uae business setup support",
    "company formation consultants dubai",
    "business services dubai"
  ],
  ogTitle:
    "Best Business Setup Consultants in Dubai - Contact TMG Global llc",
  ogDescription:
    "get in touch with tmg global llc - leading business setup consultants in dubai. visit our office or call 0545267777 for expert uae business support.",
  ogImage: "assets/logo/TMG-Global-Services-LLC.png",
  ogImageAlt: "best business setup consultants in dubai",
  canonicalUrl: "https://tmgdubai.ae/contact/",
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
  path: "/contact",
});


const ContactSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "TMG Global LLC",
  "alternateName": "Thameem Management Group Global LLC",
  "image": "https://tmgdubai.ae/assets/logo/TMG-Global-Services-LLC.png",
  "url": "https://tmgdubai.com/contact",
  "telephone": "+971545267777",
  "email": "info@tmgdubai.ae",
  "description":
    " get in touch with tmg global llc — leading business setup consultants in dubai. visit our office or call 054 526 7777 for expert uae business support.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Al Twar Centre, Al Barsha Mall, Madina Mall, Al Garhoud",
    "addressLocality": "Dubai",
    "addressRegion": "Dubai",
    "postalCode": "00000",
    "addressCountry": "AE"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 25.276987,
    "longitude": 55.296249
  },
  "areaServed": {
    "@type": "Place",
    "name": "Dubai, United Arab Emirates"
  },
  "openingHours": "Mo-Sa 09:00-18:00",
  "sameAs": [
    "https://www.facebook.com/tmgdubai",
    "https://www.instagram.com/tmgdubai",
    "https://www.linkedin.com/company/tmgglobaluae"
  ]
};


export default function ContactLayout({ children }) {
  return (
    <>
  
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(ContactSchema),
        }}
      />
      
      {children}
    </>
  );
}
