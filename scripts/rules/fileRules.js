/*
 * @Author: your name
 * @Date: 2020-12-10 10:55:49
 * @LastEditTime: 2021-04-05 11:19:32
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /react-ts-pages/scripts/rules/fileRules.js
 */
const {
  assetsPath,
  resolve
} = require('../utils')
const {
  threadLoader,
  cacheLoader
} = require('./loaders')

function getUrlloader(assetsPrefix) {
  return {
    loader: 'url-loader',
    options: {
      // 1024 == 1kb
      // 小于20kb时打包成base64编码的图片否则单独打包成图片
      limit: 10240,
      name: assetsPath(`${assetsPrefix}/[name].[contenthash:7].[ext]`)
    }
  }
}

module.exports = [{
    test: /\.(png|jpe?g|gif)(\?.*)?$/,
    use: [getUrlloader('images')]
  },
  {
    test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
    use: [getUrlloader('fonts')]
  },
  {
    test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
    use: [getUrlloader('media')]
  },
  {
    test: /\.svg$/,
    // @svgr/webpack把ts中svg转成react component
    use: [cacheLoader, threadLoader(), '@svgr/webpack'],
    include: [resolve('src')]
  }
]
