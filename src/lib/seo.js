
export const siteUrl = "https://tmgdubai.ae";

export const defaultSeo = {
  siteName: "TMG Global",
  titleTemplate: "%s | TMG Dubai",
  defaultTitle: "TMG Dubai – Business Setup & Company Formation in UAE",
  defaultDescription:
    "Start your business setup in Dubai with TMG Global. Expert company formation in UAE Mainland, Freezone & Offshore.",
  defaultImage: `${siteUrl}/assets/logo/TMG-Global-Services-LLC.png`,
  defaultImageAlt: "TMG Global Services LLC Logo",
  locale: "en_AE",
};


function cleanText(text) {
  if (!text) return text;
  return text.replace(/\n/g, " ").replace(/\s+/g, " ").trim();
}

export function buildMetadata({
  title,
  description,
  path = "/",
  image,
  type = "website",
  keywords,
  ogTitle,
  ogDescription,
  ogImageAlt,
  canonicalUrl,
  robots,
}) {

  let url = canonicalUrl;
  if (!url) {
    let finalPath = path.startsWith("/") ? path : `/${path}`;
    if (!finalPath.endsWith("/")) {
      finalPath = `${finalPath}/`;
    }
    url = `${siteUrl}${finalPath}`;
  } else if (!url.endsWith("/")) {
    url = `${url}/`;
  }

  const metaTitle = cleanText(title) || defaultSeo.defaultTitle;
  const metaDescription =
    cleanText(description) || defaultSeo.defaultDescription;
  const imageUrl = image
    ? image.startsWith("http")
      ? image
      : `${siteUrl}${image}`
    : defaultSeo.defaultImage;
  const twitterImage = imageUrl || defaultSeo.defaultImage;


  const keywordsArray = Array.isArray(keywords)
    ? keywords
    : keywords
      ? [keywords]
      : [];

  return {
    metadataBase: new URL(siteUrl),
    title: metaTitle,
    description: metaDescription,
  
    keywords: keywordsArray,
    alternates: { canonical: url },
    authors: [{ name: "TMG Global" }],
    creator: "TMG Global",
    publisher: "TMG Global",
    robots: robots || {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
      },
    },

    icons: {
      icon: "/favicon.ico",
      shortcut: "/favicon-96x96.png",
      apple: "/apple-touch-icon.png",
      other: [
        {
          rel: "icon",
          url: "/favicon-16x16.png",
          sizes: "16x16",
          type: "image/png",
        },
        {
          rel: "icon",
          url: "/favicon-32x32.png",
          sizes: "32x32",
          type: "image/png",
        },
        { rel: "manifest", url: "/site.webmanifest" },
      ],
    },

    verification: {
      google: "_W2qQZsYga7KnXrA12vbw48HhEJiYAEB1ouDNDSQPAA",
    },

    alternates: {
      canonical: url
    },

    openGraph: {
      type,
      locale: defaultSeo.locale,
      url,
      siteName: defaultSeo.siteName,
      title: cleanText(ogTitle) || metaTitle,
      description: cleanText(ogDescription) || metaDescription,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: ogImageAlt || defaultSeo.defaultImageAlt || "TMG Global Service",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: cleanText(ogTitle) || metaTitle,
      description: cleanText(ogDescription) || metaDescription,
      images: [twitterImage],
      creator: "@tmgdubai",
      site: "@tmgdubai",
    },
  };
}
