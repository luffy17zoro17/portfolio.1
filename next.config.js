/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  images: {
    domains: ['images.unsplash.com','wallpaperaccess.com','www.google.com','upload.wikimedia.org',
    "res.cloudinary.com","www.datocms-assets.com","cdn.pixabay.com","img.freepik.com",
    "media.comicbook.com"],
  },

  env: {
    PRIVATE_MESL_KEY:process.env.PRIVATE_MESLA_KEY,
    PRIVATE_BLIPKAR_KEY:process.env.PRIVATE_BLIPKART_KEY,
    PRIVATE_GITHU_KEY:process.env.PRIVATE_GITHUB_KEY,
    PRIVATE_LINKEDI_KEY:process.env.PRIVATE_LINKEDIN_KEY,
    PRIVATE_FACEBOO_KEY:process.env.PRIVATE_FACEBOOK_KEY,
  }


 
}

module.exports = nextConfig
