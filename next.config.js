/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  images: {
    domains: ['images.unsplash.com','wallpaperaccess.com','www.google.com','upload.wikimedia.org',
    "res.cloudinary.com","www.datocms-assets.com","cdn.pixabay.com","img.freepik.com",
    "media.comicbook.com","images.pexels.com","w0.peakpx.com","miro.medium.com",
    "w0.peakpx.com","www.pngitem.com","images.squarespace-cdn.com","1000logos.net",
     "imageio.forbes.com","knowledgecom.my","vercel.com","redux.js.org",
     "mcdn.wallpapersafari.com",`images6.alphacoders.com`,`i.pinimg.com`,
    `cdn2.iconfinder.com`,`w7.pngwing.com`],
  },

  env: {
    PRIVATE_MESL_KEY:process.env.PRIVATE_MESLA_KEY,
    PRIVATE_BLIPKAR_KEY:process.env.PRIVATE_BLIPKART_KEY,
    PRIVATE_SINKED_KEY:process.env.PRIVATE_SINKEDIN_KEY,
    PRIVATE_GITHU_KEY:process.env.PRIVATE_GITHUB_KEY,
    PRIVATE_LINKEDI_KEY:process.env.PRIVATE_LINKEDIN_KEY,
    PRIVATE_FACEBOO_KEY:process.env.PRIVATE_FACEBOOK_KEY,
    PRIVATE_TEST_LENDSQ_KEY:process.env.PRIVATE_TEST_LENDSQR_KEY,
    PRIVATE_DOTUB_KEY:process.env.PRIVATE_DOTUBE_KEY,
    PRIVATE_CHATSAP_KEY:process.env.PRIVATE_CHATSAPP_KEY,
    PRIVATE_BOOGL_KEY:process.env.PRIVATE_BOOGLE_KEY,
    PRIVATE_RESUM_KEY:process.env.PRIVATE_RESUME_KEY,
    PRIVATE_CAMAZO_KEY:process.env.PRIVATE_CAMAZON_KEY,
    PRIVATE_PLACEBOO_KEY:process.env.PRIVATE_PLACEBOOK_KEY,
    PRIVATE_CTEA_KEY:process.env.PRIVATE_CTEAM_KEY,
    PRIVATE_NETWORK_ACADEM_TEST_KEY:process.env.PRIVATE_NETWORK_ACADEMY_TEST_KEY,

  }

}

module.exports = nextConfig
