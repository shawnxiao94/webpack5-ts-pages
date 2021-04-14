/*
 * @Author: shawnxiao
 * @Date: 2021-04-11 11:42:48
 * @LastEditTime: 2021-04-14 18:40:47
 * @FilePath: /webpack5-ts-pages/src/index/store/app/reducer.tsx
 */
import { Reducer } from 'redux'
import { IAction } from '../types'
import { IRoute } from '../../router/config'
import { getAuthFlattenRoute } from '../../router/utils'
import { getStorage, setStorage } from '@/common/utils/storage'

import * as constants from './constants'

export interface AppState {
  sidebar: {
    opened: boolean;
  };
  routes: IRoute[];
  flattenRoutes: IRoute[];
  init: boolean;
}

const defaultState: AppState = {
  sidebar: {
    opened: getStorage(constants.SIDEBAR_KEY)
  },
  routes: [],
  flattenRoutes: [],
  init: false
}

const reducer: Reducer<AppState, IAction<any>> = (state = defaultState, action: IAction<any>) => {
  const { type, payload } = action

  switch (type) {
    case constants.SET_SIDE_BAR_OPENED:
      setStorage(constants.SIDEBAR_KEY, (payload as AppState['sidebar']).opened)
      return {
        ...state,
        sidebar: payload
      }
    case constants.SET_SIDE_BAR_ROUTES:
      return {
        ...state,
        routes: payload,
        flattenRoutes: getAuthFlattenRoute(payload),
        // flattenRoutes: flattenRoute(payload, true, false),
        init: true
      }
    case constants.REMOVE_SIDE_BAR_ROUTES:
      return {
        ...state,
        routes: [],
        flattenRoutes: [],
        init: false
      }
    default:
      return {
        ...state
      }
  }
}

export default reducer
