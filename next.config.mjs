/** @type {import('next').NextConfig} */
const nextConfig = {
  // configuration for hashing password using also lucia
  webpack: (config) => {
    config.externals.push("@node-rs/bcrypt");
    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "txvmiozvwdfkbzpcckxi.supabase.co",
      },
    ],
    unoptimized: true,
  },
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
};

export default nextConfig;
