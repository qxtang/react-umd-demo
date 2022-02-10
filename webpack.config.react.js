// 用于打包 react 组件的配置

const webpackConfig = Object.create(require('./webpack.config.js'));

webpackConfig.entry = './Main.tsx';
webpackConfig.output = Object.create(webpackConfig.output);
webpackConfig.output.filename = 'qwsdk-react.js';

// 使用 commonjs 规范
webpackConfig.externals = {
  react: 'commonjs react',
  'react-dom': 'commonjs react-dom'
};

module.exports = webpackConfig;
