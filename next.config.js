/** @type {import('next').NextConfig} */
require('dotenv').config();
const nextConfig = {
  reactStrictMode: false,
  env:{
    URL_PATH : process.env.URL_PATH
  },
  images:{
    domains:["miro.medium.com",'upload.wikimedia.org' ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }
}

module.exports = nextConfig
