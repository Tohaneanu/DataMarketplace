module.exports = {
  reactStrictMode: true,
  experimental: {
    images: {
      unoptimized: true,
    },
  },
  trailingSlash: true,
  images: {
    domains: ["data-marketplace.infura-ipfs.io", "www.data-marketplace.infura-ipfs.io"],
    formats: ["image/webp"],
  },
  distDir: 'build',
};
