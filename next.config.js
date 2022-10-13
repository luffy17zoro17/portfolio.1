/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  images: {
    domains: ['images.unsplash.com','wallpaperaccess.com','www.google.com','upload.wikimedia.org',
    "res.cloudinary.com","www.datocms-assets.com","cdn.pixabay.com"],
  },
}

module.exports = nextConfig
