/*
 * @Author: shawnxiao
 * @Date: 2021-02-01 11:53:35
 * @LastEditTime: 2021-04-16 15:48:38
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
        routeKeyArr: ['Home', 'HomeIndex', 'Dashboard', 'SystemManage', 'SystemManageUser'],
        btnKeyArr: []
      }
    }
  }
]
