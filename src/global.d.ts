/*
 * @Author: shawnxiao
 * @Date: 2021-04-06 10:59:42
 * @LastEditTime: 2021-04-10 22:59:24
 * @FilePath: /webpack5-ts-pages/src/global.d.ts
 */
export {}
declare global {
  // eslint-disable-next-line no-unused-vars
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION__: Function;
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: Function;
  }
}
