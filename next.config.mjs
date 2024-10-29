/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: [
            'hebbkx1anhila5yf.public.blob.vercel-storage.com',
            'storage.googleapis.com', // Add this line for Google Cloud Storage images
            'maps.googleapis.com'
        ],
    },
};

export default nextConfig;
