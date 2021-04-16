/*
 * @Author: shawnxiao
 * @Date: 2021-04-04 12:11:23
 * @LastEditTime: 2021-04-16 13:58:45
 * @FilePath: /webpack5-ts-pages/scripts/webpack.config.js
 */
const entry = require('./entry')
const constants = require('./constants')
const config = require('./config')
const {
  assetsPath,
  resolve
} = require('./utils')

const plugins = require('./plugins')
const devServer = require('./devServer')
const jsRules = require('./rules/jsRules')
const styleRules = require('./rules/styleRules')
const fileRules = require('./rules/fileRules')
const optimization = require('./optimization')

module.exports = {
  // 环境
  mode: constants.APP_ENV === 'dev' ? 'development' : 'production',
  entry,
  externals: config.externals,
  output: {
    path: config.assetsRoot,
    filename: 'js/[name].[contenthash].js',
    chunkFilename: constants.APP_ENV === 'dev' ?
      '[name].js' : assetsPath('js/[name].[id].[contenthash].js'),
    publicPath: config.assetsPublicPath,
    pathinfo: false
  },
  resolve: {
    // 后缀名自动补全
    extensions: constants.FILE_EXTENSIONS,
    // 别名
    alias: {
      // 解决报错提示react-🔥-dom patch is not detected,dev环境安装@hot-loader/react-dom并配置如下
      'react-dom': '@hot-loader/react-dom',
      '@/*': ['src/*'],
      '@': resolve('src'),
      '@index': resolve('src/index')
    }
  },
  module: {
    rules: [
      ...styleRules,
      ...jsRules,
      ...fileRules
    ]
  },
  plugins: [...plugins],
  optimization,
  stats: 'minimal',
  target: 'web',
  devtool: config.sourceMap,
  devServer: constants.APP_ENV === 'dev' ? devServer : {}
}
