/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        // Use remotePatterns instead of deprecated domains
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'hebbkx1anhila5yf.public.blob.vercel-storage.com',
            },
            {
                protocol: 'https',
                hostname: 'storage.googleapis.com',
                // Allow all paths for signed URLs
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'firebasestorage.googleapis.com',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'maps.googleapis.com',
            },
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
            },
        ],
        // Disable image optimization for signed URLs (they have authentication in query params)
        unoptimized: false, // Keep false, we'll use unoptimized prop per image
    },
};

export default nextConfig;
