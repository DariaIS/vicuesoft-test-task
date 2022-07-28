/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        loader: 'akamai',
        path: '',
    },
    basePath: '/vicuesoft-test-task',
    assetPrefix: '/vicuesoft-test-task',

    async redirects() {
        return [
            {
                source: '/vicuesoft-test-task',
                destination: '/vicuesoft-test-task/beers',
                permanent: true,
            },
        ]
    },
};

export default nextConfig;