// webpack config for export react component

const webpackConfig = Object.create(require('./webpack.config.js'));

webpackConfig.entry = './Main.jsx';
webpackConfig.output = Object.create(webpackConfig.output);
webpackConfig.output.filename = 'qwsdk-react.js';

webpackConfig.externals = {
    react: 'commonjs react',
    'react-dom': 'commonjs react-dom',
};

module.exports = webpackConfig;
