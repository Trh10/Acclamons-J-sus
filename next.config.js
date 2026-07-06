/** @type {import('next').NextConfig} */
const repoPath = '/Acclamons-J-sus'
const isGhPages = process.env.GITHUB_PAGES === 'true'

const nextConfig = {
  output: 'export',
  basePath: isGhPages ? repoPath : '',
  assetPrefix: isGhPages ? repoPath : '',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
