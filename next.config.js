const { withFaust, getWpHostname } = require("@faustwp/core");
const path = require("path");

/**
 * @type {import('next').NextConfig}
 **/
module.exports = withFaust({
  trailingSlash: true,
  experimental: {
    typedRoutes: false,
    appDir: false,
  },
  images: {
    domains: [
      "3.gravatar.com",
      "2.gravatar.com",
      "1.gravatar.com",
      "0.gravatar.com",
      "secure.gravatar.com",
      "images.pexels.com",
      "images.unsplash.com",
      getWpHostname(),
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: getWpHostname(),
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "1.gravatar.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "2.gravatar.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "secure.gravatar.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.pexels.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
    ],
  },

  // 👇 ВСТАВКА Webpack alias для "@"
  webpack: (config) => {
    config.resolve.alias["@"] = path.resolve(__dirname, "src");
    return config;
  },
});
