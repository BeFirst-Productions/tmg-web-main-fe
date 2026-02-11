
import { buildMetadata } from "@/lib/seo";

const seo = {
  metaTitle: "tmg global blogs | uae business setup news, guides & updates",
  metaDescription:
    "explore expert blogs from tmg global covering uae business setup, company formation, visas, pro services, free zone guides, legal updates, and industry insights.",
  keywords: [
    "tmg global blogs",
    "uae business setup blogs",
    "dubai company formation news",
    "business setup guides uae",
    "pro services articles dubai",
    "uae visa updates",
    "free zone business setup blogs",
    "tmg global articles",
  ],
  ogTitle:
    "tmg global blogs | latest uae business setup insights & updates",
  ogDescription:
    "read the latest insights on uae business setup, free zone licenses, visa processing, pro services, and company formation trends by tmg global experts.",
  ogImage: "/images/blogs-banner.jpg",
  ogImageAlt:
    "tmg global blog page featuring uae business setup guides and articles",
  canonicalUrl: "https://tmgdubai.ae/blogs/",
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
  path: "/blogs",
});


const OrganizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "TMG Global Services LLC",
  "alternateName": "Thameem Management Group Global LLC",
  "url": "https://tmgdubai.ae",
  "logo": "https://tmgdubai.com/images/logo.png",
  "description":
    "TMG Global Services LLC is the best business setup company in Dubai, offering expert business formation, PRO, and document clearing services for entrepreneurs and corporations across the UAE.",
  "founder": {
    "@type": "Person",
    "name": "Thameem Aboobacker",
  },
  "slogan": "Best Business Setup Company in Dubai",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Al Twar Centre, Al Barsha Mall, Madina Mall, Al Garhoud",
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


const BlogSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  "mainEntityOfPage": "https://tmgdubai.ae/blogs/",
  "name": "TMG Global Blogs",
  "headline": "TMG Global Blogs – UAE Business Setup News & Guides",
  "description":
    "Explore expert blogs from TMG Global covering UAE business setup, company formation, visa services, PRO services, free zone guides, legal updates, and industry insights.",
  "publisher": {
    "@type": "Organization",
    "name": "TMG Global LLC",
    "alternateName": "Thameem Management Group Global LLC",
    "logo": {
      "@type": "ImageObject",
      "url": "https://tmgdubai.ae/assets/logo/TMG-Global-Services-LLC.png",
      "width": 300,
      "height": 80,
    },
    "url": "https://tmgdubai.ae",
  },
  "image": "https://tmgdubai.ae/assets/logo/TMG-Global-Services-LLC.png",
  "inLanguage": "en",
  "url": "https://tmgdubai.ae/blogs/",
  "author": {
    "@type": "Organization",
    "name": "TMG Global LLC",
  },
};

export default function BlogsLayout({ children }) {
  return (
    <>
   
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(OrganizationSchema) }}
      />

    
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(BlogSchema) }}
      />

      {children}
    </>
  );
}
