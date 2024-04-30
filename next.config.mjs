/** @type {import('next').NextConfig} */

const [hostname] = process.env.NEXT_PUBLIC_IMG_URL.replace('https://', '').split('/')

const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: hostname,
      },
    ],
  },
}

export default nextConfig
