/*
 * @Author: shawnxiao
 * @Date: 2021-04-04 13:53:19
 * @LastEditTime: 2021-04-05 11:13:52
 * @FilePath: /react-ts-pages/src/react-app-env.d.ts
 */
// <reference types="react-scripts" />

// typescript  下引用[fileName].module.less  提示引用不到资源
// 原因：未在全局暴露less 接口
declare module '*.module.less' {
  const classes: { readonly [key: string]: string }
  export default classes
}

// ts下 解决报找不到图片 module的错误
declare module '*.svg'
declare module '*.png'
declare module '*.jpg'
declare module '*.jpeg'
declare module '*.gif'
declare module '*.bmp'
declare module '*.tiff'
