/** @type {import('next').NextConfig} */
const nextConfig = {
  // configuration for hashing password using also lucia
  webpack: (config) => {
    config.externals.push("@node-rs/bcrypt");
    return config;
  },
};

export default nextConfig;
