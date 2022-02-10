// 用于打包 react 组件的配置

const path = require('path');
const webpackConfig = Object.create(require('./webpack.config.js'));
const CopyPlugin = require('copy-webpack-plugin');

webpackConfig.entry = './Main.tsx';
webpackConfig.output = Object.create(webpackConfig.output);
webpackConfig.output.filename = 'qwsdk-react.js';

webpackConfig.plugins = [
  ...webpackConfig.plugins,
  new CopyPlugin({
    patterns: [{ from: path.resolve(__dirname, 'typings/qwsdk-react.d.ts'), to: path.resolve(__dirname, 'dist') }]
  })
];

// 使用 commonjs 规范
webpackConfig.externals = {
  react: 'commonjs react',
  'react-dom': 'commonjs react-dom'
};

module.exports = webpackConfig;
