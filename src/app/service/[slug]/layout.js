
import { ServiceDetails } from "@/data/ServiceDetails";
import { buildMetadata } from "@/lib/seo";


export async function generateMetadata({ params }) {
  try {

    const { slug } = await params;


    const service = ServiceDetails?.find((s) => s.slug === slug);

    if (!service) {
      return buildMetadata({
        title: "Service Not Found",
        description: "The requested service could not be found.",
        path: `/service/${slug}`,
      });
    }


    const seo = service.seo || {};

    return buildMetadata({
      title: seo.metaTitle || service.title,
      description: seo.metaDescription,
      path: `/service/${slug}`,
      keywords: seo.keywords || [],
      image: seo.ogImage || service.image,
      ogTitle: seo.ogTitle,
      ogDescription: seo.ogDescription,
      ogImageAlt: seo.ogImageAlt,
      canonicalUrl: seo.canonicalUrl || `https://tmgdubai.ae/service/${slug}`,
      robots: seo.robots,
    });
  } catch (error) {
    console.error("Error generating metadata:", error);
    return buildMetadata({
      title: "Service Details",
      description: "TMG Global service information",
    });
  }
}


export default async function ServiceSlugLayout({ children, params }) {

  const { slug } = await params;
  const service = (ServiceDetails || []).find((s) => s.slug === slug);

  if (!service) return <>{children}</>;


  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.seo?.metaDescription || service.data?.[0]?.description,
    provider: {
      "@type": "Organization",
      name: "TMG Global Services LLC",
      url: "https://tmgdubai.ae",
    },
    areaServed: {
      "@type": "Country",
      name: "United Arab Emirates",
    },
  };


  if (service.offers) {
    structuredData.offers = service.offers;
  }


  if (service.serviceOutput) {
    structuredData.serviceOutput = service.serviceOutput;
  }


  if (service.termsOfService) {
    structuredData.termsOfService = service.termsOfService;
  }


  if (service.aggregateRating) {
    structuredData.aggregateRating = service.aggregateRating;
  }


  const breadcrumbData = service.breadcrumb
    ? {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: service.breadcrumb.map((crumb) => ({
          "@type": "ListItem",
          position: crumb.position,
          name: crumb.name,
          item: crumb.url,
        })),
      }
    : null;

  return (
    <>
    
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />

 
      {breadcrumbData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(breadcrumbData),
          }}
        />
      )}

      {children}
    </>
  );
}