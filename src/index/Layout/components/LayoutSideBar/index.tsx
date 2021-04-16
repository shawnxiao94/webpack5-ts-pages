/*
 * @Author: shawnxiao
 * @Date: 2021-04-11 17:09:09
 * @LastEditTime: 2021-04-15 18:08:38
 * @FilePath: /webpack5-ts-pages/src/index/Layout/components/LayoutSideBar/index.tsx
 */
import React from 'react'
import { connect } from 'react-redux'
import classnames from 'classnames'
import { Menu } from 'antd'
import Logo from '../SidebarLogo/index'
import { getPagePathList } from '@/index/router/utils'
import renderMenu from '../SideMenu/index'
import './index.less'

import { IRoute } from '@/index/router/config'
import { IStoreState } from '@/index/store/types'
import { Settings } from '@/index/store/settings/reducer'
import { AppState } from '@/index/store/app/reducer'

interface LayoutSideBarProps extends Settings {
  sidebar: AppState['sidebar'];
  routes: AppState['routes'];
  init: boolean;
}

const LayoutSideBar = ({ theme, layout, sidebar, routes }: LayoutSideBarProps) => {
  const inlineCollapsed: {
    inlineCollapsed?: boolean;
  } = {}

  if (layout === 'side') {
    inlineCollapsed.inlineCollapsed = !sidebar.opened
  }
  const { pathname } = window.location

  return (
    <aside
      className={classnames(
        'layout__side-bar',
        `layout__side-bar--${theme}`,
        `layout__side-bar--${layout}`,
        {
          'layout__side-bar--close': !sidebar.opened && layout === 'side'
        }
      )}
    >
      <div className={`layout__side-bar__logo--${layout}`}>
        <Logo opened={!sidebar.opened} layout={layout} />
      </div>
      <div className="layout__side-bar__menu">
        <Menu
          defaultSelectedKeys={[pathname]}
          defaultOpenKeys={layout === 'side' && sidebar.opened ? getPagePathList(pathname) : []}
          mode={layout === 'side' ? 'inline' : 'horizontal'}
          theme={theme}
          {...inlineCollapsed}
        >
          {routes.map((menu: IRoute) => renderMenu(menu))}
        </Menu>
      </div>
    </aside>
  )
}

const mapStateToProps = ({ settings, app: { sidebar, routes, init } }: IStoreState) => ({
  ...settings,
  sidebar,
  routes,
  init
})

const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)((LayoutSideBar))
