const path = require('path');
const { version } = require('./package.json');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const ENV = process.env.NODE_ENV || 'development';
const isDev = ENV !== 'production';

const commonPlugins = [
  // new BundleAnalyzerPlugin()
];

module.exports = {
  mode: isDev ? 'development' : 'production',
  devtool: isDev && 'cheap-module-source-map',
  context: path.resolve(__dirname, 'src'),
  entry: './index.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: isDev ? '/dist' : `//cdn.jsdelivr.net/npm/qw-sdk-demo@${version}/dist/`,
    filename: 'qwsdk.js',
    library: {
      name: 'QwSdk',
      type: 'umd',
      export: 'default',
    },
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js', '.json'],

    // 使用 preact 代替
    alias: {
      react: 'preact/compat',
      'react-dom': 'preact/compat',
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.less$/,
        use: [
          isDev ? 'style-loader' : MiniCssExtractPlugin.loader, // 开发模式用 style-loader 才支持热更
          'css-loader',
          'postcss-loader',
          {
            loader: 'less-loader',
            options: {
              lessOptions: {
                javascriptEnabled: true,
              },
            },
          },
        ],
      },
      {
        test: /\.(svg|woff2?|ttf|eot|jpe?g|png|gif)(\?.*)?$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 1024 * 10,
            },
          },
        ],
      },
    ],
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        extractComments: false,
      }),
    ],
  },
  plugins: isDev ? [...commonPlugins] : [new MiniCssExtractPlugin({ filename: 'qwsdk.css' }), ...commonPlugins],
  devServer: {
    port: 8002,
    host: '0.0.0.0',
    static: {
      directory: path.join(__dirname, './dev'),
    },
  },
};
