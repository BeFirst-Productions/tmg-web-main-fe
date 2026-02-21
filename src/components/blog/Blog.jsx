"use client";
import React, { useState, useMemo, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { blogs as fallbackBlogs } from "@/data/BlogData";
import { getAllBlogs, createSlug, cleanSlug } from "@/../api/blogService";
import Link from "next/link";

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [dataSource, setDataSource] = useState("loading");
  const itemsPerPage = 8;

  const categories = [
    { label: "All", value: "all" },
    { label: "Business Setup &\nCompany Formation", value: "business-setup" },
    { label: "Visa & Residency", value: "visa-residency" },
    { label: "PRO & Government\nServices", value: "pro-government" },
    { label: "Legal, Compliance &\nFinance", value: "legal-compliance" },
  ];

  // Fetch all blogs when the component mounts
  useEffect(() => {
    const fetchBlogs = async () => {
      setIsLoading(true);
      try {
        // Fetch a large number (1000) once to allow correct category filtering on client
        const result = await getAllBlogs(1, 1000, "all");

        if (result.success && result.data) {
          setBlogs(result.data);
          setDataSource(result.source);
        } else {
          setBlogs(fallbackBlogs);
          setDataSource('fallback');
        }
      } catch (error) {
        console.error('Error in fetchBlogs:', error);
        setBlogs(fallbackBlogs);
        setDataSource('fallback');
      } finally {
        setIsLoading(false);
      }
    };

    fetchBlogs();
  }, []); // Only run on mount

  const { paginatedBlogs, totalPages, totalInActiveCategory } = useMemo(() => {
    // 1. Filter by category
    const categoryMapping = {
      "business-setup": "Business Setup & Company Formation",
      "visa-residency": "Visa & Residency",
      "pro-government": "PRO & Government Services",
      "legal-compliance": "Legal, Compliance & Financial Services",
    };

    const filtered = activeCategory === "all"
      ? blogs
      : blogs.filter(blog => blog.category === activeCategory || blog.category === categoryMapping[activeCategory]);

    // 2. Calculate pagination
    const total = filtered.length;
    const pages = Math.ceil(total / itemsPerPage);
    const start = (currentPage - 1) * itemsPerPage;
    const paginated = filtered.slice(start, start + itemsPerPage);

    return {
      paginatedBlogs: paginated,
      totalPages: pages,
      totalInActiveCategory: total
    };
  }, [activeCategory, blogs, currentPage]);

  const handleCategoryChange = (categoryValue) => {
    setActiveCategory(categoryValue);
    setCurrentPage(1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
    exit: {
      opacity: 0,
      y: -30,
      scale: 0.8,
      transition: {
        duration: 0.3,
      },
    },
  };

  const scrollVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const categoryButtonVariants = {
    idle: { scale: 1 },
    hover: { scale: 1.05 },
    tap: { scale: 0.98 },
  };

  return (
    <div className="min-h-screen bg-white px-3 sm:px-4 md:px-6 lg:px-8 py-6 sm:py-8 md:py-12 lg:py-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
            type: "spring",
            stiffness: 80,
            damping: 15,
          }}
          className="mb-6 sm:mb-8 md:mb-10 lg:mb-12"
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-[40px] font-bold text-gray-900 mb-1 sm:mb-2 leading-tight">
            Insights & Updates on
            <br /> Business Setup in the UAE
          </h2>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-8 sm:mb-10 md:mb-12 lg:mb-14 flex flex-col sm:flex-row sm:items-start md:items-center gap-3 sm:gap-4 md:gap-6"
        >
          <span className="text-black/60 font-semibold text-sm sm:text-base md:text-lg whitespace-nowrap flex-shrink-0">
            Category
          </span>
          <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4">
            {categories.map((category) => (
              <motion.button
                key={category.value}
                variants={categoryButtonVariants}
                initial="idle"
                whileHover="hover"
                whileTap="tap"
                onClick={() => handleCategoryChange(category.value)}
                className={`px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 md:py-2.5 rounded-lg md:rounded-xl font-medium text-xs sm:text-sm md:text-base transition-all duration-300 whitespace-pre-line ${activeCategory === category.value
                  ? "bg-[#C79A59] text-white shadow-md md:shadow-lg"
                  : "bg-white text-gray-700 border-2 border-gray-300 hover:border-[#C79A59] shadow-sm"
                  }`}
              >
                {category.label}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Blog Cards Grid */}
        <AnimatePresence mode="wait">
          {isLoading ? (
            <motion.div
              key="loader"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex justify-center items-center py-20 w-full"
            >
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#941D43]"></div>
            </motion.div>
          ) : (
            <motion.div
              key={activeCategory}
              variants={scrollVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 md:gap-5 lg:gap-6 mb-8 sm:mb-10 md:mb-12 lg:mb-14"
            >
              {paginatedBlogs.length > 0 ? (
                paginatedBlogs.map((blog) => (
                  <motion.div
                    key={blog.id || blog._id}
                    variants={itemVariants}
                    initial="hidden"
                    whileInView="visible"
                    exit="exit"
                    viewport={{ once: false, amount: 0.3 }}
                    className="group cursor-pointer h-full"
                  >
                    <Link href={`/blogs/${cleanSlug(blog.url || createSlug(blog.title))}/`}>
                      <motion.div
                        whileHover={{ y: -6 }}
                        transition={{ duration: 0.3 }}
                        className="bg-white rounded-2xl md:rounded-3xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 h-full flex flex-col border-4 border-red-800 hover:border-red-900"
                      >
                        {/* Image Container */}
                        <motion.div
                          whileHover={{ scale: 1.08 }}
                          transition={{ duration: 0.4 }}
                          className="relative h-32 sm:h-40 md:h-48 lg:h-56 overflow-hidden bg-gray-200"
                        >
                          <img
                            src={blog.image}
                            alt={blog.title}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </motion.div>

                        {/* Content Container */}
                        <div className="bg-[#941D43] p-3 sm:p-4 md:p-5 lg:p-6 text-white flex-1 flex flex-col justify-between rounded-b-2xl md:rounded-b-3xl">
                          <div>
                            <motion.h3 className="text-xs sm:text-sm md:text-base lg:text-lg font-bold mb-1.5 sm:mb-2 md:mb-3 line-clamp-2 group-hover:text-[#fff] transition-colors duration-300 leading-tight">
                              {blog.title}
                            </motion.h3>
                            <p className="text-xs sm:text-xs md:text-sm text-red-100 line-clamp-3 leading-relaxed">
                              {blog.excerpt || blog.description}
                            </p>
                          </div>
                          <motion.p
                            initial={{ opacity: 0.7 }}
                            whileHover={{ opacity: 1 }}
                            className="text-xs text-red-200 mt-3 sm:mt-4 font-medium"
                          >
                            {blog.date || new Date(blog.createdAt).toLocaleDateString()}
                          </motion.p>
                        </div>
                      </motion.div>
                    </Link>
                  </motion.div>
                ))
              ) : (
                <div className="col-span-full text-center py-20 text-gray-500">
                  No blogs found in this category.
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Pagination - Hide if active category has 8 or fewer blogs */}
        {totalInActiveCategory > 8 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex items-center justify-center gap-1 sm:gap-2 md:gap-3 mb-6 sm:mb-8 md:mb-10 flex-wrap"
          >
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className="p-2 sm:p-2.5 md:p-3 rounded-full bg-white shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 border-2 border-gray-300"
            >
              <ChevronLeft className="w-4 sm:w-4 md:w-5 h-4 sm:h-4 md:h-5 text-gray-800" />
            </motion.button>

            <div className="flex gap-1 sm:gap-1.5 md:gap-2 flex-wrap justify-center">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (page) => (
                  <motion.button
                    key={page}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => {
                      setCurrentPage(page);
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    className={`w-8 sm:w-8 md:w-10 h-8 sm:h-8 md:h-10 rounded-full font-semibold text-xs sm:text-sm md:text-base transition-all duration-300 border-2 ${currentPage === page
                      ? "bg-yellow-600 text-white shadow-lg border-yellow-700"
                      : "bg-white text-gray-800 shadow-md hover:shadow-lg border-gray-300"
                      }`}
                  >
                    {page}
                  </motion.button>
                )
              )}
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() =>
                setCurrentPage(Math.min(totalPages, currentPage + 1))
              }
              disabled={currentPage === totalPages}
              className="p-2 sm:p-2.5 md:p-3 rounded-full bg-white shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 border-2 border-gray-300"
            >
              <ChevronRight className="w-4 sm:w-4 md:w-5 h-4 sm:h-4 md:h-5 text-gray-800" />
            </motion.button>
          </motion.div>
        )}

        {/* Results Count */}
        {/* {totalPages > 1 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center text-gray-600 text-xs sm:text-sm md:text-base"
          >
            <p>
              Showing {startIndex + 1} to{" "}
              {Math.min(startIndex + itemsPerPage, filteredBlogs.length)} of{" "}
              {filteredBlogs.length} results
            </p>
          </motion.div>
        )} */}
      </div>
    </div>
  );
};

export default Blog;
