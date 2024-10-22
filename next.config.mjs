/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/**", // This will allow all images from Cloudinary
      },
    ],
  },
};

export default nextConfig;
