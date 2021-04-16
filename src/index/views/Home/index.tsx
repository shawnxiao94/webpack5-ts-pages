/*
 * @Author: shawnxiao
 * @Date: 2021-04-04 18:48:21
 * @LastEditTime: 2021-04-14 23:23:16
 * @FilePath: /webpack5-ts-pages/src/index/views/Home/index.tsx
 */

import React from 'react'

import img404 from '@/index/assets/images/404.png'
import bgBanner from '@/index/assets/images/bg_banner.png'
// import svgTest from '@/index/assets/svg/test.svg'

import store from '@/index/store'
import './index.less'

function home() {
  console.log(store.getState())
  return (
    <div>
      index
      <br />
      <img src={img404} alt="" />
      {process.env.APP_ENVO}
      <br />
      {process.env.BASEURL}
      <br />
      {process.env.APP_ENV}
      <div className="test-bg"></div>
      <img width="100px" src={bgBanner} alt="" />
    </div>
  )
}

export default home
