///** @type {import('next').NextConfig} */
//const nextConfig = {}

//module.exports = nextConfig

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "avatars.githubusercontent.com",
            },
        ],
    },
};

module.exports = nextConfig;