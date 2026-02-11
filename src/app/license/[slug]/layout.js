
import { buildMetadata, siteUrl } from "@/lib/seo";
import { LicenseDetails } from "@/data/LicenseData";

const SITE_URL = siteUrl || "https://tmgdubai.ae";

const toAbsolute = (p) => (!p ? undefined : p.startsWith("http") ? p : `${SITE_URL}${p}`);

function normalizeRobots(robots) {
  if (!robots) return undefined;
  if (typeof robots === "string") {
    const parts = robots.split(",").map((p) => p.trim().toLowerCase());
    return { index: !parts.includes("noindex"), follow: !parts.includes("nofollow") };
  }
  return robots;
}


export async function generateStaticParams() {
  const uniqueSlugs = [...new Set((LicenseDetails || []).map((l) => l.slug))];
  return uniqueSlugs.map((slug) => ({ slug }));
}


export async function generateMetadata({ params }) {

  const { slug } = await params;
  const license = (LicenseDetails || []).find((l) => l.slug === slug);

  if (!license) {
    return buildMetadata({
      title: "License Not Found",
      description: "The requested license could not be found.",
      path: `/license/${slug}`,
    });
  }


  const seo = license.seo || {};

  const fallbackTitle = "License Details | TMG Global";
  const title = seo.metaTitle || (license?.title ? `${license.title} | TMG Global` : fallbackTitle);

  const description =
    seo.metaDescription ||
    (license?.description?.replace(/\s+/g, " ").slice(0, 155) || "Explore this license offering from TMG Global in the UAE.");

  const image = toAbsolute(seo.ogImage || license?.imageUrl);
  const keywords = seo.keywords;
  const ogTitle = seo.ogTitle;
  const ogDescription = seo.ogDescription;
  const ogImageAlt = seo.ogImageAlt;
  const canonicalUrl = seo.canonicalUrl || `${SITE_URL}/license/${slug}`;
  const robots = normalizeRobots(seo.robots);

  return buildMetadata({
    title,
    description,
    image,
    keywords,
    ogTitle,
    ogDescription,
    ogImageAlt,
    canonicalUrl,
    robots,
    type: "article",
    path: `/license/${slug}`,
  });
}


function buildFAQSchema(license) {
  if (!license) return null;
  const faqs = Array.isArray(license.faqs) ? license.faqs.filter((f) => f?.question && f?.answer) : [];
  if (faqs.length === 0) return null;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}


function buildBreadcrumbSchema(license) {
  if (!license?.breadcrumb || !Array.isArray(license.breadcrumb)) return null;
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: license.breadcrumb.map((b) => ({
      "@type": "ListItem",
      position: b.position,
      name: b.name,
      item: b.url,
    })),
  };
}


export default async function LicenseSlugLayout({ children, params }) {

  const { slug } = await params;
  const license = (LicenseDetails || []).find((l) => l.slug === slug);

  if (!license) return <>{children}</>; 

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: license?.title || license?.seo?.metaTitle || "License",
    name: license?.title || license?.seo?.metaTitle || "License",
    description: license?.seo?.metaDescription || license?.description?.replace(/\s+/g, " "),
    provider: {
      "@type": "Organization",
      name: "TMG Global LLC",
      url: SITE_URL,
      logo: toAbsolute("/assets/logo/TMG-Global-Services-LLC.png"),
      telephone: "+971545267777",
      email: "info@tmgdubai.ae",
    },
    url: `${SITE_URL}/license/${license.slug}`,
  };

  const imageUrl = toAbsolute(license?.seo?.ogImage || license?.imageUrl);
  if (imageUrl) serviceSchema.image = imageUrl;

  if (license.offers) serviceSchema.offers = license.offers;
  if (license.serviceOutput) serviceSchema.serviceOutput = license.serviceOutput;
  if (license.termsOfService) serviceSchema.termsOfService = license.termsOfService;
  if (license.aggregateRating) serviceSchema.aggregateRating = license.aggregateRating;

  const faqSchema = buildFAQSchema(license);
  const breadcrumbSchema = buildBreadcrumbSchema(license);

  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "TMG Global Services LLC",
    url: SITE_URL,
    logo: toAbsolute("/assets/logo/TMG-Global-Services-LLC.png"),
    sameAs: [
      "https://www.facebook.com/tmgdubai",
      "https://www.instagram.com/tmgglobaluae",
      "https://www.linkedin.com/company/tmgglobaluae",
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}

      {breadcrumbSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />}

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />

      {children}
    </>
  );
}