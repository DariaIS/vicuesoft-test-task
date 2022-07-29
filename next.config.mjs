/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        loader: 'akamai',
        path: '',
    },
    basePath: process.env.NEXT_PUBLIC_BASE_PATH,
    assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH,

    async redirects() {
        return [
            {
                source: '/',
                destination: '/beers',
                permanent: true,
            },
        ]
    },
};

export default nextConfig;