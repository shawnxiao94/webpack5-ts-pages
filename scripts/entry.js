/*
 * @Author: shawnxiao
 * @Date: 2021-04-04 12:13:22
 * @LastEditTime: 2021-04-05 11:17:12
 * @FilePath: /react-ts-pages/scripts/entry.js
 */
const {
  resolve
} = require('./utils')

/* 项目入口*/
module.exports = {
  // 打包名开头设置为index
  index: [resolve('src/index/index.tsx')]
  // 如果有第二个页面则配置第二个入口
  // app: [resolve('src/app/index.tsx')],
}
