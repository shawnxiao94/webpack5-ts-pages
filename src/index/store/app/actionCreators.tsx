/*
 * @Author: shawnxiao
 * @Date: 2021-04-11 11:42:38
 * @LastEditTime: 2021-04-15 18:06:31
 * @FilePath: /webpack5-ts-pages/src/index/store/app/actionCreators.tsx
 */
import * as constants from './constants'
// import { IRoute } from '../../router/config'
import { Modal } from 'antd'

import {AppState, AllAuthName} from './reducer'

import * as request from '@/index/apis/App'

export const updateSideBar = (sidebar: AppState['sidebar']) => ({
  type: constants.SET_SIDE_BAR_OPENED,
  payload: sidebar
})

export const setSideBarRoutes = (data:AllAuthName) => ({
  type: constants.SET_SIDE_BAR_ROUTES,
  payload: data
})

export const clearSideBarRoutes = () => ({
  type: constants.REMOVE_SIDE_BAR_ROUTES,
  payload: null
})

export const getMenuList:any = () => {
  return (dispatch:any) => {
    request.getMenuList({}).then((res:any) => {
      if (res?.data && res?.data?.routeKeyArr?.length){
        dispatch(setSideBarRoutes(res.data))
      } else {
        Modal.error({
          title: '温馨提示！',
          content: '您暂无权限，请联系管理员！',
          okText: '确定',
          onOk() {
          }
        })
      }
    }).catch((err) => {
      Modal.error({
        title: '温馨提示！',
        content: err?.message || '获取菜单失败!',
        okText: '确定',
        onOk() {
        }
      })
    })
  }
}
