/*
 * @Author: shawnxiao
 * @Date: 2021-04-04 12:29:46
 * @LastEditTime: 2021-04-04 23:47:55
 * @FilePath: /react-ts-pages/babel.config.js
 */
module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: { browsers: ['chrome >= 47'] },
        useBuiltIns: 'usage', // babel按需加载 polyfill
        modules: false, // 生成ES6模块代码// 禁用模块化方案转换
        corejs: 3 // 2-corejs@2  3-corejs@3
      }
    ],
    '@babel/preset-typescript',
    '@babel/preset-react'
  ],
  plugins: [
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    ['@babel/plugin-proposal-class-properties', { loose: true }],
    '@babel/plugin-syntax-dynamic-import',
    '@babel/plugin-proposal-optional-chaining',
    '@babel/plugin-transform-runtime',
    ['import', {
      libraryName: 'antd',
      libraryDirectory: 'lib',
      style: true
    }]
  ]
}
