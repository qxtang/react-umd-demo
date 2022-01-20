const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const ENV = process.env.NODE_ENV || 'development';
const isDev = ENV !== 'production';

const cssLoader = [
    {
        loader: 'css-loader',
    },
    {
        loader: 'postcss-loader',
        options: {
            sourceMap: true,
            plugins: [
                autoprefixer({
                    browsers: ['last 2 versions'],
                }),
            ],
        },
    },
];

module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: './index.js',

    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/dist',
        filename: 'qwsdk.js',
        libraryTarget: 'umd',
        library: 'QwSdk',
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

    devtool: isDev ? 'cheap-module-source-map' : 'source-map',

    devServer: {
        port: 8002,
        host: 'localhost',
        // publicPath: '/dist',
        contentBase: './dev',
        // historyApiFallback: true,
        // open: true
    },
};
