const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const ENV = process.env.NODE_ENV || 'development';
const isDev = ENV !== 'production';

module.exports = {
    mode: isDev ? 'development' : 'production',
    devtool: isDev ? 'cheap-module-source-map' : 'source-map',
    context: path.resolve(__dirname, 'src'),
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/dist',
        filename: 'qwsdk.js',
        library: {
            name: 'QwSdk',
            type: 'umd',
            export: 'default',
        },
    },
    resolve: {
        extensions: ['.jsx', '.js', '.json'],
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: 'babel-loader',
            },
            {
                test: /\.css$/,
                use: [isDev ? 'style-loader' : MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
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
    plugins: isDev ? [new webpack.NoEmitOnErrorsPlugin()] : [new MiniCssExtractPlugin({ filename: 'qwsdk.css' })],
    devServer: {
        port: 8002,
        host: '0.0.0.0',
        static: {
            directory: path.join(__dirname, './dev'),
        },
    },
};
