/*
 * @Author: shawnxiao
 * @Date: 2021-04-04 12:43:37
 * @LastEditTime: 2021-04-13 10:16:57
 * @FilePath: /webpack5-ts-pages/scripts/devServer.js
 */
const {
  isMock
} = require('./config')
// 引入mock.js
const Mock = require('../mock/index.js')

module.exports = {
  contentBase: '../dist',
  host: 'localhost',
  port: 9527,
  // 非hash路由模式时解决刷新页面404问题，=> 重定向index.html页面
  historyApiFallback: true,
  open: true,
  overlay: {
    // 当出现编译器错误或警告时，就在网页上显示一层黑色的背景层和错误信息
    errors: true
  },
  inline: true,
  hot: true, // 热更新，修改代码后，不刷新整个页面
  progress: true, // 编译的进度条
  compress: true, // 自动压缩
  // eslint-disable-next-line no-unused-vars
  after (app) {
    // do fancy stuff
    if (isMock) {
      Mock(app)
    }
  },
  proxy: {
    '/project': {
      target: 'http://127.0.0.1:8888',
      pathRewrite: {
        '^/project': '/'
      }, // 开头的 /project 路径，会被替换为http://127.0.0.1:8888/路径
      ws: true,
      changeOrigin: true // 突破网站对爬虫的限制, 一般都要开启
    },
    '/react-ant-admin-api': {
      target: 'https://www.landluck.com.cn/react-ant-admin-api', // 代理 mock 服务的请求, 相当于是 /api 开头的全部匹配到 http://localhost:5000/api
      pathRewrite: {
        '^/react-ant-admin-api': '/'
      },
      ws: true,
      changeOrigin: true
    }
  }
}
