
import { buildMetadata } from "@/lib/seo";


const seo = {
  metaTitle: "Business Setup Services in Dubai FAQ | TMG Global Services LLC",
  metaDescription:
    "Find answers about business setup services in Dubai. TMG Global Services LLC explains company formation, PRO support, Golden Visa, bank account opening, document attestation, and more.",
  keywords: [
    "business setup services in Dubai FAQ",
    "Dubai business setup questions",
    "company formation UAE",
    "business setup Dubai",
    "TMG Global FAQ",
    "PRO services UAE",
    "Golden Visa Dubai",
    "bank account opening UAE",
    "document attestation Dubai"
  ],
  ogTitle: "Business Setup Services in Dubai FAQ | TMG Global Services LLC",
  ogDescription:
    "Find answers about business setup services in Dubai. TMG Global Services LLC explains company formation, PRO support, Golden Visa, bank account opening, document attestation, and more.",
  ogImage: "/assets/logo/TMG-Global-Services-LLC.png",
  ogImageAlt: "Business setup services FAQ by TMG Global in Dubai UAE",
  canonicalUrl: "https://tmgdubai.ae/faq/",
  robots: "index, follow",

  twitterCard: "summary_large_image",
  twitterTitle: "Business Setup Services in Dubai FAQ | TMG Global Services LLC",
  twitterDescription:
    "Find answers about business setup services in Dubai with TMG Global Services LLC. Learn about company formation, PRO, Golden Visa, and more.",
  twitterImage: "/assets/images/og-faq-banner.jpg",
  twitterImageAlt: "TMG Global business setup FAQ Dubai UAE",
  twitterSite: "@TMGGlobal",
  twitterCreator: "@TMGGlobal"
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
  path: "/faqs",
  robots: seo.robots,
});


const FAQSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What services does TMG Global provide?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "TMG Global offers end-to-end business solutions in the UAE, including business setup, company formation, visa services, PRO services, Golden Visa, ISO certification, trademarks, virtual office, bank account opening, document attestation, legal translation, insurance, and more."
      }
    },
    {
      "@type": "Question",
      "name": "How can I start a business in Dubai with TMG Global?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You can schedule a consultation with our experts. We guide you through company structure, trade license selection, approvals, visas, and full setup compliance."
      }
    },
    {
      "@type": "Question",
      "name": "What is the difference between Mainland, Freezone, and Offshore company setups?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Mainland companies allow trading in the UAE market, Freezones provide 100% ownership with tax benefits and restricted local trade, and Offshore companies are ideal for asset protection and international operations."
      }
    },
    {
      "@type": "Question",
      "name": "How long does it take to set up a company in Dubai?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The timeline varies by jurisdiction and business activity. Mainland setups typically take 5–15 working days, Freezone setups 1–2 weeks, and Offshore setups 1–5 days."
      }
    },
    {
      "@type": "Question",
      "name": "What is the UAE Golden Visa and who is eligible?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The Golden Visa is a 5- or 10-year long-term residency visa for investors, entrepreneurs, exceptional talents, and outstanding students. Eligibility depends on your investment, business, or professional category."
      }
    },
    {
      "@type": "Question",
      "name": "Do you help with visa and PRO services?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. TMG Global manages visa applications, renewals, cancellations, medical tests, Emirates ID, and all PRO-related government approvals."
      }
    },
    {
      "@type": "Question",
      "name": "How do I get a local sponsor for my Mainland company?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We connect you with verified UAE national sponsors or Local Service Agents (LSA) and help draft legally compliant agreements."
      }
    },
    {
      "@type": "Question",
      "name": "Can you help me open a corporate bank account in the UAE?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We provide bank selection guidance, document preparation, application submission, and liaison with bank officials to increase your chances of approval."
      }
    },
    {
      "@type": "Question",
      "name": "What is the process for ISO certification and trademark registration?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We assist with ISO gap analysis, documentation, audits, and provide complete trademark filing, monitoring, and protection services with UAE authorities."
      }
    },
    {
      "@type": "Question",
      "name": "Do you provide virtual office and Ejari services?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. TMG Global offers prestigious virtual office addresses, mail handling, meeting room access, and Ejari registration for Mainland and Freezone businesses."
      }
    },
    {
      "@type": "Question",
      "name": "How do I liquidate or close my UAE company?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our team manages the entire liquidation process, including audits, creditor settlements, license cancellations, visa closures, and bank account closure."
      }
    },
    {
      "@type": "Question",
      "name": "Can you help with document attestation for the UAE?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely. We handle attestation for educational, personal, and commercial documents through MOFA, embassies, and other authorities."
      }
    },
    {
      "@type": "Question",
      "name": "Do you offer legal translation services?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We provide MOJ-approved certified translations for contracts, certificates, and corporate documents in multiple languages."
      }
    },
    {
      "@type": "Question",
      "name": "What types of insurance and VAT services do you provide?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We offer employee medical insurance, corporate property and liability coverage, VAT registration, filing, compliance checks, and deregistration services."
      }
    },
    {
      "@type": "Question",
      "name": "Can you help with typing, government approvals, and other documentation?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We provide typing services, document submissions, and UAE government approvals for visas, licenses, and other formalities."
      }
    },
    {
      "@type": "Question",
      "name": "Do you assist with medical tests and Emirates ID processing?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We manage medical fitness tests, ID registration, renewals, and all related coordination with the ICA and medical centers."
      }
    },
    {
      "@type": "Question",
      "name": "Is TMG Global only for businesses or can individuals also use your services?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Both. We serve businesses, entrepreneurs, investors, and individuals looking for visas, Golden Visa, document attestation, translation, and Emirates ID services."
      }
    },
    {
      "@type": "Question",
      "name": "Are your services fully compliant with UAE laws?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. TMG Global strictly follows all UAE government regulations, ensuring legal compliance and smooth processing for all services."
      }
    },
    {
      "@type": "Question",
      "name": "How can I contact TMG Global for a consultation?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You can book a consultation via our website, call our Dubai office, or email us. We provide personalized guidance tailored to your needs."
      }
    },
    {
      "@type": "Question",
      "name": "Are your service fees transparent?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. All our service fees are clear, with no hidden costs. We provide detailed quotes before starting any project, ensuring complete transparency."
      }
    }
  ]
};

export default function FaqsLayout({ children }) {
  return (
    <>
 
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQSchema) }}
      />

      {children}
    </>
  );
}
