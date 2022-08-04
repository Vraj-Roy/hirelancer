/** @type {import('next').NextConfig} */
require('dotenv').config();
const nextConfig = {
  reactStrictMode: false,
  env:{
    URL_PATH : process.env.URL_PATH,  
    DB_URI : process.env.DB_URI,
    CLIENT_ID:process.env.CLIENT_ID,
    CLIENT_SECRET:process.env.CLIENT_SECRET
  },
  images:{
    domains:["miro.medium.com",'upload.wikimedia.org','static.javatpoint.com','res.cloudinary.com' ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }
}

module.exports = nextConfig
