import api from './api';
import { galleryImages as fallbackImages } from '@/data/GalleryData';

/**
 * Gallery Service with fallback mechanism
 * If API fails, it will return data from the local GalleryData file
 */

/**
 * Fetch gallery images from backend
 * @returns {Promise<Object>} Object containing gallery data
 */
export const getAllGalleryImages = async () => {
    try {
        const response = await api.get('/gallery/get-images');

        // Handle the new response structure from the controller
        if (response.data && response.data.success) {
            return {
                success: true,
                data: response.data.data,
                source: 'backend'
            };
        }

        // Fallback for direct array response
        if (Array.isArray(response.data)) {
            return {
                success: true,
                data: response.data,
                source: 'backend'
            };
        }

        // Fallback for wrapped data without success flag
        if (response.data?.data && Array.isArray(response.data.data)) {
            return {
                success: true,
                data: response.data.data,
                source: 'backend'
            };
        }

        // If no valid data
        console.warn('⚠️ Invalid response structure');
        return {
            success: false,
            error: 'Invalid response structure'
        };
    } catch (error) {
        console.error('❌ Error fetching gallery images from backend:', error.message);
        return {
            success: false,
            error: error.message
        };
    }
};
