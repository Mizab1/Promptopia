/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: ["mongoose"],
  },
  images: {
    domains: ["lh3.googleusercontent.com"],
  },
  webpack(config) {
    config.experiments = {
      ...config.experiments,
      topLevelAwait: true,
    };
    // config.resolve.fallback = {
    //   "mongodb-client-encryption": false,
    //   aws4: false,
    //   "supports-color": false,
    //   kerberos: false,
    //   "@mongodb-js/zstd": false,
    //   "@aws-sdk/credential-providers": false,
    //   snappy: false,
    // };

    return config;
  },
};

module.exports = nextConfig;
