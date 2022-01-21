// 用于打包 react 组件

const webpackConfig = Object.create(require('./webpack.config.js'));

webpackConfig.entry = './Main.tsx';
webpackConfig.output = Object.create(webpackConfig.output);
webpackConfig.output.filename = 'qwsdk-react.js';

webpackConfig.externals = {
    react: 'commonjs react',
    'react-dom': 'commonjs react-dom',
};

module.exports = webpackConfig;
