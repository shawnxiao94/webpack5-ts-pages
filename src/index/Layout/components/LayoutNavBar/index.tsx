/*
 * @Author: shawnxiao
 * @Date: 2021-04-11 17:09:09
 * @LastEditTime: 2021-04-16 10:38:11
 * @FilePath: /webpack5-ts-pages/src/index/Layout/components/LayoutNavBar/index.tsx
 */
import React, {memo, useCallback} from 'react'
import { connect } from 'react-redux'
import classnames from 'classnames'

import './index.less'
import Hamburger from '../Hamburger'
import Breadcrumb from '../Breadcrumb'
import NavBarItem from './NavBarItem'
// import NoticeIcon from '../NoticeIcon';
import AvatarDropdown from './AvatarDropdown'

import { IStoreState } from '@/index/store/types'
import { AppState } from '@/index/store/app/reducer'
import { Settings } from '@/index/store/settings/reducer'
import { actionCreators } from '@/index/store/app'

interface LayoutNavBarProps extends AppState {
  avatar: string | undefined;

  layout: Settings['layout'];

  theme: Settings['theme'];

  // eslint-disable-next-line no-unused-vars
  ActionUpdateSideBar: (sidebar: AppState['sidebar']) => void;
}

const LayoutNavBar = ({ sidebar, ActionUpdateSideBar, layout, theme }: LayoutNavBarProps) => {
  const onTrigger = useCallback(() => {
    ActionUpdateSideBar({
      ...sidebar,
      opened: !sidebar.opened
    })
  }, [sidebar, ActionUpdateSideBar])
  const onHelpItemClick = useCallback(() => {
    window.open('https://github.com/landluck/react-ant-admin')
  }, [])
  return (
    <div className="layout__navbar">
      {layout === 'side' && (
        <div className="layout__navbar__nav">
          <Hamburger isActive={sidebar.opened} onTrigger={onTrigger} />
          <Breadcrumb />
        </div>
      )}

      <div className="layout__navbar__menu">
        {/* 搜索暂时不做 */}
        {/* <Search></Search> */}
        <NavBarItem
          className={classnames('layout__navbar__menu-item', `layout__navbar__menu-item--${theme}`)}
          onClick={onHelpItemClick}
          icon="github"
          count={0}
        ></NavBarItem>
        {/* <NoticeIcon /> */}
        <AvatarDropdown
          classNames={classnames(
            'layout__navbar__menu-item',
            `layout__navbar__menu-item--${theme}`
          )}
        />
      </div>
    </div>
  )
}

const mapStateToProps = ({ app, user: { avatar }, settings: { layout, theme } }: IStoreState) => ({
  ...app,
    avatar,
    layout,
    theme
})

const mapDispatchToProps = {
  ActionUpdateSideBar: actionCreators.updateSideBar
}

export default connect(mapStateToProps, mapDispatchToProps)(memo(LayoutNavBar))
