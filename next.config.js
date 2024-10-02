/** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: false,
//   images: {
//     remotePatterns: [
//       {
//         protocol: "https",
//         hostname: "**.neocongroup.com",
//       },
//     ],
//   },
// };

// module.exports = nextConfig;
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ["localhost", "127.0.0.1"],
  },
};

module.exports = nextConfig;
