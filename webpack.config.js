const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const ENV = process.env.NODE_ENV || 'development';
const isDev = ENV !== 'production';

const cssLoader = [
    {
        loader: 'css-loader',
    },
    {
        loader: 'postcss-loader',
    },
];

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
        },
    },
    resolve: {
        extensions: ['.jsx', '.js', '.json'],
        alias: {
            react: 'preact-compat',
            'react-dom': 'preact-compat',
        },
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
                use: isDev
                    ? ['style-loader'].concat(cssLoader)
                    : ExtractTextPlugin.extract({
                          fallback: 'style-loader',
                          use: cssLoader,
                      }),
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
    plugins: isDev ? [new webpack.NoEmitOnErrorsPlugin()] : [new ExtractTextPlugin('qwsdk.css')],
    devServer: {
        port: 8002,
        host: '0.0.0.0',
        static: {
            directory: path.join(__dirname, './dev'),
        },
    },
};
