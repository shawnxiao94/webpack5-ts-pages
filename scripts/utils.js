/*
 * @Author: shawnxiao
 * @Date: 2021-04-04 12:25:03
 * @LastEditTime: 2021-04-04 22:37:07
 * @FilePath: /react-ts-pages/scripts/utils.js
 */

const path = require('path')

const config = require('./config')

exports.assetsPath = function (_path) {
  return path.posix.join(config.assetsSubDirectory, _path)
}

exports.resolve = function (dir) {
  return path.join(__dirname, './../', dir)
}
