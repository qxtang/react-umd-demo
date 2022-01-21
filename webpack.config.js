const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');

const ENV = process.env.NODE_ENV || 'development';
const isDev = ENV !== 'production';

module.exports = {
    mode: isDev ? 'development' : 'production',
    devtool: isDev && 'cheap-module-source-map',
    context: path.resolve(__dirname, 'src'),
    entry: './index.ts',
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
        extensions: ['.tsx', '.ts', '.jsx', '.js', '.json'],
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
                    (isDev ? 'style-loader' : MiniCssExtractPlugin.loader),
                    'css-loader',
                    'postcss-loader',
                    {
                        loader: 'less-loader',
                        options: {
                            lessOptions: {
                                javascriptEnabled: true,
                            }
                        }
                    }
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
    plugins: isDev ? [] : [new MiniCssExtractPlugin({ filename: 'qwsdk.css' })],
    devServer: {
        port: 8002,
        host: '0.0.0.0',
        static: {
            directory: path.join(__dirname, './dev'),
        },
    },
};
