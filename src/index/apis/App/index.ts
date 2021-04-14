/*
 * @Author: your name
 * @Date: 2020-10-16 10:15:44
 * @LastEditTime: 2021-04-14 09:15:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /webpack5-ts-pages/src/index/apis/App/index.ts
 */
import request from '@/common/utils/request'
import { instanceProps } from '@/common/utils/request'

export async function getMenuList(params:Object) {
  return request({
    url: '/api/menu/list',
    // url: `${process.env.APP_BASE_API}/api/menu/list`,
    method: 'get',
    model: null,
    params
  } as instanceProps)
}
