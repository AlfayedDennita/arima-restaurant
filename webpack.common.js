const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const ServiceWorkerWebpackPlugin = require('serviceworker-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, 'src/scripts/index.js'),
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'public'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, 'src/templates/index.html'),
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/public/'),
          to: path.resolve(__dirname, 'public/'),
        },
      ],
    }),
    new WebpackPwaManifest({
      filename: 'manifest.json',
      name: 'Arima - Restaurant Catalogue',
      short_name: 'Arima',
      description: 'Arima is a place that can help you find the best restaurant',
      theme_color: '#ffffff',
      background_color: '#ffffff',
      display: 'standalone',
      lang: 'en-US',
      scope: '/',
      start_url: '/',
      icons: [
        {
          src: path.resolve(__dirname, 'src/public/images/icons/maskable-icon.png'),
          sizes: [96, 128, 192, 256, 384, 512],
          type: 'image/png',
          purpose: 'any maskable',
          destination: path.join('images', 'icons', 'manifest'),
        },
      ],
    }),
    new ServiceWorkerWebpackPlugin({
      entry: path.resolve(__dirname, 'src/scripts/sw.js'),
    }),
  ],
};
