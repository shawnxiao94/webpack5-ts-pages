/*
 * @Author: shawnxiao
 * @Date: 2021-04-04 12:30:31
 * @LastEditTime: 2021-04-04 12:32:11
 * @FilePath: /react-ts-pages/scripts/rules/jsRules.js
 */

const {
  resolve
} = require('../utils')
const {
  cacheLoader,
  threadLoader
} = require('./loaders')

module.exports = [{
  test: /\.(j|t)sx?$/,
  use: [
    cacheLoader,
    /*
      thread-loader会对其后面的loader（这里是babel-loader）开启多进程打包。
      进程启动大概为600ms，进程通信也有开销。(启动的开销比较昂贵，不要滥用)
      只有工作消耗时间比较长，才需要多进程打包
      thread-loader必须最后执行，再次说明loader是从下往上，从右往左的执行顺序,所以想要使用thread-loader优化某项的打包速度，必须放在其后执行
    */
    threadLoader({
      // 使用2个进程
      workers: 2
    }),
    {
      loader: 'babel-loader'
    }
  ],
  include: [resolve('src')],
  exclude: /node_modules/
} ]
