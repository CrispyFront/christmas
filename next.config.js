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
    config.module.rules.push({
      test: /\.(mp3)$/i,
      use: [
        {
          loader: "url-loader",
          options: {
            name: "[name]-[hash].[ext]",
          },
        },
      ],
    });

    return config;
  },
};

module.exports = nextConfig;
