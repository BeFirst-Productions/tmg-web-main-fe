import api from './api';

/**
 * Package Service
 */

/**
 * Fetch all packages from backend
 * @returns {Promise<Object>} Object containing package data
 */
export const getAllPackages = async () => {
    try {
        const response = await api.get('/packages');
        if (response.data && response.data.success) {
            return {
                success: true,
                data: response.data.data
            };
        }
        return {
            success: false,
            error: 'Failed to fetch packages'
        };
    } catch (error) {
        console.error('Error fetching packages:', error);
        return {
            success: false,
            error: error.message
        };
    }
};

/**
 * Fetch package by ID
 * @param {string} id Package ID
 * @returns {Promise<Object>} Object containing package data
 */
export const getPackageById = async (id) => {
    try {
        const response = await api.get(`/packages/${id}`);
        if (response.data && response.data.success) {
            return {
                success: true,
                data: response.data.data
            };
        }
        return {
            success: false,
            error: 'Failed to fetch package details'
        };
    } catch (error) {
        console.error('Error fetching package details:', error);
        return {
            success: false,
            error: error.message
        };
    }
};
