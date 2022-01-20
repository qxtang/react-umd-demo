// webpack config for export min.js

const webpackConfig = Object.create(require('./webpack.config.js'));

webpackConfig.output = Object.create(webpackConfig.output);
webpackConfig.output.filename = webpackConfig.output.filename.replace(/\.js$/, '.min.js');

module.exports = webpackConfig;
