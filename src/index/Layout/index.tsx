/*
 * @Author: shawnxiao
 * @Date: 2021-04-11 16:53:41
 * @LastEditTime: 2021-04-16 11:07:41
 * @FilePath: /webpack5-ts-pages/src/index/Layout/index.tsx
 */
import React, { Suspense } from 'react'
import { connect } from 'react-redux'
import classnames from 'classnames'
import Sidebar from './components/LayoutSideBar'
import LayoutHeader from './components/LayoutHeader'
import { Spin } from 'antd'
import LayoutSettings from './components/LayoutSettings'
import MainRoutes from './MainRoutes'
import './index.less'

import { Settings } from '@/index/store/settings/reducer'
import { IStoreState } from '@/index/store/types'
interface LayoutProps {
  layout: Settings['layout'];
  colorWeak: boolean;
  fixedHeader: boolean;
  contentWidth: Settings['contentWidth'];
}

export const Layout = (props: LayoutProps) => {
  return (
    <>
      <section
        className={classnames({
          layout: true,
          'layout--side-bar': props.layout === 'side',
          'layout--weak': props.colorWeak
        })}
      >
        {props.layout === 'side' && <Sidebar />}
        <section className={classnames('layout__main')}>
          <LayoutHeader />
          <div
            className={classnames('layout__container', {
              'layout__container--fix': props.fixedHeader,
              'layout__container--fixed': props.contentWidth === 'fixed' && props.layout === 'top'
            })}
          >
            <Suspense fallback={<Spin size="large" className="layout__loading" />}>
              <MainRoutes />
            </Suspense>
          </div>
        </section>
        <LayoutSettings />
      </section>
    </>
  )
}

const mapStateToProps = ({ settings: { layout, colorWeak, fixedHeader, contentWidth } }: IStoreState) => ({
  layout,
    colorWeak,
    fixedHeader,
    contentWidth
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout)
