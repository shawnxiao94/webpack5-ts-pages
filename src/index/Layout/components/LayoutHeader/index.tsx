/*
 * @Author: shawnxiao
 * @Date: 2021-04-11 17:09:09
 * @LastEditTime: 2021-04-15 18:12:59
 * @FilePath: /webpack5-ts-pages/src/index/Layout/components/LayoutHeader/index.tsx
 */
import React, {memo} from 'react'
import { connect } from 'react-redux'
import classnames from 'classnames'
import { IStoreState } from '@/index/store/types'
import LayoutSideBar from '../LayoutSideBar'

import LayoutNavBar from '../LayoutNavBar/index'

import './index.less'

interface LayoutHeaderProps {
  fixedHeader: boolean;
  contentWidth: IStoreState['settings']['contentWidth'];
  layout: IStoreState['settings']['layout'];
  sidebar: IStoreState['app']['sidebar'];
  theme: IStoreState['settings']['theme'];
}

function LayoutHeader (props: LayoutHeaderProps) {
  return (
    <header
      className={classnames(
        'layout__header',
        `layout__header--${props.layout}`,
        `layout__header--${props.theme}`,
        {
          'layout__header--fix': props.fixedHeader,
          // close 情况只有在 layout 为 side 的时候存在
          'layout__header--close': !props.sidebar.opened && props.layout === 'side'
        }
      )}
    >
      <div
        className={classnames('layout__header__inner', {
          [`layout__header__inner--${props.contentWidth}`]: props.layout === 'top'
        })}
      >
        {props.layout === 'top' && (
          <div className="layout__header--top-side-bar">
            <LayoutSideBar />
          </div>
        )}
        <LayoutNavBar />
      </div>

      {/* <tags-view v-if="needTagsView" /> */}
    </header>
  )
}

const mapStateToProps = ({ settings, app: {sidebar} }: IStoreState) => ({
  ...settings, sidebar
})

const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(memo(LayoutHeader))
