const { withSentryConfig } = require('@sentry/nextjs')

/** @type {import('next').NextConfig} */

const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  sentry: {
    hideSourceMaps: true,
  },
}

const sentryWebpackPluginOptions = {
  silent: true,
  authToken: process.env.NEXT_PUBLIC_SENTRY_AUTH_TOKEN,
}
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

module.exports = withSentryConfig(nextConfig, sentryWebpackPluginOptions)
