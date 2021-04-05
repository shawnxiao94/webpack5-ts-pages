/*
 * @Author: your name
 * @Date: 2020-12-10 10:54:51
 * @LastEditTime: 2021-04-04 12:16:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /react-ts-pages/scripts/constants.js
 */
// 获取命令行 --mode dev 后面的参数转化为键值对
const argv = require('yargs-parser')(process.argv.slice(4))
const APP_ENV = argv.env || 'dev'

// 扩展名
const FILE_EXTENSIONS = ['.ts', '.tsx', '.js', '.jsx', '.json', '.styl', '.scss', '.less', '.css']

module.exports = {
  APP_ENV,
  FILE_EXTENSIONS
}
