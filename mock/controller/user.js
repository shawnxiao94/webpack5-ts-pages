/*
 * @Author: shawnxiao
 * @Date: 2021-04-13 21:17:49
 * @LastEditTime: 2021-04-16 11:13:16
 * @FilePath: /webpack5-ts-pages/mock/controller/user.js
 */
module.exports = [
  {
    url: '/api/sso/login/checkStatus',
    type: 'get',
    response: {
      code: 200,
      message: 'success',
      data: {
        login: true,
        binding: true,
        tokenId: 'tokenId380530530'
      }
    }
  },
  {
    url: '/api/user/info',
    type: 'get',
    response: {
      code: 200,
      message: 'success',
      data: {
        name: 'shawnxiao',
        avatar: '',
        account: 'account',
        mobile: 'mobile',
        role: 'role',
        id: 'id'
      }
    }
  }
]
