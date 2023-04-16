/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig;

// module.exports = {
//   webpack: (nextConfig) => {
//     nextConfig.experiments = { ...nextConfig.experiments, topLevelAwait: true };
//     return nextConfig;
//   },
// };
