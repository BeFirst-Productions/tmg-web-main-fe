import { getAllBlogs, createSlug, getBlogBySlug } from "@/../../api/blogService";
import { blogs as fallbackBlogs } from "@/data/BlogData";
import BlogDetailClient from "./BlogDetailClient";

// Generate metadata for each blog post
export async function generateMetadata({ params }) {
    const result = await getBlogBySlug(params.slug);

    if (!result.success || !result.data) {
        return {
            title: 'Blog | TMG Global',
            description: 'Insights and updates on business setup in the UAE.'
        };
    }

    const blog = result.data;
    return {
        title: blog.metaTitle || blog.title,
        description: blog.metaDescription || blog.excerpt || blog.description,
        keywords: blog.metaKeywords,
        alternates: {
            canonical: blog.canonical || `https://tmgglobal.ae/blogs/${params.slug}`
        }
    };
}

// Generate static params for all blog posts at build time
// ... (rest of the functions)
export async function generateStaticParams() {
    try {
        console.log('Generating static params for blogs...');
        const result = await getAllBlogs();

        let blogList = [];
        if (result.success && result.data && result.data.length > 0) {
            blogList = result.data;
            console.log(`✅ Loaded ${blogList.length} blogs from API for static params`);
        } else {
            blogList = fallbackBlogs;
            console.log(`⚠️ Using ${blogList.length} fallback blogs for static params`);
        }

        return blogList.map((blog) => ({
            slug: blog.url || createSlug(blog.title),
        }));
    } catch (error) {
        console.error('❌ Error in generateStaticParams:', error);
        return fallbackBlogs.map((blog) => ({
            slug: createSlug(blog.title),
        }));
    }
}

// For static export, we need to set this to false
// This means only the slugs from generateStaticParams will work
export const dynamicParams = false;

// Server Component - no "use client" directive
export default function BlogDetailPage({ params }) {
    return <BlogDetailClient slug={params.slug} />;
}

