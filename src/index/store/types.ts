/*
 * @Author: shawnxiao
 * @Date: 2021-04-05 15:10:45
 * @LastEditTime: 2021-04-11 15:50:06
 * @FilePath: /webpack5-ts-pages/src/index/store/types.ts
 */
import { AppState } from './app/reducer'
import { UserState } from './user/reducer'

export interface IStoreState {
  app: AppState;
  user: UserState;
  // settings: Settings;
}

export interface IAction<T> {
  type: string;
  payload: T;
}
