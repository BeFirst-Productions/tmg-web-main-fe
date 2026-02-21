"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import BlogDetailClient from "../[slug]/BlogDetailClient";
import Loader from "@/components/Loader";

/**
 * Fallback Viewer for blogs added after the last build.
 * This handles any blog path that doesn't have a pre-generated static file.
 */
export default function BlogFallbackViewer() {
    const pathname = usePathname();
    const [slug, setSlug] = useState(null);

    useEffect(() => {
        if (pathname) {
            // Decode URL and clean up slashes
            const decodedPath = decodeURIComponent(pathname);
            const parts = decodedPath.split('/').filter(Boolean);

            // Look for the slug after 'blogs'
            const blogsIndex = parts.indexOf('blogs');
            if (blogsIndex !== -1 && parts[blogsIndex + 1]) {
                setSlug(parts[blogsIndex + 1]);
            }
        }
    }, [pathname]);

    if (!slug) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-white">
                <Loader />
            </div>
        );
    }

    return <BlogDetailClient slug={slug} />;
}
