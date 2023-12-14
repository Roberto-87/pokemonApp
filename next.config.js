/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    incrementalCacheHandlerPath: require.resolve('./cache-handler.js'),
    isrMemoryCacheSize: 0 // disable default in-memory caching
  }
}

module.exports = nextConfig
