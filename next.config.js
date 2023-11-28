/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.(woff|woff2|ttf|eot)$/,
      use: {
        loader: "file-loader",
        options: {
          name: "fonts/[name].[ext]!static",
        },
      },
    });

    return config;
  },
};

module.exports = nextConfig;
