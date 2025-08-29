/** @type {import('next').NextConfig} */
const nextConfig = {
    // Turn off dev indicator
    devIndicators: {
        appIsrStatus: false,
    },
    images: {
        qualities: [100],
    },
};

export default nextConfig;
