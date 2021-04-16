/*
 * @Author: shawnxiao
 * @Date: 2021-04-16 10:03:09
 * @LastEditTime: 2021-04-16 10:37:18
 * @FilePath: /webpack5-ts-pages/src/index/Layout/components/LayoutNavBar/AvatarDropdown.tsx
 */
import React, { memo, useCallback } from 'react'
import { LogoutOutlined, SettingOutlined, UserOutlined } from '@ant-design/icons'
import { Avatar, Menu, message } from 'antd'
import { connect } from 'react-redux'
import { MenuInfo } from 'rc-menu/lib/interface'
import { useHistory } from 'react-router-dom'
import NavDropdown from './NavDropdown'
import { IStoreState } from '@/index/store/types'
import { actionCreators as actionCreatorsApp } from '@/index/store/app'
import { actionCreators as actionCreatorsUser } from '@/index/store/user'

interface AvatarDropdownProps {
  avatar?: string;
  account: string;
  classNames: string;
  clearSideBarRoutes: () => void;
  logout: () => void;
}

// eslint-disable-next-line no-unused-vars
function renderManageUser(onMenuClick: (params: MenuInfo) => void) {
  return (
    <Menu selectedKeys={[]} onClick={onMenuClick}>
      <Menu.Item key="center">
        <UserOutlined />
        个人中心
      </Menu.Item>
      <Menu.Item key="settings">
        <SettingOutlined />
        个人设置
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="logout">
        <LogoutOutlined />
        退出登录
      </Menu.Item>
    </Menu>
  )
}

function AvatarDropdown(props: AvatarDropdownProps) {
  const history = useHistory()

  const onMenuClick = useCallback(({ key }: MenuInfo) => {
    // console.log(key);
    message.success(key)
    if (key === 'logout') {
      props.logout()
      props.clearSideBarRoutes()
      history.replace('/user/login')
    }
  }, [])

  return (
    <NavDropdown overlay={renderManageUser(onMenuClick)} trigger={['hover']}>
      <div className={props.classNames}>
        <Avatar size="small" className="layout__navbar__avatar" src={props.avatar} alt="avatar" />
        <span className="layout__navbar__account">{props.account}</span>
      </div>
    </NavDropdown>
  )
}

export default connect(({ user: { avatar, account } }: IStoreState) => ({ avatar, account }), {
  clearSideBarRoutes: actionCreatorsApp.clearSideBarRoutes,
  logout: actionCreatorsUser.logout
})(memo(AvatarDropdown))
