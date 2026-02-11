// src/app/sitemap.js
import { siteUrl } from "@/lib/seo";
import { ServiceDetails } from "@/data/ServiceDetails";
import { LicenseDetails } from "@/data/LicenseData";

export const dynamic = "force-static";

const norm = (path) => {
  if (!path) return null;
  let p = path.startsWith("/") ? path : `/${path}`;
  if (p !== "/" && !p.endsWith("/")) {
    p = `${p}/`;
  }
  return `${siteUrl}${p}`;
};

export default function sitemap() {
  const now = new Date().toISOString();

  const staticPaths = [
    "/",
    "/services",
    "/about-us",
    "/contact",
    "/faqs",
    "/blogs",
    "/gallery",
    "/privacy-policy",
    "/terms-of-service",
    "/mainland-company-formation-dubai",
    "/freezone-company-formation-dubai",
    "/offshore-company-formation-dubai",
  ];

  const staticRoutes = staticPaths.map((p) => ({
    url: norm(p),
    lastModified: now,
    changeFrequency: "weekly",
    priority: p === "/" ? 1.0 : 0.7,
  }));

  const serviceRoutes = (ServiceDetails || [])
    .map((s) => {
      if (!s?.slug) return null;
      return {
        url: norm(`/service/${encodeURIComponent(s.slug)}`),
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.6,
      };
    })
    .filter(Boolean);

  const licenseRoutes = (LicenseDetails || [])
    .map((l) => {
      if (!l?.slug) return null;
      return {
        url: norm(`/license/${encodeURIComponent(l.slug)}`),
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.6,
      };
    })
    .filter(Boolean);

  return [...staticRoutes, ...serviceRoutes, ...licenseRoutes];
}
