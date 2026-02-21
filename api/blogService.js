import api from './api';
import { blogs as fallbackBlogs } from '@/data/BlogData';

/**
 * Blog Service with fallback mechanism
 * If API fails, it will return data from the local BlogData file
 */

/**
 * Fetch blogs from backend with pagination and category filtering
 * @param {number} page - Page number
 * @param {number} limit - Items per page
 * @param {string} category - Category to filter by
 * @returns {Promise<Object>} Object containing blog data and pagination info
 */
export const getAllBlogs = async (page = 1, limit = 8, category = 'all') => {
    try {
        let url = `/blogs/get-blogs?page=${page}&limit=${limit}`;
        if (category && category !== 'all') {
            url += `&category=${category}`;
        }
        const response = await api.get(url);

        // Handle the new response structure from the controller
        if (response.data && response.data.success) {
            return {
                success: true,
                data: response.data.data,
                total: response.data.total,
                totalPages: response.data.totalPages,
                currentPage: response.data.currentPage,
                source: 'backend'
            };
        }

        // Fallback for direct array response
        if (Array.isArray(response.data)) {
            return {
                success: true,
                data: response.data,
                total: response.data.length,
                totalPages: 1,
                currentPage: 1,
                source: 'backend'
            };
        }

        // Fallback for wrapped data without success flag
        if (response.data?.data && Array.isArray(response.data.data)) {
            return {
                success: true,
                data: response.data.data,
                total: response.data.total || response.data.data.length,
                totalPages: response.data.totalPages || 1,
                currentPage: response.data.currentPage || 1,
                source: 'backend'
            };
        }

        // If no valid data, use fallback
        console.warn('⚠️ Invalid response structure, using fallback data');
        return {
            success: true,
            data: fallbackBlogs,
            total: fallbackBlogs.length,
            totalPages: Math.ceil(fallbackBlogs.length / limit),
            currentPage: 1,
            source: 'fallback'
        };
    } catch (error) {
        console.error('❌ Error fetching blogs from backend:', error.message);
        return {
            success: true,
            data: fallbackBlogs,
            total: fallbackBlogs.length,
            totalPages: Math.ceil(fallbackBlogs.length / limit),
            currentPage: 1,
            source: 'fallback',
            error: error.message
        };
    }
};

/**
 * Fetch a single blog by slug from backend
 * @param {string} slug - Blog slug
 * @returns {Promise<Object>} Blog object
 */
export const getBlogBySlug = async (slug) => {
    try {
        const response = await api.get(`/blogs/get-blog/${slug}`);

        // Check if response has data
        if (response.data) {
            return {
                success: true,
                data: response.data.data || response.data,
                source: 'backend'
            };
        }

        // If no valid data, use fallback
        console.warn('Invalid response structure, using fallback data');
        const fallbackBlog = fallbackBlogs.find(
            (blog) => (blog.url === slug) || (createSlug(blog.title) === slug)
        );

        if (fallbackBlog) {
            return {
                success: true,
                data: fallbackBlog,
                source: 'fallback'
            };
        }

        return {
            success: false,
            data: null,
            source: 'fallback',
            error: 'Blog not found'
        };
    } catch (error) {
        console.error('Error fetching blog from backend:', error.message);

        // Return fallback data on error
        const fallbackBlog = fallbackBlogs.find(
            (blog) => (blog.url === slug) || (createSlug(blog.title) === slug)
        );

        if (fallbackBlog) {
            return {
                success: true,
                data: fallbackBlog,
                source: 'fallback',
                error: error.message
            };
        }

        return {
            success: false,
            data: null,
            source: 'fallback',
            error: 'Blog not found'
        };
    }
};

/**
 * Helper function to create slug from title
 * @param {string} title - Blog title
 * @returns {string} Slug
 */
export const createSlug = (title) => {
    if (!title) return '';
    return title
        .toLowerCase()
        .replace(/[^\w\s-]/g, '') // Remove special characters
        .replace(/\s+/g, '-') // Replace spaces with hyphens
        .replace(/--+/g, '-') // Replace multiple hyphens with single hyphen
        .trim();
};

/**
 * Clean up a slug from potential unwanted suffixes like /index.txt or .html
 * This prevents redirection loops on some hosting environments
 * @param {string} slug - The slug to clean
 * @returns {string} Cleaned slug
 */
export const cleanSlug = (slug) => {
    if (!slug) return '';

    let cleaned = String(slug).trim();

    // Remove unwanted suffixes recursively
    const patterns = [
        /\/index\.txt$/,
        /\/index\.html$/,
        /\.txt$/,
        /\.html$/,
        /\/$/           // Remove trailing slash
    ];

    let changed = true;
    while (changed) {
        changed = false;
        for (const pattern of patterns) {
            if (pattern.test(cleaned)) {
                cleaned = cleaned.replace(pattern, '');
                changed = true;
            }
        }
    }

    return cleaned || '';
};

/**
 * Get related blogs based on category
 * @param {string} category - Blog category
 * @param {string} currentSlug - Current blog slug to exclude
 * @param {number} limit - Number of related blogs to return
 * @returns {Promise<Array>} Array of related blog objects
 */
export const getRelatedBlogs = async (category, currentSlug, limit = 3) => {
    try {
        const result = await getAllBlogs();
        const allBlogs = result.data || [];

        const relatedBlogs = allBlogs
            .filter(
                (blog) =>
                    blog.category === category &&
                    (blog.url || createSlug(blog.title)) !== currentSlug
            )
            .slice(0, limit);

        return {
            success: true,
            data: relatedBlogs,
            source: 'processed'
        };
    } catch (error) {
        console.error('Error fetching related blogs:', error.message);
        return {
            success: false,
            data: [],
            error: error.message
        };
    }
};
