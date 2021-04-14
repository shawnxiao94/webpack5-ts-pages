/*
 * @Author: shawnxiao
 * @Date: 2021-04-11 17:09:09
 * @LastEditTime: 2021-04-11 17:10:04
 * @FilePath: /webpack5-ts-pages/src/index/Layout/components/LayoutSideBar/index.tsx
 */
import React from 'react'
import { connect } from 'react-redux'

export const Sidebar = () => {
  return (
    <div>
      Sidebar
    </div>
  )
}

const mapStateToProps = () => ({
})

const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)
