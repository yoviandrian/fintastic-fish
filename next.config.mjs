/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export -> works out of the box on Vercel & Netlify (and any static host)
  output: "export",
  trailingSlash: true,
  images: {
    // next/image optimization needs a server; disable it for static export.
    unoptimized: true,
  },
};

export default nextConfig;
