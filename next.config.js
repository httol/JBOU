/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    // Warning: Prop `className` did not match. Server
    // compatible with styled-components
    styledComponents: true,
  },
  reactStrictMode: true,
  images: {
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [
      {
        protocol: "https",
        hostname: "minimals.cc",
        port: "",
        pathname: "/assets/icons/auth/*",
      },
    ],
  },
};

module.exports = nextConfig
