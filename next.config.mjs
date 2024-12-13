/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ipexihhxgdxvqrngoayf.supabase.co',
      },
    ],
  },
}

export default nextConfig
