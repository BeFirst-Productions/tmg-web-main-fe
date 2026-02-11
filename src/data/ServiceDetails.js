import { Lightbulb, FileText, Plus, Rocket } from "lucide-react";

export const processSteps = [
  { icon: Lightbulb, label: "Idea" },
  { icon: FileText, label: "Planning" },
  { icon: Plus, label: "License" },
  { icon: Rocket, label: "Launch" },
];

export const ServiceDetails = [
  {
    id: 1,
    slug: "business-setup-in-dubai-uae",
    title: "BUSINESS SETUP IN DUBAI, UAE ",
    heading: "Start Your UAE Venture With\nExpert Business Solutions",
    image: "/assets/images/services/business-setup-in-dubai-uae.png",

  seo: {
    metaTitle: "Business Setup in Dubai, UAE | TMG Global LLC",
    metaDescription:
      "TMG Global LLC offers the best business setup in Dubai, UAE. We provide complete company formation, trade license, PRO, and visa services to make your business setup in Dubai simple and successful.",
    keywords: [
      "business setup in Dubai, UAE",
      "company formation in Dubai",
      "business setup consultants in Dubai",
      "start a business in Dubai",
      "Dubai business setup services"
    ],
    ogTitle: "Business Setup in Dubai, UAE | TMG Global LLC",
    ogDescription:
      "Start your business setup in Dubai, UAE with TMG Global LLC — expert consultants offering complete company formation, trade license registration, and PRO services across the UAE.",
    ogImage: "/assets/images/services/business-setup-in-dubai-uae.png",
    ogImageAlt: "Business setup consultants in Dubai UAE",
    canonicalUrl: "https://tmgdubai.ae/service/business-setup-in-dubai-uae",
    robots: { index: true, follow: true },
  },

  // -------------------------------------------
  // EXTRA SEO DATA (used by your new layout)
  // -------------------------------------------

  offers: {
    "@type": "Offer",
    url: "https://tmgdubai.ae/service/business-setup-in-dubai-uae",
    priceCurrency: "AED",
    availability: "https://schema.org/InStock"
  },

  serviceOutput: "Fully registered and licensed business setup in Dubai, UAE",

  termsOfService: "https://tmgdubai.ae/terms-of-service",


  breadcrumb: [
    { position: 1, name: "Home", url: "https://tmgdubai.ae" },
    { position: 2, name: "Services", url: "https://tmgdubai.ae/services" },
    { position: 3, name: "Business Setup in Dubai, UAE", url: "https://tmgdubai.ae/service/business-setup-in-dubai-uae" }
  ],
    data: [
      {
        title: "Simplifying Your Business",
        highlight: "Setup Journey",
        description: `Starting a business in Dubai is one of the smartest investments you can make — but understanding 
    the process requires local expertise. At TMG Global, we simplify your business setup journey from start to finish, 
    offering a one-stop solution that saves you time, effort, and unnecessary costs.`,
      },
      {
        title: "Why Dubai is the Ideal",
        highlight: "Business Destination",
        description: `Dubai’s thriving economy, world-class infrastructure, and investor-friendly environment make it a 
    global hub for entrepreneurs and businesses seeking long-term growth. With options like Mainland, Freezone, 
    and Offshore setups, the UAE provides flexibility for every type of venture.`,
      },
      {
        title: "End-to-End Support for a ",
        highlight: "Seamless Launch",
        description: `At TMG Global, we handle all documentation, approvals, and licensing — ensuring your business launches 
    smoothly and in full compliance with UAE regulations. Our goal is to turn your vision into a successful and sustainable enterprise.`,
      },
    ],
    banner: {
      heading: `Launch Your UAE Business with Confidence`,
      subheading: `
     Your complete partner for seamless business setup in Dubai and across 
     the UAE. We handle the complexities, so you can focus on your vision.

        `,
    },

    sections: [
      {
        id: "section1",
        title: "Your Gateway to the UAE Market",
        headline: "Why Set Up Your Business in the UAE?",
        content: [
          `The UAE is more than a destination — it’s a global business hub connecting the East and West. With 100% foreign ownership in many sectors, 
        tax-free income, and easy access to international markets, the UAE provides the perfect environment for entrepreneurs, investors, 
        and corporations to grow. Whether you’re launching a new brand or expanding globally, Dubai’s ecosystem offers endless opportunities for success.`,
        ],
        image: "/assets/images/services/Business1.png",
      },
      {
        id: "section2",
        title: "Our Comprehensive Business Setup Services",
        headline: "From Concept to Launch  We Handle Everything",
        content: [
          `TMG Global provides complete business setup solutions, guiding you through each step with clarity and precision. 
        Our experts manage all requirements, helping you choose the best structure and jurisdiction for your goals.`,
        ],
        services: [
          {
            id: 1,
            icon: "/assets/images/icons/service_img1.1.png",
            name: "Mainland\nBusiness Setup",
            description:
              "Register with Dubai’s Department of Economic Development (DED) and access the entire UAE market.",
          },
          {
            id: 2,
            icon: "/assets/images/icons/service_img1.2.png",
            name: "Freezone\nBusiness Setup",
            description:
              "100% foreign ownership, tax exemptions, and simplified import/export processes.",
          },
          {
            id: 3,
            icon: "/assets/images/icons/service_img1.3.png",
            name: "Offshore\nBusiness Setup",
            description:
              "Ideal for asset protection, privacy, and global trade.",
          },
          {
            id: 4,
            icon: "/assets/images/icons/service_img1.4.png",
            name: "Trade\nLicense Processing",
            description:
              "Fast approval for commercial, industrial, or professional activities.",
          },
          {
            id: 5,
            icon: "/assets/images/icons/service_img1.5.png",
            name: "PRO & Visa\nServices",
            description: "Hassle-free investor and employee visa arrangements.",
          },
        ],
      },
      {
        id: "section3",
        title: "Why Choose TMG Global for Your Business Setup?",
        headline: "The TMG Global Advantage",
        content: [
          ` TMG Global stands out through transparency, expertise, and commitment. Our team understands the UAE’s business landscape 
        inside out, ensuring fast and compliant results for every client. We offer`,
        ],
        features: [
          {
            id: 1,
            content: `Dedicated business consultants for every setup.`,
          },
          {
            id: 2,
            content: `100% clarity on timelines, costs, and documentation.`,
          },
          {
            id: 3,
            content: `Strong partnerships with UAE government authorities.`,
          },
          {
            id: 4,
            content: `Personalized business solutions designed for long-term success.`,
          },
        ],
      },
      {
        id: "section4",
        title: "Frequently Asked Questions (FAQ)",
        headline: "Frequently Asked Questions",
        faqs: [
          {
            question: `What is the difference between Mainland and Freezone business setup?`,
            answer: `Mainland companies can trade within the UAE and internationally, while Freezone 
        companies offer 100% ownership, no customs duty, and are ideal for import/export and global operations.`,
          },
          {
            question: `How long does the setup process take?`,
            answer: `Typically, a business setup in Dubai takes between 5 to 15 working days, depending on the jurisdiction and activity type.`,
          },
        ],
      },
    ],
  },
  {
    id: 2,
    slug: "company-formation-in-dubai-uae",
    title: "COMPANY FORMATION IN DUBAI, UAE",
    heading: "Company Formation\nin Dubai With Complete\nProfessional Support",

    image: "/assets/images/services/company-formation-in-dubai-uae.png",

     seo: {
    metaTitle: "Company Formation in Dubai, UAE | Business Setup Experts",
    metaDescription:
      "Get complete professional guidance for company formation in dubai, UAE. Get professional assistance for trade license registration, business setup, and government approvals to start your company.",
    keywords: [
      "company formation in dubai, uae",
      "business setup in dubai",
      "company registration uae",
      "dubai company formation services",
      "business consultants in dubai"
    ],
    ogTitle: "Company Formation in Dubai, UAE | TMG Global LLC",
    ogDescription:
      "Start your company formation in dubai, uae with TMG Global LLC — trusted business setup consultants offering trade licenses, registration, and investor visa services across the UAE.",
    ogImage: "/assets/images/services/company-formation-in-dubai-uae.png",
    ogImageAlt: "company formation consultants in dubai uae",
    canonicalUrl: "https://tmgdubai.ae/service/company-formation-in-dubai-uae",
    robots: { index: true, follow: true },
  },

  // Optional: Offer -> will be injected into Service JSON-LD if present
  offers: {
    "@type": "Offer",
    url: "https://tmgdubai.ae/service/company-formation-in-dubai-uae",
    priceCurrency: "AED",
    // price: "TBD", // optional
    availability: "https://schema.org/InStock"
  },

  // Optional: service output / terms / rating -> included in Service JSON-LD
  serviceOutput: "Registered and licensed company in Dubai, UAE",
  termsOfService: "https://tmgdubai.ae/terms-of-use",


  // Optional: BreadcrumbList data (layout will emit BreadcrumbList JSON-LD)
  breadcrumb: [
    { position: 1, name: "Home", url: "https://tmgdubai.ae" },
    { position: 2, name: "Services", url: "https://tmgdubai.ae/services" },
    { position: 3, name: "Company Formation in Dubai, UAE", url: "https://tmgdubai.ae/service/company-formation-in-dubai-uae" }
  ],

    data: [
      {
        title: "Navigate Dubai's Legal",
        highlight: "Landscape with Ease ",
        description: `
    Starting a company in Dubai is an exciting step toward building your 
    global presence — but navigating legal requirements, jurisdiction 
    choices, and documentation can be complex. TMG Global simplifies this 
    process by offering expert company formation services designed to help 
    you start quickly and correctly.
    `,
      },
      {
        title: "Mainland, Freezone, or Offshore: ",
        highlight: "Find Your Fit",
        description: `
Dubai’s diverse business landscape offers Mainland, Freezone, and Offshore 
options, each catering to different business goals. Whether you want to 
operate locally or internationally, TMG Global helps you choose the ideal 
structure that aligns with your vision and budget.

    `,
      },
      {
        title: "Comprehensive Support from ",
        highlight: "License to Visa",
        description: `
From trade license acquisition to investor visa support, our team handles 
every detail with precision. At TMG Global, we’re more than 
consultants — we’re your long-term partners in success, guiding you through 
every stage of company formation in the UAE.
    `,
      },
    ],
    banner: {
      heading: `Build Your UAE Company with Confidence`,
      subheading: `
         Your trusted partner for seamless company formation in Dubai 
         and across the UAE. We manage the process from start to finish, 
         ensuring your setup is fast, compliant, and cost-effective.
        `,
    },
    sections: [
      {
        id: "section1",
        title: "Your Gateway to the UAE Market",
        headline: " Why Form a Company in the UAE?",
        content: [
          ` 
        The UAE has become one of the world’s most attractive destinations for 
        investors and entrepreneurs. Its strategic location, strong economy, and investor-friendly 
        laws make it a launchpad for international success. With options like 100% foreign ownership, 
        zero corporate tax in many zones, and streamlined visa processes, it’s the perfect environment to 
        establish your company.
        `,
          `
        TMG Global helps you leverage these opportunities by identifying the right jurisdiction and ensuring your 
        company formation process is smooth, efficient, and fully compliant.
        `,
        ],
        image: "/assets/images/services/Business2.png",
      },
      {
        id: "section2",
        title: "Our Comprehensive Company Formation Services",
        headline: " From Planning to Execution — We Handle It All",
        content: [
          `
 TMG Global offers a complete suite of company formation solutions tailored to 
 your business type and industry. Our consultants ensure all legal and administrative 
 steps are handled seamlessly so you can focus on what truly matters — running your business.
        `,
        ],
        services: [
          {
            id: 1,
            icon: "/assets/images/icons/service_img2.1.png",
            name: "Mainland Company Formation",
            description:
              "Operate across the UAE with full access to local and international markets.",
          },
          {
            id: 2,
            icon: "/assets/images/icons/service_img2.2.png",
            name: "Freezone Company Formation",
            description:
              "Enjoy 100% ownership, tax exemptions, and simplified trading processes.",
          },
          {
            id: 3,
            icon: "/assets/images/icons/service_img2.3.png",
            name: "Offshore Company Setup",
            description:
              "Perfect for international trade, privacy protection, and asset management.",
          },
          {
            id: 4,
            icon: "/assets/images/icons/service_img2.4.png",
            name: "Trade Name Registration",
            description:
              "Assistance in reserving and approving your desired company name",
          },
          {
            id: 5,
            icon: "/assets/images/icons/service_img2.5.png",
            name: "Memorandum of Association (MOA)",
            description: "Drafting and notarizing essential legal documents.",
          },
          {
            id: 6,
            icon: "/assets/images/icons/service_img2.6.png",
            name: "License Issuance & Renewal",
            description:
              "Handling all documentation and government coordination for trade licenses.",
          },
          {
            id: 7,
            icon: "/assets/images/icons/service_img2.7.png",
            name: "Corporate Bank Account Assistance",
            description: "Helping you open accounts with top UAE banks.",
          },
          {
            id: 8,
            icon: "/assets/images/icons/service_img2.8.png",
            name: "Investor & Partner Visa Services",
            description: "End-to-end visa assistance for smooth onboarding.",
          },
        ],
      },
      {
        id: "section3",
        title: "Why Choose TMG Global for Your Company Formation?",
        headline: "The TMG Global Advantage",
        content: [
          `  With years of experience and strong local connections, TMG Global ensures a faster, simpler, and more transparent company formation experience. We’re committed to delivering professional guidance and reliable execution at every stage.`,
        ],
        features: [
          {
            id: 1,
            content: `Expert advisors specializing in UAE business laws and jurisdictions.`,
          },
          {
            id: 2,
            content: `End-to-end management of all documentation and government approvals.`,
          },
          {
            id: 3,
            content: `Transparent costs and timelines — no hidden fees.`,
          },
          {
            id: 4,
            content: `Personalized support from consultation to post-formation assistance.`,
          },
        ],
      },
      {
        id: "section4",
        title: "Frequently Asked Questions (FAQ)",
        headline: "Frequently Asked Questions",
        faqs: [
          {
            question: `
What’s the difference between Mainland, Freezone, and Offshore company formation?
            `,
            answer: `
Mainland allows you to trade directly within the UAE, Freezone offers 100% ownership and simplified import/export processes, while Offshore setups are ideal for international operations and tax planning.

        `,
          },
          {
            question: `
How long does the company formation process take?
            `,
            answer: `
The process typically takes between 3 to 10 working days, depending on the business activity and selected jurisdiction.
            `,
          },
          {
            question: `
Do I need to be physically present in Dubai to form a company?
            `,
            answer: `
Not necessarily. In many cases, TMG Global can assist you in completing the process remotely with digital verification and online document handling.
            `,
          },
        ],
      },
    ],
  },
  {
    id: 3,
    slug: "uae-golden-visa",
    title: "UAE GOLDEN VISA SERVICES",
    heading:
      "Golden Visa Services in\nthe UAE Expert Assistance\nfor Investors & Professionals",

    image: "/assets/images/services/uae-golden-visa.png",

 seo: {
    metaTitle: "UAE Golden Visa | Long-Term Residency in Dubai - TMG Global LLC",
    metaDescription:
      "TMG Global LLC offers professional assistance for UAE Golden Visa. Get expert guidance for eligibility, documentation, and fast approval for long-term residency in Dubai and UAE.",
    keywords: [
      "uae golden visa",
      "golden visa dubai",
      "long term residency uae",
      "golden visa application dubai",
      "investor visa uae"
    ],
    ogTitle: "UAE Golden Visa | TMG Global LLC",
    ogDescription:
      "Apply for your UAE Golden Visa with TMG Global LLC — expert consultants in Dubai offering full support for documentation, eligibility verification, and residency application services.",
    ogImage: "/assets/images/services/uae-golden-visa.png",
    ogImageAlt: "uae golden visa consultants in dubai uae",
    canonicalUrl: "https://tmgdubai.ae/service/uae-golden-visa",
    robots: { index: true, follow: true },
  },

  // -----------------------------
  // Optional extras (used by layout)
  // -----------------------------
  offers: {
    "@type": "Offer",
    url: "https://tmgdubai.ae/service/uae-golden-visa",
    priceCurrency: "AED",
    // price: "TBD", // optional
    availability: "https://schema.org/InStock"
  },

  serviceOutput: "Approved UAE Golden Visa residency",

  termsOfService: "https://tmgdubai.ae/terms-of-service",


  

  breadcrumb: [
    { position: 1, name: "Home", url: "https://tmgdubai.ae" },
    { position: 2, name: "Services", url: "https://tmgdubai.ae/services" },
    { position: 3, name: "UAE Golden Visa", url: "https://tmgdubai.ae/service/uae-golden-visa" }
  ],
    data: [
      {
        title: "Unlock Long-Term Residency",
        highlight: "in the UAE",
        description: `
 The UAE Golden Visa offers long-term residency for investors, 
 entrepreneurs, exceptional talents, and highly skilled professionals. 
 Unlike standard visas, it provides stability, security, and the freedom to 
 live, work, and study in the UAE without the need for a local sponsor.

    `,
      },
      {
        title: "Expert Guidance for Your Golden",
        highlight: "Visa Application",
        description: `
TMG Global helps you navigate the eligibility criteria, documentation, 
and application process with precision. Our experts ensure your application 
meets all legal requirements, increasing the likelihood of approval and 
saving you valuable time.

    `,
      },
      {
        title: "Secure Your Family's Future",
        highlight: "in the UAE",
        description: `
With the Golden Visa, you can secure not only your future but also that 
of your family, enabling them to live, study, and thrive in one of the most 
dynamic and business-friendly countries in the world.
    `,
      },
    ],
    banner: {
      heading: ` Secure Your Future in the UAE with the Golden Visa `,
      subheading: `
        Attain 5- or 10-year long-term residency for you and your family.
         Expert guidance tailored for investors, entrepreneurs, and exceptional 
         talents

        `,
    },
    sections: [
      {
        id: "section1",
        title: "Unlock a World of Opportunities",
        headline: "  What is the UAE Golden Visa?",
        content: [
          ` 
 The UAE Golden Visa is a long-term residency program designed to 
 attract top global talent, investors, and entrepreneurs. It allows 
 residents to enjoy security, flexibility, and a high quality of life
  while benefiting from the UAE’s investor-friendly policies.

        `,
          `
       l helps you leverage these opportunities by identifying the right jurisdiction and ensuring your 
        company formation process is smooth, efficient, and fully compliant.
        `,
        ],
        image: "/assets/images/services/Business3.png",
      },
      {
        id: "section2",
        title: "Who is Eligible for the Golden Visa?",
        headline: "  Find Your Category",
        content: [
          `
 TMG Global provides personalized guidance for various eligible categories:

        `,
        ],
        serviceTitle: " From Application to Approval, We Guide You",
        services: [
          {
            id: 1,
            icon: "/assets/images/icons/service_img3.1.png",
            name: "Eligibility Assessment",
            description:
              "We review your profile and advise on the suitable category.",
          },
          {
            id: 2,
            icon: "/assets/images/icons/service_img3.2.png",
            name: "Document Collection & Preparation",
            description:
              "Assistance in gathering and validating all required paperwork.",
          },
          {
            id: 3,
            icon: "/assets/images/icons/service_img3.3.png",
            name: "Application Submission",
            description:
              "We liaise with the relevant authorities including ICA and GDRFA.",
          },
          {
            id: 4,
            icon: "/assets/images/icons/service_img3.4.png",
            name: "Medical & Emirates ID Processing",
            description: "Guidance through the health and ID requirements.",
          },

          {
            id: 5,
            icon: "/assets/images/icons/service_img3.5.png",
            name: "Visa Stamping",
            description:
              "Ensure your long-term residency is finalized without delays.",
          },
        ],
      },
      {
        id: "section3",
        title: "Benefits of the Golden Visa",
        headline: " Why Apply for a Golden Visa?",
        content: [
          `  With years of experience and strong local connections, TMG Global ensures a faster, simpler, and more transparent company formation experience. We’re committed to delivering professional guidance and reliable execution at every stage.`,
        ],
        features: [
          {
            id: 1,
            content: `Long-term residency for 5 or 10 years, renewable`,
          },
          {
            id: 2,
            content: `Sponsor family members including spouses and children.`,
          },
          {
            id: 3,
            content: `No need for a local sponsor.`,
          },
          {
            id: 4,
            content: `Freedom to travel outside the UAE for extended periods`,
          },
          {
            id: 5,
            content: `Full ownership of your business on the mainland.`,
          },
        ],
      },
      {
        id: "section4",
        title: "Frequently Asked Questions (FAQ)",
        headline: "Frequently Asked Questions",
        faqs: [
          {
            question: `
Who is eligible to apply for the UAE Golden Visa?
            `,
            answer: `
The UAE Golden Visa is designed for several key categories, including investors in real estate or startups, entrepreneurs with innovative projects, exceptional talents like scientists and artists, and outstanding students. Our team at TMG Global can assess your specific profile to determine your eligibility and the most suitable category for your application.

        `,
          },
          {
            question: `
What are the main benefits of holding a UAE Golden Visa?
            `,
            answer: `
The Golden Visa offers numerous advantages over standard visas. Key benefits include long-term, renewable residency for 5 or 10 years, the ability to sponsor your family, no requirement for a local sponsor, and the freedom to fully own a mainland business. It provides unparalleled stability and security for you and your family in the UAE.
            `,
          },
        ],
      },
    ],
  },
  {
    id: 4,
    slug: "pro-services-dubai-uae",
    title: "PRO SERVICES IN DUBAI",
    heading:
      "Your Trusted PRO Partner\nin Dubai For Visas,\nLicenses, and Documentation",

    image: "/assets/images/services/pro-services-dubai-uae.png",

seo: {
    metaTitle: "PRO Services Dubai, UAE | Business Support and Documentation - TMG Global LLC",
    metaDescription:
      "TMG Global LLC provides professional pro services dubai, uae including visa processing, document clearance, license renewals, and government approvals to simplify your business operations.",
    keywords: [
      "pro services dubai, uae",
      "business pro services dubai",
      "visa processing uae",
      "document clearance dubai",
      "government liaison services uae"
    ],
    ogTitle: "PRO Services Dubai, UAE | TMG Global LLC",
    ogDescription:
      "TMG Global LLC offers reliable pro services dubai, uae — covering visa applications, company documentation, and license renewals for businesses across the UAE.",
    ogImage: "/assets/images/services/pro-services-dubai-uae.png",
    ogImageAlt: "pro services consultants in dubai uae",
    canonicalUrl: "https://tmgdubai.ae/service/pro-services-dubai-uae",
    robots: { index: true, follow: true },
  },

  offers: {
    "@type": "Offer",
    url: "https://tmgdubai.ae/service/pro-services-dubai-uae",
    priceCurrency: "AED",
    availability: "https://schema.org/InStock"
  },

  serviceOutput: "complete business documentation and visa processing support in dubai, uae",

  termsOfService: "https://tmgdubai.ae/terms-of-service",

  // breadcrumb (optional — layout will emit BreadcrumbList if present)
  breadcrumb: [
    { position: 1, name: "Home", url: "https://tmgdubai.ae" },
    { position: 2, name: "Services", url: "https://tmgdubai.ae/services" },
    { position: 3, name: "PRO Services Dubai, UAE", url: "https://tmgdubai.ae/service/pro-services-dubai-uae" }
  ],
    data: [
      {
        title: "Streamline Government Procedures",
        highlight: "in the UAE ",
        description: `
 Navigating UAE government procedures can be time-consuming and complex. From visa 
 processing to document clearing, every step requires accuracy and up-to-date knowledge 
 of local regulations.

    `,
      },
      {
        title: "Your Dedicated PRO",
        highlight: "Services Partner",
        description: `
TMG Global’s PRO services simplify your administrative workload. Our experts act as 
the liaison between your business and government authorities, ensuring compliance and 
fast approvals across Dubai’s regulatory landscape.

    `,
      },
      {
        title: "Focus on Growth, ",
        highlight: "We Handle the Rest",
        description: `
By outsourcing your PRO tasks to us, you can focus on core business operations while we 
manage everything from approvals and registrations to renewals and cancellations efficiently.
    `,
      },
    ],
    banner: {
      heading: `Streamline Your Government Liaison Work
        `,
      subheading: `
    Save time and resources by outsourcing your PRO tasks to our experienced team. We 
    ensure smooth, timely processing with all UAE government departments.

        `,
    },
    sections: [
      {
        id: "section1",
        title: "What are PRO Services?",
        headline: " Navigate Government Procedures with Ease",
        content: [
          ` 
    A Public Relations Officer (PRO) is essential for businesses in the UAE, acting as 
    the official link between your company and government entities like the Department of 
    Economic Development (DED), Immigration, Ministry of Labour, and other authorities.
        `,
          `
       Our PRO services ensure that your company remains compliant, avoiding delays and penalties.
        `,
        ],
        image: "/assets/images/services/Business4.png",
      },
      {
        id: "section2",
        title: "Our Comprehensive PRO Services",
        headline: "  End-to-End Government Liaison Support",
        content: [
          `
 TMG Global handles a wide range of PRO services to keep your business operational and compliant.
 
        `,
        ],
        services: [
          {
            id: 1,
            icon: "/assets/images/icons/service_img4.1.png",
            name: "Visa Processing",
            description:
              "Applications, renewals, cancellations, and status changes.",
          },
          {
            id: 2,
            icon: "/assets/images/icons/service_img4.2.png",
            name: "Work Permits & Labour Cards",
            description: "Issuance and renewal for employees.",
          },
          {
            id: 3,
            icon: "/assets/images/icons/service_img4.3.png",
            name: "Document Attestation & Clearing",
            description: "Submission and collection from relevant ministries.",
          },
          {
            id: 4,
            icon: "/assets/images/icons/service_img4.4.png",
            name: "Trade License Renewals",
            description: "Managing annual renewals seamlessly.",
          },
          {
            id: 5,
            icon: "/assets/images/icons/service_img4.5.png",
            name: "Ejari & Municipality Approvals",
            description:
              "Securing tenancy contracts and other required permits.",
          },
        ],
      },
      {
        id: "section3",
        title: "The TMG Global PRO Advantage",
        headline: " Why Your Business Needs Our PRO Team",
        content: [
          `  With years of experience and strong local connections, TMG Global ensures a faster, simpler, and more transparent company formation experience. We’re committed to delivering professional guidance and reliable execution at every stage.`,
        ],
        features: [
          {
            id: 1,
            content: `Free your staff to focus on core business activities.`,
          },
          {
            id: 2,
            content: `Leverage expert knowledge of ever-changing government regulations.`,
          },
          {
            id: 3,
            content: `Ensure faster processing with our established relationships.`,
          },
          {
            id: 4,
            content: `Avoid fines and delays with accurate, error-free submissions.`,
          },
          {
            id: 5,
            content: `Prevent unnecessary penalties and ensure cost-effective compliance.`,
          },
        ],
      },
      {
        id: "section4",
        title: "Frequently Asked Questions (FAQ)",
        headline: "Frequently Asked Questions",
        faqs: [
          {
            question: `
What’s the difference between Mainland, Freezone, and Offshore company formation?
            `,
            answer: `
Mainland allows you to trade directly within the UAE, Freezone offers 100% ownership and simplified import/export processes, while Offshore setups are ideal for international operations and tax planning.

        `,
          },
          {
            question: `
What PRO services does TMG Global handle in Dubai?
            `,
            answer: `
We manage the full spectrum of government liaison work, including visa processing, work permit and labour card issuance, document attestation, trade license renewals, and securing approvals from entities like the DED and municipality. This end-to-end support ensures your business remains fully compliant and operational.
            `,
          },
          {
            question: `
How do your PRO services save my business time and money?
            `,
            answer: `
By outsourcing to our expert PRO team, you free your staff to focus on revenue-generating activities while we leverage our established relationships and regulatory knowledge to process your government transactions faster and without errors. This efficiency prevents costly penalties and delays, making it a highly cost-effective solution.
            `,
          },
        ],
      },
    ],
  },
  {
    id: 5,
    slug: "local-sponsorship-services-in-dubai-uae",
    title: "LOCAL SPONSORSHIP SERVICES",
    heading:
      "Local Sponsorship,\nDone Right With Trusted Local\nSponsorship Solutions",

    image: "/assets/images/services/local-sponsorship-in-dubai-uae.png",

    seo: {
    metaTitle: "Local Sponsorship Services in Dubai, UAE | Trusted Emirati Partners - TMG Global LLC",
    metaDescription:
      "TMG Global LLC provides reliable local sponsorship services in dubai, uae for mainland businesses. Get secure, compliant, and transparent partnerships with trusted Emirati sponsors for your company formation.",
    keywords: [
      "local sponsorship services in dubai, uae",
      "uae local sponsor",
      "dubai mainland sponsorship",
      "emirati business sponsor dubai",
      "company sponsorship services uae"
    ],
    ogTitle: "Local Sponsorship Services in Dubai, UAE | TMG Global LLC",
    ogDescription:
      "Partner with TMG Global LLC for secure and transparent local sponsorship services in dubai, uae — helping you connect with trusted Emirati sponsors for your mainland business setup.",
    ogImage: "/assets/images/services/local-sponsorship-in-dubai-uae.png",
    ogImageAlt: "local sponsorship consultants in dubai uae",
    canonicalUrl: "https://tmgdubai.ae/service/local-sponsorship-services-in-dubai-uae",
    robots: { index: true, follow: true },
  },

  // Optional extras (used by layout)
  offers: {
    "@type": "Offer",
    url: "https://tmgdubai.ae/service/local-sponsorship-services-in-dubai-uae",
    priceCurrency: "AED",
    availability: "https://schema.org/InStock"
  },

  serviceOutput: "secure and legally compliant local sponsorship partnership in dubai, uae",

  termsOfService: "https://tmgdubai.ae/terms-of-service",



  breadcrumb: [
    { position: 1, name: "Home", url: "https://tmgdubai.ae" },
    { position: 2, name: "Services", url: "https://tmgdubai.ae/services" },
    { position: 3, name: "Local Sponsorship Services in Dubai, UAE", url: "https://tmgdubai.ae/service/local-sponsorship-services-in-dubai-uae" }
  ],
    data: [
      {
        title: "Compliant Local Sponsorship",
        highlight: "for Your Mainland Business",
        description:
          "Foreign investors establishing a mainland company in Dubai must appoint a Local Sponsor or Local Service Agent (LSA) as per UAE law. Choosing the right sponsor is critical for smooth operations and legal compliance.",
      },
      {
        title: "Partner with Trusted,",
        highlight: "Verified UAE Nationals",
        description:
          "TMG Global connects you with thoroughly vetted Emirati partners, ensuring a trustworthy and professional relationship. We manage agreements, liaise with authorities, and maintain transparent processes to safeguard your interests.",
      },
      {
        title: "Focus on Growth,",
        highlight: "We Handle Sponsorship",
        description:
          "With our support, you gain access to Dubai's entire market without complications, allowing you to focus on growing your business while we handle sponsorship and legal formalities.",
      },
    ],
    banner: {
      heading: "Compliant Local Sponsorship for Your Mainland Business",
      subheading:
        "Partner with trusted, verified UAE nationals through our extensive network. Ensure legal compliance and operational peace of mind.",
    },
    sections: [
      {
        id: "section1",
        title: "Understanding Local Sponsorship",
        headline: "What is a Local Sponsor?",
        content: [
          "A Local Sponsor is a UAE national or a company fully owned by UAE nationals who partners with a foreign investor to facilitate mainland business operations. For LLCs, the sponsor may hold a 51% share, while for professional licenses, an LSA acts without equity ownership but receives an annual fee.",
          "Our service ensures you meet all legal requirements of the UAE Commercial Companies Law and maintain full compliance.",
        ],
        image: "/assets/images/services/Business5.png",
      },
      {
        id: "section2",
        title: "Our Reliable Sponsorship Solutions",
        headline: "Your Bridge to the UAE Market",
        content: [
          "TMG Global simplifies sponsorship arrangements with a secure and professional process:",
        ],
        services: [
          {
            id: 1,
            icon: "/assets/images/icons/service_img5.1.png",
            name: "Verified Partner Matching",
            description: "Access pre-vetted, professional UAE nationals.",
          },
          {
            id: 2,
            icon: "/assets/images/icons/service_img5.2.png",
            name: "Agreement Drafting",
            description:
              "Legally sound sponsorship agreements protecting your interests.",
          },
          {
            id: 3,
            icon: "/assets/images/icons/service_img5.3.png",
            name: "Ongoing Relationship Management",
            description:
              "Continuous support and liaison to ensure smooth collaboration.",
          },
          {
            id: 4,
            icon: "/assets/images/icons/service_img5.4.png",
            name: "Local Service Agent (LSA) Services",
            description:
              "Assistance for professional licenses with non-equity partnerships.",
          },
        ],
      },
      {
        id: "section3",
        title: "Why Secure Your Sponsor with TMG Global?",
        headline: "Trust and Transparency are Paramount",
        content: [
          "With years of experience and strong local connections, TMG Global ensures a secure, compliant sponsorship arrangement that protects your business interests.",
        ],
        features: [
          {
            id: 1,
            content:
              "Every sponsor is thoroughly vetted for credibility and professionalism.",
          },
          {
            id: 2,
            content: "Avoid legal disputes and operational delays.",
          },
          {
            id: 3,
            content: "Trade directly within Dubai's mainland market.",
          },
          {
            id: 4,
            content:
              "We navigate all legal formalities, ensuring compliance and peace of mind.",
          },
        ],
      },
      {
        id: "section4",
        title: "Frequently Asked Questions (FAQ)",
        headline: "Frequently Asked Questions",
        faqs: [
          {
            question: "Does the local sponsor own a share of my company?",
            answer:
              "For an LLC, the sponsor typically holds 51%. For professional licenses, an LSA receives an annual fee without equity.",
          },
          {
            question: "Can I change my local sponsor later?",
            answer:
              "Yes, legal procedures allow sponsor changes. TMG Global can assist for smooth, compliant transitions.",
          },
        ],
      },
    ],
  },
  {
    id: 6,
    slug: "uae-visa-services",
    title: "UAE VISA SERVICES",
    heading: "Hassle-Free Visa Services\nin the UAE Your Visa Experts",

    image: "/assets/images/services/uae-visa-services.png",

  seo: {
    metaTitle: "UAE Visa Services | Fast and Reliable Visa Processing - TMG Global LLC",
    metaDescription:
      "TMG Global LLC provides expert uae visa services including employment, investor, family, and residence visas. Get fast, accurate, and compliant visa processing solutions anywhere in the UAE.",
    keywords: [
      "uae visa services",
      "visa processing dubai",
      "residence visa uae",
      "employment visa dubai",
      "investor visa services uae"
    ],
    ogTitle: "UAE Visa Services | TMG Global LLC",
    ogDescription:
      "TMG Global LLC offers professional uae visa services for individuals and companies — covering employment, investor, and family visa applications with fast and reliable processing.",
    ogImage: "/assets/images/services/uae-visa-services.png",
    ogImageAlt: "uae visa processing consultants in dubai uae",
    canonicalUrl: "https://tmgdubai.ae/service/uae-visa-services",
    robots: { index: true, follow: true },
  },

  offers: {
    "@type": "Offer",
    url: "https://tmgdubai.ae/service/uae-visa-services",
    priceCurrency: "AED",
    availability: "https://schema.org/InStock"
  },

  serviceOutput: "approved uae visa applications processed smoothly and on time",

  termsOfService: "https://tmgdubai.ae/terms-of-service",

  // breadcrumb (layout will emit BreadcrumbList JSON-LD if present)
  breadcrumb: [
    { position: 1, name: "Home", url: "https://tmgdubai.ae" },
    { position: 2, name: "Services", url: "https://tmgdubai.ae/services" },
    { position: 3, name: "UAE Visa Services", url: "https://tmgdubai.ae/service/uae-visa-services" }
  ],
    data: [
      {
        title: "Smooth & Efficient",
        highlight: "UAE Visa Processing",
        description:
          "Securing the right visa is the first step toward living or doing business in the UAE. TMG Global offers end-to-end visa services for investors, employees, and family members, eliminating the complexity of government procedures.",
      },
      {
        title: "Accurate & Compliant",
        highlight: "Applications Guaranteed",
        description:
          "Our team ensures every application is accurate, compliant, and submitted on time. We liaise directly with UAE authorities, saving you time and preventing common delays or rejections.",
      },
      {
        title: "Seamless & Hassle-free",
        highlight: "UAE Journey",
        description:
          "With TMG Global, you can focus on your business or relocation while we handle everything from document preparation to final visa stamping, making your UAE journey seamless and hassle-free.",
      },
    ],
    banner: {
      heading: "Smooth & Efficient UAE Visa Processing",
      subheading:
        "From employment to investor visas, we manage the entire application process for you, ensuring timely approval and a stress-free experience.",
    },
    sections: [
      {
        id: "section1",
        title: "Your Gateway to Life in the UAE",
        headline: "Comprehensive UAE Visa Solutions",
        content: [
          "The UAE is a global hub for business and tourism, and securing the right visa is essential. TMG Global manages the full process, ensuring smooth relocation, employment, or investment without stress.",
        ],
        image: "/assets/images/services/Business6.png",
      },
      {
        id: "section2",
        title: "Our Visa Services",
        headline: "We Handle All Visa Types",
        content: ["We provide complete visa services for all categories:"],
        services: [
          {
            id: 1,
            icon: "/assets/images/icons/service_img6.1.png",
            name: "Investor/Partner Visas",
            description:
              "For business owners and investors setting up a company.",
          },
          {
            id: 2,
            icon: "/assets/images/icons/service_img6.2.png",
            name: "Employment Visas",
            description: "For individuals sponsored by a UAE-based employer.",
          },
          {
            id: 3,
            icon: "/assets/images/icons/service_img6.3.png",
            name: "Family Sponsorship Visas",
            description:
              "To bring your spouse, children, and parents to the UAE.",
          },
          {
            id: 4,
            icon: "/assets/images/icons/service_img6.4.png",
            name: "Visit & Tourist Visas",
            description: "For short-term business trips or tourism.",
          },
          {
            id: 5,
            icon: "/assets/images/icons/service_img6.5.png",
            name: "Visa Renewals & Cancellations",
            description:
              "Efficient handling of all renewals and exit formalities.",
          },
        ],
      },
      {
        id: "section3",
        title: "The TMG Global Visa Process",
        headline: "How We Simplify Your Visa Journey",
        content: [
          "Our structured approach ensures a smooth and efficient visa application process from start to finish.",
        ],
        features: [
          {
            id: 1,
            content: "Determine the correct visa type and eligibility.",
          },
          {
            id: 2,
            content: "Prepare and verify all required paperwork.",
          },
          {
            id: 3,
            content: "Submit to authorities and monitor progress.",
          },
          {
            id: 4,
            content: "Coordinate fitness tests and Emirates ID issuance.",
          },
          {
            id: 5,
            content: "Ensure visa is officially stamped in your passport.",
          },
        ],
      },
      {
        id: "section4",
        title: "Frequently Asked Questions (FAQ)",
        headline: "Frequently Asked Questions",
        faqs: [
          {
            question: "What types of visas does TMG Global handle?",
            answer:
              "We handle all visa types including Investor/Partner Visas for business owners, Employment Visas for company-sponsored individuals, Family Sponsorship Visas for family members, Visit & Tourist Visas for short-term stays, and Visa Renewals & Cancellations.",
          },
          {
            question:
              "How long does the UAE visa process take with TMG Global?",
            answer:
              "Our efficient processing and direct liaison with UAE authorities significantly reduces processing time. While exact timelines depend on visa type, our structured approach ensures timely approvals and prevents common delays.",
          },
        ],
      },
    ],
  },
  {
    id: 7,
    slug: "iso-certification-and-trademark-registration-dubai-uae",
    title: "ISO & TRADEMARK SERVICES",
    heading:
      "ISO Certification and\nTrademark Registration\nProtect Your Brand",

    image:
      "/assets/images/services/iso-certification-and-trademark-registration-dubai-uae.png",

    seo: {
    metaTitle: "ISO Certification and Trademark Registration Dubai, UAE | TMG Global LLC",
    metaDescription:
      "TMG Global LLC provides professional iso certification and trademark registration dubai, uae. Achieve international quality compliance and protect your business brand legally across the UAE.",
    keywords: [
      "iso certification and trademark registration in dubai, uae",
      "iso consultants in dubai",
      "trademark registration uae",
      "business certification services dubai",
      "brand protection dubai uae"
    ],
    ogTitle: "ISO Certification and Trademark Registration in Dubai, UAE | TMG Global LLC",
    ogDescription:
      "Get expert iso certification and trademark registration in dubai, UAE with TMG Global LLC — ensuring compliance, brand protection, and business credibility across the UAE.",
    ogImage: "/assets/images/services/iso-certification-and-trademark-registration-dubai-uae.png",
    ogImageAlt: "iso certification and trademark consultants in dubai uae",
    canonicalUrl: "https://tmgdubai.ae/service/iso-certification-and-trademark-registration-dubai-uae",
    robots: { index: true, follow: true },
  },

  offers: {
    "@type": "Offer",
    url: "https://tmgdubai.ae/service/iso-certification-and-trademark-registration-in-dubai",
    priceCurrency: "AED",
    availability: "https://schema.org/InStock"
  },

  serviceOutput: "Certified ISO-compliant business and legally registered trademark in the UAE",

  termsOfService: "https://tmgdubai.ae/terms-of-service",
    data: [
      {
        title: "Build Trust & Protect",
        highlight: "Your Brand Identity",
        description:
          "In today's competitive UAE market, establishing credibility is essential. ISO certification demonstrates your commitment to quality, efficiency, and operational excellence, while trademark registration ensures your brand and intellectual property are legally protected.",
      },
      {
        title: "Complete Solution for",
        highlight: "Certification & Registration",
        description:
          "TMG Global provides a complete solution, managing every step of ISO certification and trademark registration. From document preparation to liaising with authorities, we make the process seamless and efficient.",
      },
      {
        title: "Expert Guidance for",
        highlight: "Recognition & Protection",
        description:
          "Our experts guide you in choosing the right ISO standard for your business and ensure your trademark is filed correctly, reducing the risk of disputes or delays. With TMG Global, your business gains both recognition and legal protection.",
      },
    ],
    banner: {
      heading: "Build Trust & Protect Your Brand Identity",
      subheading:
        "Achieve international quality standards with ISO certification and safeguard your business name and logo with official trademark registration in the UAE.",
    },
    sections: [
      {
        id: "section1",
        title: "Strengthen Your Market Position",
        headline: "Why ISO and Trademarks are Crucial for Your Business",
        content: [
          "ISO certification enhances operational efficiency and signals global-quality standards to clients, while a registered trademark safeguards your unique brand identity. Together, they strengthen your reputation, attract investors, and build long-term trust in the UAE market.",
        ],
        image: "/assets/images/services/Business7.png",
      },
      {
        id: "section2",
        title: "Our Certification & Registration Services",
        headline: "A Dual Approach to Business Growth",
        content: [
          "We provide comprehensive support for both trademark registration and ISO certification processes:",
        ],
        services: [
          {
            id: 1,
            icon: "/assets/images/icons/service_img7.1.png",
            name: "Trademark Registration",
            description:
              "Comprehensive search and filing with the Ministry of Economy",
          },
          {
            id: 2,
            icon: "/assets/images/icons/service_img7.2.png",
            name: "Application Submission",
            description: "Official submission and follow-up with authorities",
          },
          {
            id: 3,
            icon: "/assets/images/icons/service_img7.3.png",
            name: "Monitoring & Protection",
            description: "Ongoing protection against infringement",
          },
          {
            id: 4,
            icon: "/assets/images/icons/service_img7.4.png",
            name: "ISO Gap Analysis",
            description: "Comprehensive pre-audit and assessment",
          },
          {
            id: 5,
            icon: "/assets/images/icons/service_img7.5.png",
            name: "Documentation Support",
            description: "Process implementation and documentation assistance",
          },
          {
            id: 6,
            icon: "/assets/images/icons/service_img7.6.png",
            name: "Certification Liaison",
            description: "Coordination with certification bodies for audits",
          },
        ],
      },
      {
        id: "section3",
        title: "The Benefits of Partnering with Us",
        headline: "More Than Just a Certificate",
        content: [
          "With years of experience and strong local connections, TMG Global ensures a faster, simpler, and more transparent certification and registration experience. We're committed to delivering professional guidance and reliable execution at every stage.",
        ],
        features: [
          {
            id: 1,
            content: "Prevent copycats and secure your intellectual property.",
          },
          {
            id: 2,
            content:
              "ISO certification enhances credibility for tenders and partnerships.",
          },
          {
            id: 3,
            content:
              "Streamline processes and reduce errors with ISO standards.",
          },
          {
            id: 4,
            content: "Navigate complex procedures with ease and accuracy.",
          },
        ],
      },
      {
        id: "section4",
        title: "Frequently Asked Questions (FAQ)",
        headline: "Frequently Asked Questions",
        faqs: [
          {
            question: "How long does trademark registration take in the UAE?",
            answer:
              "Typically, the entire process takes 3-6 months from application to issuance.",
          },
          {
            question: "Is ISO certification mandatory in the UAE?",
            answer:
              "While not mandatory for all businesses, it is often required for government tenders and is a recognized standard for demonstrating quality and efficiency.",
          },
        ],
      },
    ],
  },
  {
    id: 8,
    slug: "virtual-office-setup-in-dubai-uae",
    title: "VIRTUAL OFFICE & EJARI SERVICES",
    heading: "Premium Virtual Office &\nEjari Registration Set Up Easily",

    image: "/assets/images/services/virtual-office-setup-in-dubai-uae.png",

   seo: {
    metaTitle: "Virtual Office Setup in Dubai, UAE | Premium Business Address - TMG Global LLC",
    metaDescription:
      "TMG Global LLC provides professional virtual office setup in dubai, uae with a premium business address, mail handling, call management, and full office support for startups and entrepreneurs.",
    keywords: [
      "virtual office setup in dubai, uae",
      "virtual office dubai",
      "business address dubai",
      "uae office setup services",
      "shared office solutions dubai"
    ],
    ogTitle: "Virtual Office Setup in Dubai, UAE | TMG Global LLC",
    ogDescription:
      "Set up your virtual office setup in dubai, uae with TMG Global LLC — get a prestigious business address, mail and call handling, and complete administrative support for your UAE business.",
    ogImage: "/assets/images/services/virtual-office-setup-in-dubai-uae.png",
    ogImageAlt: "virtual office setup consultants in dubai uae",
    canonicalUrl: "https://tmgdubai.ae/service/virtual-office-setup-in-dubai-uae",
    robots: { index: true, follow: true },
  },

  offers: {
    "@type": "Offer",
    url: "https://tmgdubai.ae/service/virtual-office-setup-in-dubai-uae",
    priceCurrency: "AED",
    availability: "https://schema.org/InStock"
  },

  serviceOutput: "registered virtual office address and administrative support in dubai, uae",

  termsOfService: "https://tmgdubai.ae/terms-of-service",

  // breadcrumb (layout will emit BreadcrumbList JSON-LD if present)
  breadcrumb: [
    { position: 1, name: "Home", url: "https://tmgdubai.ae" },
    { position: 2, name: "Services", url: "https://tmgdubai.ae/services" },
    { position: 3, name: "Virtual Office Setup in Dubai, UAE", url: "https://tmgdubai.ae/service/virtual-office-setup-in-dubai-uae" }
  ],
    data: [
      {
        title: "A Professional Business Address",
        highlight: "Without the High Cost",
        description:
          "A Virtual Office allows you to operate professionally without the high overhead of renting a physical space. TMG Global provides prestigious business addresses, mail handling, and meeting room access, giving your company instant credibility in Dubai.",
      },
      {
        title: "Seamless Ejari",
        highlight: "Registration Support",
        description:
          "Ejari registration is mandatory for all Dubai mainland companies and certain freezone entities with physical offices. We handle all documentation and formalities, ensuring your trade license and visa processing are fully compliant.",
      },
      {
        title: "Quick Corporate Presence",
        highlight: "in Dubai",
        description:
          "With TMG Global, startups and international businesses can quickly establish a corporate presence in Dubai. Our experts provide end-to-end support, from virtual office selection to Ejari registration, streamlining the setup process for efficiency and peace of mind.",
      },
    ],
    banner: {
      heading: "A Professional Business Address Without the High Cost",
      subheading:
        "Launch your Dubai business with a prime virtual office and seamless Ejari registration. Perfect for startups, SMEs, and expanding international companies.",
    },
    sections: [
      {
        id: "section1",
        title: "Maximize Your Flexibility and Savings",
        headline: "What is a Virtual Office and Ejari?",
        content: [
          "A Virtual Office provides a prestigious business address, mail handling, and professional support without the cost of leasing a physical office. Ejari is the official tenancy registration system in Dubai, required for licensing, visa applications, and compliance. Combined, these services allow businesses to operate legally and professionally from day one.",
        ],
        image: "/assets/images/services/Business8.png",
      },
      {
        id: "section2",
        title: "Our All-in-One Business Presence Solutions",
        headline: "Everything You Need to Operate Legally",
        content: ["We make starting a business easy with services including:"],
        services: [
          {
            id: 1,
            icon: "/assets/images/icons/service_img8.1.png",
            name: "Premium Virtual Office",
            description: "Select from prime Dubai business locations.",
          },
          {
            id: 2,
            icon: "/assets/images/icons/service_img8.2.png",
            name: "Mail Handling & Forwarding",
            description: "Ensure no important correspondence is missed.",
          },
          {
            id: 3,
            icon: "/assets/images/icons/service_img8.3.png",
            name: "Meeting Room Access",
            description: "Book professional spaces for client meetings.",
          },
          {
            id: 4,
            icon: "/assets/images/icons/service_img8.4.png",
            name: "Ejari Registration",
            description:
              "Complete official tenancy contract registration with the Dubai Land Department.",
          },
          {
            id: 5,
            icon: "/assets/images/icons/service_img8.5.png",
            name: "Licensing Support",
            description:
              "Use your virtual office address to secure your trade license.",
          },
        ],
      },
      {
        id: "section3",
        title: "The TMG Global Advantage",
        headline: "Why a Virtual Office is Your Smartest First Investment",
        content: [
          "With years of experience and strong local connections, TMG Global ensures a faster, simpler, and more transparent virtual office setup and Ejari registration experience. We're committed to delivering professional guidance and reliable execution at every stage.",
        ],
        features: [
          {
            id: 1,
            content: "Save up to 90% compared to a traditional office lease.",
          },
          {
            id: 2,
            content:
              "Work remotely while maintaining a professional corporate image.",
          },
          {
            id: 3,
            content:
              "Complete licensing and Ejari registration in days, not months.",
          },
          {
            id: 4,
            content:
              "Impress clients with addresses in Dubai's key business hubs.",
          },
        ],
      },
      {
        id: "section4",
        title: "Frequently Asked Questions (FAQ)",
        headline: "Frequently Asked Questions",
        faqs: [
          {
            question: "Can I get a visa with a virtual office?",
            answer:
              "Visa eligibility depends on your license type and the selected freezone or authority. We guide you to the right setup to support your visa needs.",
          },
          {
            question: "Is Ejari mandatory for all businesses?",
            answer:
              "Yes, all mainland Dubai companies and freezone companies with physical office space must have Ejari registration for licensing and visa processing.",
          },
        ],
      },
    ],
  },
  {
    id: 9,
    slug: "company-liquidation-in-dubai-uae",
    title: "COMPANY LIQUIDATION SERVICES & CLOSURE SERVICES ",
    heading: "Company Liquidation and Closure\nServices egal and Smooth",

    image: "/assets/images/services/company-liquidation-in-dubai-uae.png",

   seo: {
    metaTitle: "Company Liquidation in Dubai, UAE | Business Closure Services - TMG Global LLC",
    metaDescription:
      "TMG Global LLC provides expert company liquidation in dubai, uae. We handle business closure, legal compliance, financial clearance, and government documentation with complete transparency and support.",
    keywords: [
      "company liquidation in dubai, uae",
      "business liquidation dubai",
      "company closure services uae",
      "liquidation consultants dubai",
      "business deregistration dubai"
    ],
    ogTitle: "Company Liquidation in Dubai, UAE | TMG Global LLC",
    ogDescription:
      "TMG Global LLC offers professional company liquidation in dubai, uae — managing business closure, visa cancellation, financial settlements, and government approvals efficiently.",
    ogImage: "/assets/images/services/company-liquidation-in-dubai-uae.png",
    ogImageAlt: "company liquidation consultants in dubai uae",
    canonicalUrl: "https://tmgdubai.ae/service/company-liquidation-in-dubai-uae",
    robots: { index: true, follow: true },
  },

  offers: {
    "@type": "Offer",
    url: "https://tmgdubai.ae/service/company-liquidation-service-in-dubai",
    priceCurrency: "AED",
    availability: "https://schema.org/InStock"
  },

  serviceOutput: "Legally closed and deregistered company in Dubai",

  termsOfService: "https://tmgdubai.ae/terms-of-service",

  breadcrumb: [
    { position: 1, name: "Home", url: "https://tmgdubai.ae" },
    { position: 2, name: "Services", url: "https://tmgdubai.ae/services" },
    { position: 3, name: "Company Liquidation in Dubai, UAE", url: "https://tmgdubai.ae/service/company-liquidation-in-dubai-uae" }
  ],
    data: [
      {
        title: "Legally Close Your UAE Business",
        highlight: "with Confidence",
        description:
          "Company liquidation is a formal process of winding up business operations, settling debts, and distributing remaining assets to shareholders. In the UAE, it must be conducted in full compliance with legal requirements to avoid penalties.",
      },
      {
        title: "End-to-End Guidance",
        highlight: "for Smooth Closure",
        description:
          "TMG Global provides end-to-end guidance, from auditing your company records to submitting liquidation applications to the relevant authorities. Our team ensures a smooth, compliant closure that safeguards your reputation and legal standing.",
      },
      {
        title: "Navigate Complex Cases",
        highlight: "Professionally",
        description:
          "Whether your company is debt-free or has outstanding obligations, we navigate complex cases professionally. With TMG Global, you can close your business efficiently, freeing yourself from ongoing liabilities and regulatory concerns.",
      },
    ],
    banner: {
      heading: "Legally Close Your UAE Business with Confidence",
      subheading:
        "Navigate the complex process of company liquidation with our experts. We ensure full compliance with UAE regulations, protecting you from future liabilities.",
    },
    sections: [
      {
        id: "section1",
        title: "A Structured and Compliant Conclusion",
        headline: "What is Company Liquidation?",
        content: [
          "Company liquidation, also known as dissolution, involves formally ending your business, settling all debts, and distributing any remaining assets. The process is strictly regulated in the UAE and must be followed precisely to avoid fines, travel bans, or legal liability for shareholders.",
        ],
        image: "/assets/images/services/Business9.png",
      },
      {
        id: "section2",
        title: "Our Step-by-Step Liquidation Process",
        headline: "A Clear Path to Business Closure",
        content: [
          "TMG Global manages the entire procedure from start to finish:",
        ],
        services: [
          {
            id: 1,
            icon: "/assets/images/icons/service_img9.1.png",
            name: "Initial Audit & Feasibility",
            description: "Review company records, obligations, and debts.",
          },
          {
            id: 2,
            icon: "/assets/images/icons/service_img9.2.png",
            name: "Creditor Settlement & Announcements",
            description:
              "Legally settle outstanding debts and notify creditors.",
          },
          {
            id: 3,
            icon: "/assets/images/icons/service_img9.3.png",
            name: "Application to Authorities",
            description:
              "Submit liquidation applications to the DED or relevant Freezone.",
          },
          {
            id: 4,
            icon: "/assets/images/icons/service_img9.4.png",
            name: "Cancellation of Licenses & Visas",
            description: "Officially cancel trade licenses and employee visas.",
          },
          {
            id: 5,
            icon: "/assets/images/icons/service_img9.5.png",
            name: "Bank Account Closure",
            description:
              "Assist with closing corporate bank accounts properly.",
          },
        ],
      },
      {
        id: "section3",
        title: "Why Proper Liquidation is Critical",
        headline: "Avoid Costly Legal and Financial Consequences",
        content: [
          "With years of experience and strong local connections, TMG Global ensures a compliant and efficient liquidation process that protects your interests and legal standing.",
        ],
        features: [
          {
            id: 1,
            content: "Prevent future claims against shareholders.",
          },
          {
            id: 2,
            content: "Fulfill all legal obligations with UAE authorities.",
          },
          {
            id: 3,
            content:
              "Close your company knowing all steps are handled correctly.",
          },
          {
            id: 4,
            content:
              "We handle complex liquidation cases, including debt and dispute scenarios.",
          },
        ],
      },
      {
        id: "section4",
        title: "Frequently Asked Questions (FAQ)",
        headline: "Frequently Asked Questions",
        faqs: [
          {
            question: "How long does the liquidation process take?",
            answer:
              "It varies, typically 2-4 months for a debt-free company, depending on jurisdiction and complexity.",
          },
          {
            question: "What happens if I don't liquidate my company properly?",
            answer:
              "Improper closure can result in fines, travel bans for shareholders, and personal liability for company debts.",
          },
        ],
      },
    ],
  },
  {
    id: 10,
    slug: "document-attestation-service-dubai-uae",

    title: "DOCUMENT ATTESTATION SERVICES",
    heading: "Document Attestation and\nLegalization Services\nMOFA & Embassy",

    image: "/assets/images/services/document-attestation-service-dubai-uae.png",

    seo: {
    metaTitle: "Document Attestation Service Dubai, UAE | Fast and Reliable - TMG Global LLC",
    metaDescription:
      "TMG Global LLC provides fast and reliable document attestation service dubai, uae for personal, educational, and commercial certificates. Get MOFA and embassy attestations done easily with expert assistance.",
    keywords: [
      "document attestation service dubai, uae",
      "certificate attestation dubai",
      "mofa attestation uae",
      "embassy attestation dubai",
      "educational certificate attestation uae"
    ],
    ogTitle: "Document Attestation Service in Dubai, UAE | TMG Global LLC",
    ogDescription:
      "TMG Global LLC offers professional document attestation service in dubai, uae — covering MOFA, embassy, and certificate attestation for individuals and companies across the UAE.",
    ogImage: "/assets/images/services/document-attestation-service-dubai-uae.png",
    ogImageAlt: "document attestation consultants dubai uae",
    canonicalUrl: "https://tmgdubai.ae/service/document-attestation-service-dubai-uae",
    robots: { index: true, follow: true },
  },

  offers: {
    "@type": "Offer",
    url: "https://tmgdubai.ae/service/document-attestation-service-dubai-uae",
    priceCurrency: "AED",
    availability: "https://schema.org/InStock"
  },

  serviceOutput: "officially attested and verified documents for use in dubai and abroad",

  termsOfService: "https://tmgdubai.ae/terms-of-service",

  breadcrumb: [
    { position: 1, name: "Home", url: "https://tmgdubai.ae" },
    { position: 2, name: "Services", url: "https://tmgdubai.ae/services" },
    { position: 3, name: "Document Attestation Service in Dubai, UAE", url: "https://tmgdubai.ae/service/document-attestation-service-dubai-uae" }
  ],
    data: [
      {
        title: "Get Your Documents",
        highlight: "Legally Recognized in the UAE",
        description:
          "Document attestation is the process of verifying a document's authenticity so it can be legally recognized in the UAE. It involves validation from the issuing country, embassy legalization, and final attestation from the UAE Ministry of Foreign Affairs (MOFA).",
      },
      {
        title: "End-to-End Attestation",
        highlight: "Process Management",
        description:
          "At TMG Global, we manage the entire attestation process to save you time and effort. From educational degrees and professional certificates to personal and commercial documents, we ensure that each document meets UAE legal standards.",
      },
      {
        title: "Expert Handling for",
        highlight: "All Document Types",
        description:
          "Our expert team handles every step, including document verification, embassy coordination, and MOFA submission. Whether you need attestation for visa, employment, or corporate purposes, TMG Global guarantees accuracy, speed, and secure handling.",
      },
    ],
    banner: {
      heading: "Get Your Documents Legally Recognized in the UAE",
      subheading:
        "We simplify the complex chain of document attestation for educational certificates, personal documents, and commercial papers. End-to-end service guaranteed.",
    },
    sections: [
      {
        id: "section1",
        title: "Navigate the Attestation Maze with Ease",
        headline: "What is Document Attestation?",
        content: [
          "Document attestation is the official certification that verifies a document as genuine for use in the UAE. The process ensures that foreign-issued documents, such as degrees, birth certificates, or commercial papers, are recognized legally by UAE authorities.",
        ],
        image: "/assets/images/services/Business10.png",
      },
      {
        id: "section2",
        title: "Our End-to-End Attestation Services",
        headline: "We Handle All Types of Documents",
        content: ["TMG Global provides a comprehensive service covering:"],
        services: [
          {
            id: 1,
            icon: "/assets/images/icons/service_img10.1.png",
            name: "Educational Documents",
            description:
              "Degrees, diplomas, and school certificates for visas, employment, and higher education.",
          },
          {
            id: 2,
            icon: "/assets/images/icons/service_img10.2.png",
            name: "Personal Documents",
            description: "Birth, marriage, and death certificates.",
          },
          {
            id: 3,
            icon: "/assets/images/icons/service_img10.3.png",
            name: "Commercial Documents",
            description:
              "Powers of attorney, company incorporation documents, invoices, and contracts.",
          },
          {
            id: 4,
            icon: "/assets/images/icons/service_img10.4.png",
            name: "Country-Specialized Services",
            description:
              "Fast-track attestation for India, Pakistan, UK, Philippines, and other countries.",
          },
        ],
      },
      {
        id: "section3",
        title: "Why Choose TMG Global for Attestation?",
        headline: "The Reliable and Efficient Choice",
        content: [
          "With years of experience and strong local connections, TMG Global ensures a faster, simpler, and more transparent document attestation experience. We're committed to delivering professional guidance and reliable execution at every stage.",
        ],
        features: [
          {
            id: 1,
            content: "Avoid multiple visits to different offices and agencies.",
          },
          {
            id: 2,
            content: "Documents are prepared correctly to prevent rejection.",
          },
          {
            id: 3,
            content:
              "Original documents are managed safely and confidentially.",
          },
          {
            id: 4,
            content:
              "Receive updates at every stage of the attestation process.",
          },
        ],
      },
      {
        id: "section4",
        title: "Frequently Asked Questions (FAQ)",
        headline: "Frequently Asked Questions",
        faqs: [
          {
            question:
              "What is the difference between attestation and authentication?",
            answer:
              "Authentication is the initial certification in the home country. Attestation is the complete process including embassy legalization and MOFA approval for UAE recognition.",
          },
          {
            question: "How long does the attestation process take?",
            answer:
              "Processing time varies by document type and country of origin, typically ranging from 1 to 3 weeks.",
          },
        ],
      },
    ],
  },
  {
    id: 11,
    slug: "legal-translation-services-in-dubai-uae",

    title: "LEGAL TRANSLATION SERVICES",
    heading:
      "Professional Legal Translation\nServices in UAE MOJ Approved \nTranslation",

    image:
      "/assets/images/services/legal-translation-services-in-dubai-uae.png",

     seo: {
    metaTitle: "Legal Translation Services in Dubai, UAE | Certified Translators - TMG Global LLC",
    metaDescription:
      "TMG Global LLC provides certified legal translation services in dubai, uae approved by the Ministry of Justice. Get accurate translations for contracts, court documents, and business papers with expert translators.",
    keywords: [
      "legal translation services in dubai, uae",
      "certified translation dubai",
      "arabic english translation uae",
      "official legal translation dubai",
      "ministry of justice approved translation"
    ],
    ogTitle: "Legal Translation Services in Dubai, UAE | TMG Global LLC",
    ogDescription:
      "TMG Global LLC offers certified legal translation services in dubai, uae - delivering accurate and ministry-approved translations for contracts, agreements, and legal documents.",
    ogImage: "/assets/images/services/legal-translation-services-in-dubai-uae.png",
    ogImageAlt: "certified legal translation office in dubai uae",
    canonicalUrl: "https://tmgdubai.ae/service/legal-translation-services-in-dubai-uae",
    robots: { index: true, follow: true },
  },

  offers: {
    "@type": "Offer",
    url: "https://tmgdubai.ae/service/legal-translation-services-in-dubai-uae",
    priceCurrency: "AED",
    availability: "https://schema.org/InStock"
  },

  serviceOutput: "certified legal translations approved by the uae ministry of justice",

  termsOfService: "https://tmgdubai.ae/terms-of-service",

  breadcrumb: [
    { position: 1, name: "Home", url: "https://tmgdubai.ae" },
    { position: 2, name: "Services", url: "https://tmgdubai.ae/services" },
    { position: 3, name: "Legal Translation Services in Dubai, UAE", url: "https://tmgdubai.ae/service/legal-translation-services-in-dubai-uae" }
  ],
    data: [
      {
        title: "100% Accurate,",
        highlight: "Court-Accepted Legal Translations",
        description:
          "Legal translations require precision to ensure every term maintains its original meaning. Mistakes can invalidate contracts, affect visa applications, or lead to disputes. TMG Global provides certified translations that are accepted by courts, government departments, and banks in the UAE.",
      },
      {
        title: "MOJ-Certified",
        highlight: "Translators",
        description:
          "Our team specializes in translating contracts, corporate documents, personal certificates, and technical reports. Each translation is performed by experts familiar with UAE legal and regulatory requirements, ensuring complete compliance.",
      },
      {
        title: "Fast & Reliable",
        highlight: "Translation Service",
        description:
          "With TMG Global, you gain a fast, reliable, and legally valid translation service. From document review to MOJ certification, we handle all steps, allowing you to focus on your business or personal needs.",
      },
    ],
    banner: {
      heading: "100% Accurate, Court-Accepted Legal Translations",
      subheading:
        "Get your legal, technical, and corporate documents translated by MOJ-certified translators. Guaranteed acceptance across all UAE authorities.",
    },
    sections: [
      {
        id: "section1",
        title: "Precision and Legal Validity are Paramount",
        headline: "What are Legal Translations?",
        content: [
          "Legal translation involves converting documents from one language to another while preserving exact meaning and legal effect. Certified translations are mandatory for all UAE government transactions, court proceedings, visa applications, and corporate filings.",
        ],
        image: "/assets/images/services/Business11.png",
      },
      {
        id: "section2",
        title: "Our Certified Translation Expertise",
        headline: "Documents We Translate",
        content: ["TMG Global provides certified translations for:"],
        services: [
          {
            id: 1,
            icon: "/assets/images/icons/service_img11.1.png",
            name: "Legal & Court Documents",
            description: "Court rulings, pleadings, and powers of attorney.",
          },
          {
            id: 2,
            icon: "/assets/images/icons/service_img11.2.png",
            name: "Corporate Documents",
            description:
              "MOAs, incorporation certificates, board resolutions, and contracts.",
          },
          {
            id: 3,
            icon: "/assets/images/icons/service_img11.3.png",
            name: "Personal Documents",
            description:
              "Marriage certificates, birth certificates, academic transcripts.",
          },
          {
            id: 4,
            icon: "/assets/images/icons/service_img11.4.png",
            name: "Technical & Financial Documents",
            description:
              "Product manuals, audit reports, bank statements, and reports.",
          },
        ],
      },
      {
        id: "section3",
        title: "The TMG Global Translation Standard",
        headline: "Why 'Certified' Makes All the Difference",
        content: [
          "With years of experience and strong local connections, TMG Global ensures accurate, legally compliant translations that are accepted by all UAE authorities and courts.",
        ],
        features: [
          {
            id: 1,
            content:
              "Translations are stamped and signed by Ministry of Justice-approved translators.",
          },
          {
            id: 2,
            content: "Legal terminology and context are preserved precisely.",
          },
          {
            id: 3,
            content: "High-quality translations delivered within 24-48 hours.",
          },
          {
            id: 4,
            content: "Arabic, English, Urdu, Hindi, French, Spanish, and more.",
          },
        ],
      },
      {
        id: "section4",
        title: "Frequently Asked Questions (FAQ)",
        headline: "Frequently Asked Questions",
        faqs: [
          {
            question:
              "What is the difference between a certified and a normal translation?",
            answer:
              "Certified translations are officially recognized by the UAE Ministry of Justice with a seal and signature. Normal translations are not legally recognized for official purposes.",
          },
          {
            question: "Can I use a normal translation for visa applications?",
            answer:
              "No. UAE authorities, including immigration and MOFA, require certified translations for all official non-Arabic documents.",
          },
        ],
      },
    ],
  },
  {
    id: 12,
    slug: "insurance-and-vat-services-dubai-uae",

    title: "INSURANCE & VAT SERVICES",
    heading: "Business Insurance and\nVAT Services\nFast, Compliant, Reliable",

    image:
      "/assets/images/services/insurance-and-vat-services-dubai-uae.png",

     seo: {
    metaTitle: "Insurance and VAT Services Dubai, UAE | TMG Global LLC",
    metaDescription:
      "TMG Global LLC provides professional insurance and vat services dubai, uae including vat registration, filing, compliance consulting, and customized corporate insurance solutions for businesses across the UAE.",
    keywords: [
      "insurance and vat services dubai, uae",
      "vat registration dubai",
      "vat filing uae",
      "business insurance services dubai",
      "vat consultancy dubai"
    ],
    ogTitle: "Insurance and VAT Services Dubai, UAE | TMG Global LLC",
    ogDescription:
      "TMG Global LLC offers expert insurance and vat services dubai, uae — providing vat registration, tax filing, and corporate insurance solutions for complete business support.",
    ogImage: "/assets/images/services/insurance-and-vat-services-dubai-uae.png",
    ogImageAlt: "insurance and vat consultants in dubai uae",
    canonicalUrl: "https://tmgdubai.ae/service/insurance-and-vat-services-dubai-uae",
    robots: { index: true, follow: true },
  },

  offers: {
    "@type": "Offer",
    url: "https://tmgdubai.ae/service/insurance-and-vat-services-dubai-uae",
    priceCurrency: "AED",
    availability: "https://schema.org/InStock"
  },

  serviceOutput: "vat-compliant and fully insured business solutions in dubai, uae",

  termsOfService: "https://tmgdubai.ae/terms-of-service",

  breadcrumb: [
    { position: 1, name: "Home", url: "https://tmgdubai.ae" },
    { position: 2, name: "Services", url: "https://tmgdubai.ae/services" },
    { position: 3, name: "Insurance and VAT Services Dubai, UAE", url: "https://tmgdubai.ae/service/insurance-and-vat-services-dubai-uae" }
  ],
    data: [
      {
        title: "Secure Your Business",
        highlight: "and Ensure Tax Compliance",
        description:
          "Operating a business in the UAE requires adherence to strict insurance and VAT regulations. TMG Global helps you navigate these requirements seamlessly, reducing risks and ensuring full compliance with local laws.",
      },
      {
        title: "Tailored Solutions for",
        highlight: "Corporate Protection",
        description:
          "We provide tailored solutions for corporate insurance, including employee medical coverage, property, and liability protection. Additionally, our VAT advisory team supports registration, filing, compliance checks, and deregistration if needed.",
      },
      {
        title: "Expert Guidance for",
        highlight: "Confident Growth",
        description:
          "By partnering with TMG Global, you gain access to expert guidance, competitive rates, and timely execution of all insurance and VAT obligations, letting you focus on growing your business confidently.",
      },
    ],
    banner: {
      heading: "Secure Your Business and Ensure Tax Compliance",
      subheading:
        "From mandatory medical insurance to complex VAT filing, we provide integrated solutions to protect your assets and keep your business fully compliant.",
    },
    sections: [
      {
        id: "section1",
        title: "Proactive Protection for Your Enterprise",
        headline: "Navigate Insurance and VAT with Ease",
        content: [
          "Our services combine regulatory expertise and practical solutions, ensuring your business avoids penalties while maintaining operational efficiency. Whether you are a startup or an established company, TMG Global helps you stay compliant and secure.",
        ],
        image: "/assets/images/services/Business12.png",
      },
      {
        id: "section2",
        title: "Our Comprehensive Advisory Services",
        headline: "Tailored Solutions for Your Needs",
        content: [
          "We provide comprehensive insurance and VAT services to keep your business protected and compliant:",
        ],
        services: [
          {
            id: 1,
            icon: "/assets/images/icons/service_img12.1.png",
            name: "Employee Medical Insurance",
            description:
              "Mandatory coverage for visa processing and employee welfare.",
          },
          {
            id: 2,
            icon: "/assets/images/icons/service_img12.2.png",
            name: "Vehicle & Fleet Insurance",
            description: "Comprehensive coverage for company vehicles.",
          },
          {
            id: 3,
            icon: "/assets/images/icons/service_img12.3.png",
            name: "Property & Liability Insurance",
            description:
              "Protect office spaces, warehouses, and operations from third-party claims.",
          },
          {
            id: 4,
            icon: "/assets/images/icons/service_img12.4.png",
            name: "VAT Registration",
            description: "Registration with the Federal Tax Authority (FTA).",
          },
          {
            id: 5,
            icon: "/assets/images/icons/service_img12.5.png",
            name: "VAT Return Filing & Submission",
            description: "Accurate, timely submissions to maintain compliance.",
          },
          {
            id: 6,
            icon: "/assets/images/icons/service_img12.6.png",
            name: "VAT Compliance Health Check",
            description:
              "Review systems to avoid penalties and ensure accuracy.",
          },
        ],
      },
      {
        id: "section3",
        title: "The Value of Our Partnership",
        headline: "More Than Just a Policy or a Number",
        content: [
          "With years of experience and strong industry partnerships, TMG Global ensures your business remains fully compliant while optimizing costs and managing risks effectively.",
        ],
        features: [
          {
            id: 1,
            content: "Protect your business from unforeseen financial losses.",
          },
          {
            id: 2,
            content: "Ensure compliance with mandatory insurance and VAT laws.",
          },
          {
            id: 3,
            content:
              "Clear guidance on complex tax and insurance requirements.",
          },
          {
            id: 4,
            content:
              "Access competitive premiums and service fees through our partner network.",
          },
        ],
      },
      {
        id: "section4",
        title: "Frequently Asked Questions (FAQ)",
        headline: "Frequently Asked Questions",
        faqs: [
          {
            question:
              "Is medical insurance mandatory for all employees in the UAE?",
            answer:
              "Yes. UAE law requires every company to provide health insurance for all employees, with specific mandates in Dubai and Abu Dhabi.",
          },
          {
            question: "What is the VAT registration threshold in the UAE?",
            answer:
              "Mandatory registration is required if taxable supplies and imports exceed AED 375,000 per year.",
          },
        ],
      },
    ],
  },
  {
    id: 13,
    slug: "bank-account-opening-in-dubai-uae",

    title: "Bank Account Opening ",
    heading: "Corporate Bank Account Opening\nUAE Fast, Simple, Secure",

    image: "/assets/images/services/bank-account-opening-in-dubai-uae.png",

    seo: {
    metaTitle: "Bank Account Opening in Dubai, UAE | Corporate and Personal Accounts - TMG Global LLC",
    metaDescription:
      "TMG Global LLC offers expert bank account opening in dubai, uae for businesses and individuals. Get assistance with documentation, compliance, and approvals for smooth UAE bank account setup.",
    keywords: [
      "bank account opening in dubai, uae",
      "business bank account dubai",
      "uae bank account opening",
      "corporate bank account setup dubai",
      "open bank account uae"
    ],
    ogTitle: "Bank Account Opening in Dubai, UAE | TMG Global LLC",
    ogDescription:
      "TMG Global LLC provides professional bank account opening in dubai, uae — helping investors and companies with documentation, compliance, and approvals for UAE bank accounts.",
    ogImage: "/assets/images/services/bank-account-opening-in-dubai-uae.png",
    ogImageAlt: "bank account opening consultants in dubai uae",
    canonicalUrl: "https://tmgdubai.ae/service/bank-account-opening-in-dubai-uae",
    robots: { index: true, follow: true },
  },

  offers: {
    "@type": "Offer",
    url: "https://tmgdubai.ae/service/bank-account-opening-in-dubai-uae",
    priceCurrency: "AED",
    availability: "https://schema.org/InStock"
  },

  serviceOutput: "successfully opened corporate or personal bank account in dubai, uae",

  termsOfService: "https://tmgdubai.ae/terms-and-conditions",

  breadcrumb: [
    { position: 1, name: "Home", url: "https://tmgdubai.ae" },
    { position: 2, name: "Services", url: "https://tmgdubai.ae/services" },
    { position: 3, name: "Bank Account Opening in Dubai, UAE", url: "https://tmgdubai.ae/service/bank-account-opening-in-dubai-uae" }
  ],
    data: [
      {
        title: "Simplify Your Corporate",
        highlight: "Banking in the UAE",
        description:
          "Opening a corporate bank account in the UAE is a crucial step for your business operations, but the process can be complex due to strict banking regulations. TMG Global ensures a smooth, efficient experience by guiding you through every requirement.",
      },
      {
        title: "Right Bank Selection",
        highlight: "for Your Business Needs",
        description:
          "We help businesses select the right bank based on their industry, structure, and needs, ensuring the highest chance of approval. Our team prepares and reviews your application documents to meet bank standards.",
      },
      {
        title: "End-to-End Banking",
        highlight: "Support",
        description:
          "From liaising with bank officials to supporting your introductory meetings, TMG Global manages the entire process. This saves time, reduces frustration, and allows you to focus on growing your business while your banking setup is handled professionally.",
      },
    ],
    banner: {
      heading: "Simplify Your Corporate Banking in the UAE",
      subheading:
        "Navigate stringent bank requirements with our expert assistance. We guide you to the right bank and prepare your application for a higher chance of success.",
    },
    sections: [
      {
        id: "section1",
        title: "Unlock Your Business's Financial Potential",
        headline: "A Critical Step for Your Business Operations",
        content: [
          "A corporate bank account is essential for managing finances, receiving payments, and building credibility. With the right guidance, your account can be opened efficiently, providing operational flexibility and access to UAE banking services.",
        ],
        image: "/assets/images/services/Business13.png",
      },
      {
        id: "section2",
        title: "Our Bank Account Opening Support",
        headline: "Your Bridge to UAE Banking",
        content: [
          "We provide end-to-end assistance for corporate bank account opening:",
        ],
        services: [
          {
            id: 1,
            icon: "/assets/images/icons/service_img13.1.png",
            name: "Bank Selection Advisory",
            description:
              "Match your business profile with the most suitable banks.",
          },
          {
            id: 2,
            icon: "/assets/images/icons/service_img13.2.png",
            name: "Document Preparation & Review",
            description: "Ensure your application is complete and compelling.",
          },
          {
            id: 3,
            icon: "/assets/images/icons/service_img13.3.png",
            name: "Application Submission & Follow-up",
            description:
              "Liaise directly with the bank's relationship managers.",
          },
          {
            id: 4,
            icon: "/assets/images/icons/service_img13.4.png",
            name: "Introductory Meetings",
            description:
              "Prepare you for interviews and provide ongoing support.",
          },
        ],
      },
      {
        id: "section3",
        title: "Why Use a Professional Service?",
        headline: "Overcome Common Banking Hurdles",
        content: [
          "With extensive experience in UAE banking requirements and strong relationships with financial institutions, TMG Global significantly increases your chances of successful account opening while saving you time and effort.",
        ],
        features: [
          {
            id: 1,
            content:
              "Expertise in understanding bank expectations and requirements.",
          },
          {
            id: 2,
            content:
              "Avoid repeated submissions and rejections with proper preparation.",
          },
          {
            id: 3,
            content:
              "Leverage our relationships with local and international banks.",
          },
          {
            id: 4,
            content:
              "Assistance for businesses in high-risk sectors or with specific nationality considerations.",
          },
        ],
      },
      {
        id: "section4",
        title: "Frequently Asked Questions (FAQ)",
        headline: "Frequently Asked Questions",
        faqs: [
          {
            question:
              "What documents are needed to open a corporate bank account?",
            answer:
              "Typically, you need your company license, MOA, shareholder/passport copies, proof of address, and business plan. Requirements vary by bank.",
          },
          {
            question: "How long does it take to open an account?",
            answer:
              "The process can take 2 to 8 weeks, depending on the bank and company structure complexity.",
          },
        ],
      },
    ],
  },
  {
    id: 14,
    slug: "typing-services-dubai-uae",

    title: "TYPING SERVICES",
    heading: "Typing Services in Dubai\nFast, Accurate, Confidential",

    image: "/assets/images/services/typing-services-dubai-uae.png",

    seo: {
    metaTitle: "Typing Services Dubai, UAE | Fast and Accurate Document Processing - TMG Global LLC",
    metaDescription:
      "TMG Global LLC provides professional typing services dubai, uae for visa applications, government forms, and business documentation. Get fast, accurate, and reliable document typing support across the UAE.",
    keywords: [
      "typing services dubai, uae",
      "visa typing dubai",
      "emirates id typing uae",
      "business documentation typing dubai",
      "government typing services dubai"
    ],
    ogTitle: "Typing Services Dubai, UAE | TMG Global LLC",
    ogDescription:
      "TMG Global LLC offers expert typing services dubai, uae — covering visa applications, emirates id forms, and government documentation typing with speed and accuracy.",
    ogImage: "/assets/images/services/typing-services-dubai-uae.png",
    ogImageAlt: "typing services and documentation support in dubai uae",
    canonicalUrl: "https://tmgdubai.ae/service/typing-services-dubai-uae",
    robots: { index: true, follow: true },
  },

  offers: {
    "@type": "Offer",
    url: "https://tmgdubai.ae/service/typing-services-dubai-uae",
    priceCurrency: "AED",
    availability: "https://schema.org/InStock"
  },

  serviceOutput: "professionally prepared and approved government documents in dubai, uae",

  termsOfService: "https://tmgdubai.ae/terms-of-service",

  breadcrumb: [
    { position: 1, name: "Home", url: "https://tmgdubai.ae" },
    { position: 2, name: "Services", url: "https://tmgdubai.ae/services" },
    { position: 3, name: "Typing Services Dubai, UAE", url: "https://tmgdubai.ae/service/typing-services-dubai-uae" }
  ],
    data: [
      {
        title: "Accurate & Fast",
        highlight: "Typing Services for Your Business",
        description:
          "In today's fast-paced business environment, time is valuable. TMG Global offers professional typing services that help you save effort while maintaining accuracy and confidentiality. Whether it's legal, corporate, or personal documents, our team delivers precise results.",
      },
      {
        title: "Wide Range of",
        highlight: "Typing Needs Covered",
        description:
          "We cater to a wide range of typing needs, from forms and contracts to reports and presentations. Each document is handled with care, ensuring formatting, spelling, and grammar are perfect.",
      },
      {
        title: "Fast Turnaround",
        highlight: "Without Compromising Quality",
        description:
          "Our typing services are designed for individuals, startups, and corporations who require fast turnaround without compromising quality. TMG Global ensures every document is ready for submission, printing, or digital use, giving you peace of mind and efficiency.",
      },
    ],
    banner: {
      heading: "Accurate & Fast Typing Services for Your Business",
      subheading:
        "Professional typing solutions for all your documents, forms, and official paperwork. Save time and ensure accuracy with TMG Global's expert team.",
    },
    sections: [
      {
        id: "section1",
        title: "Why Choose Typing Services?",
        headline: "Enhance Productivity and Accuracy",
        content: [
          "Typing services help businesses and individuals save time, reduce errors, and streamline workflows. Professional typing ensures that your documents are clear, standardized, and ready for official or internal use.",
        ],
        image: "/assets/images/services/Business14.png",
      },
      {
        id: "section2",
        title: "Our Typing Service Offerings",
        headline: "Comprehensive Document Typing Solutions",
        content: [
          "TMG Global offers a complete range of professional typing services:",
        ],
        services: [
          {
            id: 1,
            icon: "/assets/images/icons/service_img14.1.png",
            name: "Legal Document Typing",
            description:
              "Contracts, agreements, affidavits, and court documents.",
          },
          {
            id: 2,
            icon: "/assets/images/icons/service_img14.2.png",
            name: "Business Document Typing",
            description:
              "Reports, presentations, proposals, and corporate correspondence.",
          },
          {
            id: 3,
            icon: "/assets/images/icons/service_img14.3.png",
            name: "Form Filling & Application Typing",
            description: "Government and institutional forms.",
          },
          {
            id: 4,
            icon: "/assets/images/icons/service_img14.4.png",
            name: "Data Entry & Digital Formatting",
            description:
              "Converting handwritten or scanned documents into digital format.",
          },
        ],
      },
      {
        id: "section3",
        title: "The TMG Global Advantage",
        headline: "Why Our Typing Services Stand Out",
        content: [
          "With our commitment to quality and efficiency, TMG Global delivers typing services that meet the highest standards of accuracy and professionalism.",
        ],
        features: [
          {
            id: 1,
            content: "Every document is carefully checked for errors.",
          },
          {
            id: 2,
            content: "Your sensitive information is handled securely.",
          },
          {
            id: 3,
            content: "Fast turnaround without compromising quality.",
          },
          {
            id: 4,
            content: "Ready-to-submit documents with proper layout and design.",
          },
        ],
      },
      {
        id: "section4",
        title: "Frequently Asked Questions (FAQ)",
        headline: "Frequently Asked Questions",
        faqs: [
          {
            question: "Can you handle confidential documents?",
            answer:
              "Yes, TMG Global maintains strict confidentiality for all documents handled.",
          },
          {
            question: "How long does it take to type documents?",
            answer:
              "Turnaround depends on the length and complexity but is generally fast, with priority services available for urgent requests.",
          },
        ],
      },
    ],
  },
  {
    id: 15,
    slug: "government-approvals-in-the-uae",

    title: "GOVERNMENT APPROVAL SERVICES",
    heading: "UAE Government\nApprovals Made Simple\nFast, Reliable, Compliant",

    image: "/assets/images/services/government-approvals-in-the-uae.png",

   seo: {
    metaTitle: "Government Approvals in the UAE | Business Setup and Licensing - TMG Global LLC",
    metaDescription:
      "TMG Global LLC provides complete support for government approvals in the uae. Get assistance with trade licenses, activity permits, and documentation approvals from all UAE authorities for smooth business setup.",
    keywords: [
      "government approvals in the uae",
      "business approvals dubai",
      "trade license approval uae",
      "dubai municipality approvals",
      "ded and chamber approvals uae"
    ],
    ogTitle: "Government Approvals in the UAE | TMG Global LLC",
    ogDescription:
      "TMG Global LLC offers expert assistance for government approvals in the uae — including trade licenses, permits, and regulatory approvals from UAE authorities for businesses and investors.",
    ogImage: "/assets/images/services/government-approvals-in-the-uae.png",
    ogImageAlt: "government approvals consultants in dubai uae",
    canonicalUrl: "https://tmgdubai.ae/service/government-approvals-in-the-uae",
    robots: { index: true, follow: true },
  },

  offers: {
    "@type": "Offer",
    url: "https://tmgdubai.ae/service/government-approvals-in-the-uae",
    priceCurrency: "AED",
    availability: "https://schema.org/InStock"
  },

  serviceOutput: "approved business licenses and regulatory permits in the uae",

  termsOfService: "https://tmgdubai.ae/terms-of-service",

  breadcrumb: [
    { position: 1, name: "Home", url: "https://tmgdubai.ae" },
    { position: 2, name: "Services", url: "https://tmgdubai.ae/services" },
    { position: 3, name: "Government Approvals in the UAE", url: "https://tmgdubai.ae/service/government-approvals-in-the-uae" }
  ],
    data: [
      {
        title: "Streamlined Government",
        highlight: "Approvals for Your Business",
        description:
          "Getting the necessary government approvals is crucial for businesses to operate legally in the UAE. TMG Global simplifies the process, managing all applications and follow-ups with the relevant authorities.",
      },
      {
        title: "Expert Regulatory",
        highlight: "Compliance Assurance",
        description:
          "Our experts ensure your business meets all regulatory requirements, reducing delays and avoiding penalties. We handle approvals across multiple government departments, giving you confidence and peace of mind.",
      },
      {
        title: "Complete Support from",
        highlight: "Document to Approval",
        description:
          "From licensing and permits to special clearances, TMG Global acts as your trusted partner, providing complete support from document preparation to final approval. Our goal is to make your business compliant without the hassle of navigating complex bureaucracy.",
      },
    ],
    banner: {
      heading: "Streamlined Government Approvals for Your Business",
      subheading:
        "Navigate complex UAE regulations with ease. TMG Global provides end-to-end government approval services for businesses, ensuring compliance and timely completion.",
    },
    sections: [
      {
        id: "section1",
        title: "Why Government Approvals Matter",
        headline: "Stay Compliant, Avoid Delays",
        content: [
          "Government approvals are mandatory for operating legally in the UAE. Ensuring accurate and timely submissions protects your business from fines, penalties, or operational disruptions.",
        ],
        image: "/assets/images/services/Business15.png",
      },
      {
        id: "section2",
        title: "Our Government Approval Services",
        headline: "Comprehensive Solutions for All Approvals",
        content: [
          "TMG Global assists with a wide range of government approval services:",
        ],
        services: [
          {
            id: 1,
            icon: "/assets/images/icons/service_img15.1.png",
            name: "Business Licenses & Renewals",
            description:
              "Fast-track your commercial, professional, or industrial licenses.",
          },
          {
            id: 2,
            icon: "/assets/images/icons/service_img15.2.png",
            name: "Municipality Approvals",
            description:
              "Secure permits and clearances for your office or facility.",
          },
          {
            id: 3,
            icon: "/assets/images/icons/service_img15.3.png",
            name: "Special Regulatory Clearances",
            description:
              "Handle industry-specific approvals (health, education, trading, etc.).",
          },
          {
            id: 4,
            icon: "/assets/images/icons/service_img15.4.png",
            name: "Government Document Clearance",
            description:
              "Submission, follow-up, and collection of all official paperwork.",
          },
          {
            id: 5,
            icon: "/assets/images/icons/service_img15.5.png",
            name: "External Approvals",
            description:
              "Liaison with ministries, authorities, and regulatory bodies for specialized approvals.",
          },
        ],
      },
      {
        id: "section3",
        title: "The TMG Global Advantage",
        headline: "Why Our Approval Services Are Trusted",
        content: [
          "With extensive experience and strong relationships with UAE authorities, TMG Global ensures your government approval process is smooth, efficient, and fully compliant.",
        ],
        features: [
          {
            id: 1,
            content: "Deep understanding of UAE regulations and requirements.",
          },
          {
            id: 2,
            content: "Reduce waiting times with proactive government liaison.",
          },
          {
            id: 3,
            content: "All documents and forms are prepared error-free.",
          },
          {
            id: 4,
            content: "Sensitive business information is handled securely.",
          },
        ],
      },
      {
        id: "section4",
        title: "Frequently Asked Questions (FAQ)",
        headline: "Frequently Asked Questions",
        faqs: [
          {
            question: "Can TMG Global handle approvals for all business types?",
            answer:
              "Yes, we assist across Mainland, Freezone, and Offshore businesses, including specific industry approvals.",
          },
          {
            question: "How long does the government approval process take?",
            answer:
              "Timelines vary depending on the type of approval and authority but are typically expedited through our services.",
          },
        ],
      },
    ],
  },
  {
    id: 16,
    slug: "medical-and-emirates-id-services-dubai-uae",

    title: "MEDICAL & EMIRATES ID SERVICES",
    heading: "Medical and Emirates ID Services\nFast, Reliable, Compliant",

    image:
      "/assets/images/services/medical-and-emirates-id-services-dubai-uae.png",

    seo: {
    metaTitle: "Medical and Emirates ID Services Dubai, UAE | Fast Processing - TMG Global LLC",
    metaDescription:
      "TMG Global LLC offers fast and reliable medical and emirates id services dubai, uae. Get complete assistance for visa medical tests, emirates id typing, and renewal services for individuals and companies.",
    keywords: [
      "medical and emirates id services dubai, uae",
      "emirates id typing dubai",
      "medical test for visa uae",
      "emirates id renewal dubai",
      "visa medical services uae"
    ],
    ogTitle: "Medical and Emirates ID Services Dubai, UAE | TMG Global LLC",
    ogDescription:
      "TMG Global LLC provides professional medical and emirates id services dubai, uae — including visa medical tests, id typing, and renewal support for fast processing.",
    ogImage: "/assets/images/services/medical-and-emirates-id-services-dubai-uae.png",
    ogImageAlt: "medical and emirates id typing services in dubai uae",
    canonicalUrl: "https://tmgdubai.ae/service/medical-and-emirates-id-services-dubai-uae",
    robots: { index: true, follow: true },
  },

  // -----------------------------
  // Extra SEO data (used by layout)
  // -----------------------------

  offers: {
    "@type": "Offer",
    url: "https://tmgdubai.ae/service/medical-and-emirates-id-services-in-dubai-uae",
    priceCurrency: "AED",
    availability: "https://schema.org/InStock"
  },

  serviceOutput: "completed medical fitness and emirates id application in dubai, uae",

  termsOfService: "https://tmgdubai.ae/terms-of-service",



  breadcrumb: [
    { position: 1, name: "Home", url: "https://tmgdubai.ae" },
    { position: 2, name: "Services", url: "https://tmgdubai.ae/services" },
    { position: 3, name: "Medical and Emirates ID Services Dubai, UAE", url: "https://tmgdubai.ae/service/medical-and-emirates-id-services-dubai-uae" }
  ],
    data: [
      {
        title: "Fast & Efficient",
        highlight: "Medical & Emirates ID Services",
        description:
          "Medical fitness and Emirates ID registration are essential steps for anyone living, working, or investing in the UAE. TMG Global streamlines the entire process, handling appointments, submissions, and follow-ups with government authorities.",
      },
      {
        title: "Accuracy & Compliance",
        highlight: "Guaranteed",
        description:
          "Our experienced team ensures accuracy and compliance, reducing delays and providing timely issuance or renewal of your Emirates ID. Whether you are an individual, employee, or investor, we make the procedure smooth and stress-free.",
      },
      {
        title: "End-to-End Support",
        highlight: "for Individuals & Companies",
        description:
          "From coordinating medical tests to submitting applications to the Federal Authority for Identity and Citizenship (ICA), TMG Global is your trusted partner. Our goal is to save you time, eliminate confusion, and ensure full compliance with UAE regulations.",
      },
    ],
    banner: {
      heading: "Fast & Efficient Medical & Emirates ID Services",
      subheading:
        "Simplify your visa and residency compliance. TMG Global provides end-to-end support for medical fitness tests, Emirates ID registration, and renewals for individuals and corporate clients.",
    },
    sections: [
      {
        id: "section1",
        title: "Why Medical & Emirates ID Services Matter",
        headline: "Stay Compliant with UAE Residency Requirements",
        content: [
          "A valid Emirates ID and medical clearance are mandatory for residency visas, employment visas, and long-term stay in the UAE. Timely and accurate processing avoids fines, delays, or visa issues.",
        ],
        image: "/assets/images/services/Business16.png",
      },
      {
        id: "section2",
        title: "Our Complete Services",
        headline: "End-to-End Support for Individuals & Companies",
        content: ["TMG Global provides comprehensive services including:"],
        services: [
          {
            id: 1,
            icon: "/assets/images/icons/service_img16.1.png",
            name: "Medical Fitness Tests",
            description:
              "Schedule, coordinate, and submit results for visa purposes.",
          },
          {
            id: 2,
            icon: "/assets/images/icons/service_img16.2.png",
            name: "Emirates ID Issuance",
            description:
              "Apply for new IDs or renew existing ones efficiently.",
          },
          {
            id: 3,
            icon: "/assets/images/icons/service_img16.3.png",
            name: "Visa Medical Clearances",
            description:
              "Ensure all necessary documents are prepared for visa approval.",
          },
          {
            id: 4,
            icon: "/assets/images/icons/service_img16.4.png",
            name: "Corporate Employee Services",
            description:
              "Manage multiple employee IDs and medical requirements for companies.",
          },
          {
            id: 5,
            icon: "/assets/images/icons/service_img16.5.png",
            name: "Government Liaison",
            description:
              "Direct coordination with ICA, Ministry of Health, and authorized medical centers.",
          },
        ],
      },
      {
        id: "section3",
        title: "The TMG Global Advantage",
        headline: "Why Choose Us for Your ID & Medical Services",
        content: [
          "With our extensive experience and strong relationships with UAE authorities, TMG Global ensures your medical and Emirates ID processes are completed quickly, accurately, and in full compliance.",
        ],
        features: [
          {
            id: 1,
            content: "Reduce processing time with expert coordination.",
          },
          {
            id: 2,
            content:
              "Ensure all forms, documents, and medical results are error-free.",
          },
          {
            id: 3,
            content:
              "Book appointments and handle submissions with minimal effort.",
          },
          {
            id: 4,
            content:
              "Efficient handling for companies with multiple employees.",
          },
        ],
      },
      {
        id: "section4",
        title: "Frequently Asked Questions (FAQ)",
        headline: "Frequently Asked Questions",
        faqs: [
          {
            question: "How long does it take to get an Emirates ID?",
            answer:
              "Typically, Emirates ID issuance takes 7-10 working days after submission, depending on the visa type and applicant category.",
          },
          {
            question: "Is a medical test mandatory for all visas?",
            answer:
              "Yes, all employment, investor, and residency visas require a valid medical fitness test as part of the process.",
          },
        ],
      },
    ],
  },
];

export const allServices = [
  {
    id: 1,
    slug: "business-setup-in-dubai-uae",
    title: "BUSINESS SETUP IN DUBAI, UAE",
    description:
      "Start your business in the UAE easily with expert company setup, licensing, and registration support from TMG Global.",
    image: "/assets/images/services/business-setup-in-dubai-uae.png",
  },
  {
    id: 2,
    slug: "company-formation-in-dubai-uae",
    title: "Company Formation",
    description:
      "Form your UAE company smoothly with complete documentation, approvals, and legal support for mainland and free zone.",
    image: "/assets/images/services/company-formation-in-dubai-uae.png",
  },
  {
    id: 3,
    slug: "uae-golden-visa",
    title: "Golden Visa",
    description:
      "Secure long-term UAE residency with professional Golden Visa assistance for investors, entrepreneurs, and skilled professionals.",
    image: "/assets/images/services/uae-golden-visa.png",
  },
  {
    id: 4,
    slug: "pro-services-dubai-uae",
    title: "PRO Services",
    description:
      "Handle government documents, renewals, and clearances quickly with trusted corporate PRO and document processing support.",
    image: "/assets/images/services/pro-services-dubai-uae.png",
  },
  {
    id: 5,
    slug: "local-sponsorship-services-in-dubai-uae",
    title: "Local Sponsorship",
    description:
      "Find reliable UAE local sponsors with secure, transparent agreements ensuring full business control and legal protection.",
    image: "/assets/images/services/local-sponsorship-in-dubai-uae.png",
  },
  {
    id: 6,
    slug: "uae-visa-services",
    title: "Visa Services",
    description:
      "Fast UAE visa processing for investors, employees, and families — complete documentation and approval assistance provided.",
    image: "/assets/images/services/uae-visa-services.png",
  },
  {
    id: 7,
    slug: "iso-certification-and-trademark-registration-dubai-uae",
    title: "ISO Certification & Trademark Registration",
    description:
      "Get ISO certification and protect your brand with professional trademark registration for business credibility and compliance.",
  image:
      "/assets/images/services/iso-certification-and-trademark-registration-dubai-uae.png",
  },
  {
    id: 8,
    slug: "virtual-office-setup-in-dubai-uae",
    title: "Virtual Office",
    description:
      "Establish your UAE presence with a legal business address, mail handling, and flexible virtual office solutions.",
    image: "/assets/images/services/virtual-office-setup-in-dubai-uae.png",
  },
  {
    id: 9,
    slug: "company-liquidation-in-dubai-uae",
    title: "Company Liquidation",
    description:
      "Close your UAE business legally and efficiently with full company liquidation, clearance, and government documentation support.",
    image: "/assets/images/services/company-liquidation-in-dubai-uae.png",
  },
  {
    id: 10,
    slug: "document-attestation-service-dubai-uae",
    title: "Document Attestation",
    description:
      "Authenticate and attest documents for visa, education, or business use with our quick and certified attestation service.",
    image: "/assets/images/services/document-attestation-service-dubai-uae.png",
  },
  {
    id: 11,
    slug: "legal-translation-services-in-dubai-uae",
    title: "Legal Translation",
    description:
      "Certified legal translation for all government and business documents — accurate, fast, and approved by UAE authorities.",
   image:
      "/assets/images/services/legal-translation-services-in-dubai-uae.png",
  },
  {
    id: 12,
    slug: "insurance-and-vat-services-dubai-uae",
    title: "Insurance & VAT Services",
    description:
      "Simplify VAT registration, filing, and business insurance with expert consultation and financial compliance support in UAE.",
  image:
      "/assets/images/services/insurance-and-vat-services-dubai-uae.png",
  },
  {
    id: 13,
    slug: "bank-account-opening-in-dubai-uae",
    title: "Bank Account Opening",
    description:
      "Open UAE corporate or personal bank accounts easily with professional document preparation and direct bank coordination.",
    image: "/assets/images/services/bank-account-opening-in-dubai-uae.png",
  },
  {
    id: 14,
    slug: "typing-services-dubai-uae",
    title: "Typing Services",
    description:
      "Fast, accurate typing and form-filling services for visa, immigration, and business-related documentation in UAE.",
    image: "/assets/images/services/typing-services-dubai-uae.png",
  },
  {
    id: 15,
    slug: "government-approvals-in-the-uae",
    title: "UAE Government Approvals",
    description:
      "Get quick approvals and permits from UAE authorities with expert guidance for business licensing and documentation.",
    image: "/assets/images/services/government-approvals-in-the-uae.png",
  },
  {
    id: 16,
    slug: "medical-and-emirates-id-services-dubai-uae",
    title: "Medical & Emirates Id Services",
    description:
      "Complete your Emirates ID and medical test process smoothly with full coordination and government-approved assistance.",
   image:
      "/assets/images/services/medical-and-emirates-id-services-dubai-uae.png",
  },
];
