/*
 * @Author: your name
 * @Date: 2020-12-10 10:55:28
 * @LastEditTime: 2021-04-06 11:43:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /webpack5-ts-pages/scripts/rules/styleRules.js
 */
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const config = require('../config')
const {
  // eslint-disable-next-line no-unused-vars
  resolve
} = require('../utils')
const theme = require('../theme')
const {
  cacheLoader
} = require('./loaders')

const cssLoader = (modules) => ({
  loader: 'css-loader',
  options: {
    modules: modules ? {
      mode: 'local',
      localIdentName: '[local]--[contenthash:base64:8]'
    } : false
  }
})

const sassLoader = {
  loader: 'sass-loader',
  options: {
    sassOptions: {
      // 此配置后页面直接引入scss无需路径
      // includePaths: [require('bourbon').includePaths,
        // resolve('src/assets/styles')
      // ]
    }
    // 或者这样配置
    // includePaths: [resolve('src/assets/styles')]
  }
}

const lessLoader = {
  loader: 'less-loader',
  options: {
    // 如果使用less-loader@5，请移除 lessOptions 这一级直接配置选项。
    lessOptions: {
      javascriptEnabled: true,
      modifyVars: theme
    }
  }
}

const baseLoaders = (modules) => [
  config.extractCss ? {loader: MiniCssExtractPlugin.loader, options: {
    /*
    * 复写css文件中资源路径
    * webpack3.x配置在extract-text-webpack-plugin插件中
    * 因为css文件中的外链是相对与css的，
    * 我们抽离的css文件在可能会单独放在css文件夹内
    * 引用其他如img/a.png会寻址错误
    * 这种情况下所以单独需要配置../，复写其中资源的路径
    */
    publicPath: config.cssPublicPath
  }} : 'style-loader',
  cacheLoader,
  cssLoader(modules),
  'postcss-loader'
]

module.exports = [{
    test: /\.css$/,
    // include: [resolve('src')],
    use: baseLoaders(false)
  },
  {
    test: /\.scss$/,
    // include: [resolve('src')],
    use: [...baseLoaders(true), sassLoader]
  },
  {
    // for ant design
    test: /\.less$/,
    // include: [resolve('src')],
    // less do not use threadLoader
    // https://github.com/webpack-contrib/thread-loader/issues/10
    use: [...baseLoaders(false), lessLoader]
  }
]
