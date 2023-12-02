/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
    assetPrefix: process.env.NODE_ENV === 'production' ? '/nextjs-gh-pages/' : '',
}
