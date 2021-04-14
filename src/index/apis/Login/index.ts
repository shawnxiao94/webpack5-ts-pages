/*
 * @Author: your name
 * @Date: 2020-10-16 10:15:44
 * @LastEditTime: 2021-04-13 23:05:18
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /webpack5-ts-pages/src/index/apis/Login/index.ts
 */
import request from '@/common/utils/request'
// import { getParentUrl } from '@/common/utils'
import { instanceProps } from '@/common/utils/request'

export async function checkLoginToken(params:Object) {
  // 区分lab和非lab服务环境
  // const parentUrl = getParentUrl()
  // const url = parentUrl || `${process.env.APP_BASE_API}`
  // const path = url.includes('lab') ? 'sso1.lab' : 'sso1'
  // const origin = url.includes('lab') ? 'app.lab.clickpaas.com' : 'app.clickpaas.com'
  // const protocol = parentUrl ? `${parentUrl.split('://')[0]}:` : ''
  return request({
    // url: `${protocol}//${path}.clickpaas.com/api/sso/login/checkStatus?origin=${origin}`,
    // url: `//${path}.clickpaas.com/api/sso/login/checkStatus?origin=${origin}`,
    url: '/api/sso/login/checkStatus',
    method: 'get',
    model: null,
    params
  } as instanceProps)
}
export async function getUserInfoByToken(params:Object) {
  return request({
    url: '/api/user/info',
    method: 'get',
    model: null,
    params
  } as instanceProps)
}
