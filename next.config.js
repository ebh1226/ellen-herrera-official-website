/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // If using a repo name other than username.github.io, uncomment and set:
  // basePath: '/your-repo-name',
}

module.exports = nextConfig
