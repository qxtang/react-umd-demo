module.exports = {
  presets: ['@babel/preset-react', '@babel/typescript'],

  plugins: [
    // antd4 已默认支持按需加载
    // [
    //     'import',
    //     {
    //         'libraryName': 'antd',
    //         // 'libraryDirectory': 'es',
    //         'style': true
    //     }
    // ]
  ]
};
