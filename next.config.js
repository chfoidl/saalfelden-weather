/** @type {import('next').NextConfig} */
const nextConfig = {}

if (!process.env.ENDPOINT_URL) {
  throw new Error('ENDPOINT_URL not set!');
}

if (!process.env.ENDPOINT_REFERRER) {
  throw new Error('ENDPOINT_REFERRER not set!');
}

module.exports = nextConfig
