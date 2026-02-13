"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Calendar, ArrowLeft, Tag } from "lucide-react";
import Link from "next/link";
import { getBlogBySlug, getRelatedBlogs, createSlug, cleanSlug } from "@/../../api/blogService";
import BannerSection from "@/components/banner/Banner";
import ConsultationModal from "@/components/common/ConsultationModal";
import SmallBanner from "@/components/common/SmallBanner";
import Footer from "@/components/footer/Footer";
import { Navbar } from "@/components/navbar/Navbar";

const BlogDetailClient = ({ slug }) => {
    const [blog, setBlog] = useState(null);
    const [relatedBlogs, setRelatedBlogs] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const [dataSource, setDataSource] = useState("fallback");

    useEffect(() => {
        const fetchBlogData = async () => {
            if (!slug) return;

            setIsLoading(true);
            try {
                // Fetch blog details
                const result = await getBlogBySlug(slug);

                if (result.success && result.data) {
                    setBlog(result.data);
                    setDataSource(result.source);
                    console.log(`Blog loaded from: ${result.source}`);

                    // Fetch related blogs
                    if (result.data.category) {
                        const relatedResult = await getRelatedBlogs(
                            result.data.category,
                            slug,
                            3
                        );
                        if (relatedResult.success) {
                            setRelatedBlogs(relatedResult.data);
                        }
                    }
                } else {
                    // Blog not found
                    setBlog(null);
                }
            } catch (error) {
                console.error("Error fetching blog:", error);
                setBlog(null);
            } finally {
                setIsLoading(false);
            }
        };

        fetchBlogData();
    }, [slug]);

    if (isLoading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-white">
                <div className="text-center">
                    <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-[#941D43]"></div>
                    <p className="mt-4 text-gray-600">Loading blog...</p>
                </div>
            </div>
        );
    }

    if (!blog) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-white">
                <div className="text-center max-w-md mx-auto px-4">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">Blog Not Found</h1>
                    <p className="text-gray-600 mb-8">
                        The blog post you're looking for doesn't exist or has been removed.
                    </p>
                    <Link
                        href="/blogs"
                        className="inline-flex items-center gap-2 bg-[#941D43] text-white px-6 py-3 rounded-lg hover:bg-[#7a1736] transition-colors"
                    >
                        <ArrowLeft className="w-5 h-5" />
                        Back to Blogs
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <>
            <div className="w-full min-h-screen">
                <Navbar />
                <BannerSection
                    title={blog.title}
                    breadcrumbs={[
                        { name: "Home", path: "/" },
                        { name: "Blogs", path: "/blogs" },
                        { name: blog.title, path: `/blogs/${slug}` },
                    ]}
                />

                {/* Blog Content */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Main Content */}
                        <div className="lg:col-span-2">
                            <motion.article
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                className="bg-white rounded-2xl shadow-lg overflow-hidden"
                            >
                                {/* Featured Image */}
                                <div className="relative h-64 sm:h-96 overflow-hidden">
                                    <img
                                        src={blog.image}
                                        alt={blog.title}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                                </div>

                                {/* Content */}
                                <div className="p-6 sm:p-8 lg:p-10">
                                    {/* Meta Information */}
                                    <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-gray-600">
                                        <div className="flex items-center gap-2">
                                            <Calendar className="w-4 h-4" />
                                            <span>{blog.date}</span>
                                        </div>
                                        {blog.category && (
                                            <div className="flex items-center gap-2">
                                                <Tag className="w-4 h-4" />
                                                <span className="bg-[#941D43] text-white px-3 py-1 rounded-full text-xs font-medium">
                                                    {blog.category}
                                                </span>
                                            </div>
                                        )}
                                    </div>

                                    {/* Title */}
                                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                        {blog.title}
                                    </h1>

                                    {/* Description/Excerpt Intro */}
                                    <div className="prose prose-lg max-w-none">
                                        <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                            {blog.excerpt || blog.description}
                                        </p>

                                        {/* Main Blog Content from 'description' or 'content' field */}
                                        {(blog.content || (blog.description && blog.description !== blog.excerpt)) && (
                                            <div
                                                className="text-gray-700 leading-relaxed blog-content-area"
                                                dangerouslySetInnerHTML={{
                                                    __html: blog.content || blog.description
                                                }}
                                            />
                                        )}

                                        {/* Placeholder content if no detailed content is available */}
                                        {!blog.content && (
                                            <div className="space-y-4 text-gray-700">
                                                <p>
                                                    This comprehensive guide will help you understand all aspects of{" "}
                                                    {blog.title.toLowerCase()}.
                                                </p>
                                                <p>
                                                    Our expert team at TMG Global has compiled essential information
                                                    to assist you in making informed decisions about your business
                                                    needs in the UAE.
                                                </p>
                                                <p>
                                                    For detailed information and personalized assistance, please
                                                    contact our team of experts who are ready to help you navigate
                                                    through the process.
                                                </p>
                                            </div>
                                        )}
                                    </div>

                                    {/* CTA Section */}
                                    <div className="mt-10 p-6 bg-gradient-to-r from-[#941D43] to-[#7a1736] rounded-xl">
                                        <h3 className="text-2xl font-bold text-white mb-3">
                                            Need Expert Assistance?
                                        </h3>
                                        <p className="text-white/90 mb-4">
                                            Our team is ready to help you with personalized solutions for your
                                            business needs.
                                        </p>
                                        <button
                                            onClick={() => setShowModal(true)}
                                            className="bg-white text-[#941D43] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                                        >
                                            Get Free Consultation
                                        </button>
                                    </div>
                                </div>
                            </motion.article>

                            {/* Back to Blogs Button */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.3 }}
                                className="mt-8"
                            >
                                <Link
                                    href="/blogs"
                                    className="inline-flex items-center gap-2 text-[#941D43] hover:text-[#7a1736] font-semibold transition-colors"
                                >
                                    <ArrowLeft className="w-5 h-5" />
                                    Back to All Blogs
                                </Link>
                            </motion.div>
                        </div>

                        {/* Sidebar */}
                        <div className="lg:col-span-1">
                            <div className="sticky top-24 space-y-6">
                                {/* Related Blogs */}
                                {relatedBlogs.length > 0 && (
                                    <motion.div
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.6, delay: 0.2 }}
                                        className="bg-white rounded-2xl shadow-lg p-6"
                                    >
                                        <h3 className="text-2xl font-bold text-gray-900 mb-6">
                                            Related Articles
                                        </h3>
                                        <div className="space-y-4">
                                            {relatedBlogs.map((relatedBlog) => (
                                                <Link
                                                    key={relatedBlog.id}
                                                    href={`/blogs/${cleanSlug(relatedBlog.url || createSlug(relatedBlog.title))}`}
                                                    className="block group"
                                                >
                                                    <div className="flex gap-4 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                                                        <div className="flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden">
                                                            <img
                                                                src={relatedBlog.image}
                                                                alt={relatedBlog.title}
                                                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                                            />
                                                        </div>
                                                        <div className="flex-1 min-w-0">
                                                            <h4 className="text-sm font-semibold text-gray-900 line-clamp-2 group-hover:text-[#941D43] transition-colors">
                                                                {relatedBlog.title}
                                                            </h4>
                                                            <p className="text-xs text-gray-500 mt-1">
                                                                {relatedBlog.date}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </Link>
                                            ))}
                                        </div>
                                    </motion.div>
                                )}

                                {/* Categories Widget */}
                                <motion.div
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.6, delay: 0.3 }}
                                    className="bg-white rounded-2xl shadow-lg p-6"
                                >
                                    <h3 className="text-2xl font-bold text-gray-900 mb-6">
                                        Categories
                                    </h3>
                                    <div className="space-y-2">
                                        {[
                                            "Business Setup & Company Formation",
                                            "Visa & Residency",
                                            "PRO & Government Services",
                                            "Legal, Compliance & Financial Services",
                                        ].map((category) => (
                                            <Link
                                                key={category}
                                                href="/blogs"
                                                className="block px-4 py-2 rounded-lg text-gray-700 hover:bg-[#941D43] hover:text-white transition-colors"
                                            >
                                                {category}
                                            </Link>
                                        ))}
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>

                <SmallBanner onOpenModal={() => setShowModal(true)} />
                <Footer />
                <ConsultationModal isOpen={showModal} setIsOpen={setShowModal} />
            </div>
        </>
    );
};

export default BlogDetailClient;
