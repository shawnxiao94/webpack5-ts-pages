/*
 * @Author: shawnxiao
 * @Date: 2021-04-11 11:42:38
 * @LastEditTime: 2021-04-15 10:36:29
 * @FilePath: /webpack5-ts-pages/src/index/store/settings/actionCreators.tsx
 */
import * as constants from './constants'

import {Settings} from './reducer'

export const updateLayoutSettings = (settings: Settings) => ({
  type: constants.UPDATE_SETTINGS,
  payload: settings
})

