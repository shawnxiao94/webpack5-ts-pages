/*
 * @Author: shawnxiao
 * @Date: 2021-04-11 11:36:05
 * @LastEditTime: 2021-04-11 15:46:02
 * @FilePath: /webpack5-ts-pages/src/index/store/reducer.ts
 */
import { combineReducers, Reducer } from 'redux'
import { IStoreState, IAction } from './types'
import { reducer as appReducer } from './app'
import { reducer as userReducer } from './user'
// combineReducers 合并仓库reducer
const reducer: Reducer<IStoreState, IAction<any>> = combineReducers<IStoreState>({
  app: appReducer,
  user: userReducer
})

export default reducer
