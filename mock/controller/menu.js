/*
 * @Author: shawnxiao
 * @Date: 2021-02-01 11:53:35
 * @LastEditTime: 2021-04-14 22:58:12
 * @FilePath: /webpack5-ts-pages/mock/controller/menu.js
 */

module.exports = [
  {
    url: '/api/menu/list',
    type: 'get',
    response: {
      code: 200,
      message: 'success',
      data: {
        list: ['Home', 'HomeIndex', 'Dashboard']
      }
    }
  }
]
