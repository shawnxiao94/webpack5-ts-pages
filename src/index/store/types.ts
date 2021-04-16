/*
 * @Author: shawnxiao
 * @Date: 2021-04-05 15:10:45
 * @LastEditTime: 2021-04-15 10:40:38
 * @FilePath: /webpack5-ts-pages/src/index/store/types.ts
 */
import { AppState } from './app/reducer'
import { UserState } from './user/reducer'
import { Settings } from './settings/reducer'

export interface IStoreState {
  app: AppState;
  user: UserState;
  settings: Settings;
}

export interface IAction<T> {
  type: string;
  payload: T;
}
