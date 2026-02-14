import api from './api';
import { blogs as fallbackBlogs } from '@/data/BlogData';

/**
 * Blog Service with fallback mechanism
 * If API fails, it will return data from the local BlogData file
 */

/**
 * Fetch all blogs from backend
 * @returns {Promise<Array>} Array of blog objects
 */
export const getAllBlogs = async () => {
    try {
        // console.log('Fetching blogs from API...');
        const response = await api.get('/blogs/get-blogs');
        // console.log('API Response:', response);

        // Check if response has data
        if (response.data && Array.isArray(response.data)) {
            // console.log('✅ API returned array directly:', response.data.length, 'blogs');
            return {
                success: true,
                data: response.data,
                source: 'backend'
            };
        }

        // If response structure is different, try to extract data
        if (response.data?.data && Array.isArray(response.data.data)) {
            // console.log('✅ API returned wrapped data:', response.data.data.length, 'blogs');
            return {
                success: true,
                data: response.data.data,
                source: 'backend'
            };
        }

        // If no valid data, use fallback
        console.warn('⚠️ Invalid response structure, using fallback data');
        return {
            success: true,
            data: fallbackBlogs,
            source: 'fallback'
        };
    } catch (error) {
        console.error('❌ Error fetching blogs from backend:', error.message);
        // Return fallback data on error
        return {
            success: true,
            data: fallbackBlogs,
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
    return slug
        .replace(/\/index\.txt$/, '')
        .replace(/\/index\.html$/, '')
        .replace(/\.txt$/, '')
        .replace(/\.html$/, '')
        .replace(/\/$/, '') // Remove trailing slash
        .trim();
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
