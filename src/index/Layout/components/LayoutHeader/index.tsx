/*
 * @Author: shawnxiao
 * @Date: 2021-04-11 17:09:09
 * @LastEditTime: 2021-04-11 17:12:56
 * @FilePath: /webpack5-ts-pages/src/index/Layout/components/LayoutHeader/index.tsx
 */
import React from 'react'
import { connect } from 'react-redux'

export const Header = () => {
  return (
    <div>
      Header
    </div>
  )
}

const mapStateToProps = () => ({
})

const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
