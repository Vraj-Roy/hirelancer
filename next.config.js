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
}

module.exports = nextConfig
