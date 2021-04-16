/*
 * @Author: shawnxiao
 * @Date: 2021-04-11 11:42:48
 * @LastEditTime: 2021-04-15 10:31:49
 * @FilePath: /webpack5-ts-pages/src/index/store/settings/reducer.tsx
 */
import { Reducer } from 'redux'
import { IAction } from '../types'
import AdminConfig, { Config } from '../../config'
import { getStorage, setStorage } from '@/common/utils/storage'

import * as constants from './constants'

export interface Settings {
  fixedHeader: boolean;

  layout: Config['layout'];

  theme: MenuTheme;

  contentWidth: Config['contentWidth'];

  colorWeak: boolean;
}
type MenuTheme = 'dark' | 'light';

const localSettings = getStorage(constants.SETTINGS_KEY) || {}

const defaultState: Settings = {
  fixedHeader: AdminConfig.fixedHeader,
  layout: AdminConfig.layout,
  theme: AdminConfig.theme,
  contentWidth: AdminConfig.contentWidth,
  colorWeak: AdminConfig.colorWeak,
  ...localSettings
}

const reducer: Reducer<Settings, IAction<any>> = (state = defaultState, action: IAction<any>) => {
  const { type, payload } = action

  switch (type) {
    case constants.UPDATE_SETTINGS:
      setStorage(constants.SETTINGS_KEY, payload as Settings)
      return {
        ...payload
      }
    default:
      return {
        ...state
      }
  }
}

export default reducer
