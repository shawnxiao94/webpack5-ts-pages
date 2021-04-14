/*
 * @Author: shawnxiao
 * @Date: 2021-04-06 10:14:20
 * @LastEditTime: 2021-04-12 23:18:52
 * @FilePath: /webpack5-ts-pages/src/index/views/User/Login/index.tsx
 */
import React, { useState, useCallback } from 'react'
import { connect } from 'react-redux'
import { Link
  // RouteComponentProps
} from 'react-router-dom'
// import {
//   setUserInfo,
//   UserState
// } from '@/index/store/module/user'
import { GithubOutlined, ZhihuOutlined } from '@ant-design/icons'
import { Tabs, Checkbox, Button, Form } from 'antd'
import './index.less'
import FormWrap from '../component/FormWrap'

export const Login = () => {
  const [activeTab, setActiveTab] = useState('account')
  const [form] = Form.useForm()

  const onSubmit = useCallback(() => {

  }, [])
  return (
    <FormWrap className="page-login">
      <Tabs defaultActiveKey={activeTab} onChange={setActiveTab}>
        <Tabs.TabPane tab="账号密码登录" key="account"></Tabs.TabPane>
        <Tabs.TabPane tab="手机号登录" key="mobile"></Tabs.TabPane>
      </Tabs>
      <Form onFinish={onSubmit} form={form}>
        <Form.Item>
          <div className="align--between">
            <Checkbox defaultChecked>自动登录</Checkbox>
            <Link to="/system/recovery-pwd">忘记密码</Link>
          </div>
        </Form.Item>
        <Form.Item>
          <Button block htmlType="submit" type="primary">
            登录
          </Button>
        </Form.Item>
        <Form.Item>
            <div className="align--between">
              <div className="page-login__others">
                其他登录方式
                <GithubOutlined className="page-login__icon"></GithubOutlined>
                <ZhihuOutlined className="page-login__icon"></ZhihuOutlined>
              </div>
              <Link to="/system/register">注册账号</Link>
            </div>
          </Form.Item>
      </Form>
    </FormWrap>
  )
}

const mapStateToProps = () => ({})

const mapDispatchToProps = {
  // setUserInfo
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)

