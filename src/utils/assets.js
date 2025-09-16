/**
 * Asset utility functions for handling base URL paths in development and production
 * This ensures images work correctly for both local development and GitHub Pages deployment
 */

/**
 * Get the correct asset path by combining the base URL with the asset path
 * @param {string} assetPath - The path to the asset (e.g., '/assets/logo.svg')
 * @returns {string} - The complete path with base URL
 */
export const getAssetPath = (assetPath) => {
  const baseUrl = import.meta.env.BASE_URL || '/';
  // Remove leading slash from assetPath if it exists to avoid double slashes
  const cleanPath = assetPath.startsWith('/') ? assetPath.slice(1) : assetPath;
  // Ensure baseUrl ends with slash
  const cleanBaseUrl = baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`;
  return `${cleanBaseUrl}${cleanPath}`;
};

/**
 * Asset constants for all images used in the application
 * These paths are relative to the public directory
 */
export const ASSETS = {
  // Logo and branding
  LOGO: getAssetPath('assets/Logo.svg'),
  
  // QR codes and frames
  FRAME_QR: getAssetPath('assets/frame.png'),
  
  // Icons and favicons
  FAVICON: getAssetPath('vite.svg'),
  
  // Add more assets here as needed
  // HERO_IMAGE: getAssetPath('assets/hero-bg.jpg'),
  // GALLERY_IMAGE_1: getAssetPath('assets/gallery-1.jpg'),
};

/**
 * Helper function to get asset URL for dynamic asset loading
 * @param {string} filename - The filename in the assets directory
 * @returns {string} - The complete asset URL
 */
export const getAssetUrl = (filename) => {
  return getAssetPath(`assets/${filename}`);
};

/**
 * Helper function for favicon and meta icon paths
 * @param {string} iconPath - The icon path relative to public directory
 * @returns {string} - The complete icon URL
 */
export const getIconPath = (iconPath) => {
  return getAssetPath(iconPath);
};
