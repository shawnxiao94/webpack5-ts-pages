/*
 * @Author: shawnxiao
 * @Date: 2021-04-16 10:06:37
 * @LastEditTime: 2021-04-16 10:06:40
 * @FilePath: /webpack5-ts-pages/src/index/Layout/components/LayoutNavBar/NavDropdown.tsx
 */
import React, { memo } from 'react'
import { DropDownProps } from 'antd/es/dropdown'
import { Dropdown } from 'antd'

interface NavDropDownProps extends DropDownProps {
  children: React.ReactNode;
}

function NavDropDown(props: NavDropDownProps) {
  return <Dropdown {...props}>{props.children}</Dropdown>
}

export default memo(NavDropDown)
