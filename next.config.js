/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        // NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URl,
    },

    publicRuntimeConfig: {
        NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URl,
    },
}

module.exports = nextConfig
