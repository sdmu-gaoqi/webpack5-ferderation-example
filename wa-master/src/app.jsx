import React from 'react';
import moment from 'moment'
import Layout from "new_app/Layout"
import { Menu, Breadcrumb } from 'antd';

const { SubMenu } = Menu;

console.log(moment())

export default () => {
  return <Layout
  menu={(
    <Menu
    mode="inline"
    defaultSelectedKeys={['1']}
    defaultOpenKeys={['sub1']}
    style={{ height: '100%', borderRight: 0 }}
  >
      <SubMenu key="sub1" title="工单报备">
      <Menu.Item key="1">报备大类</Menu.Item>
      <Menu.Item key="2">报备类型</Menu.Item>
      <Menu.Item key="3">报备列表</Menu.Item>
      <Menu.Item key="4">任务中心</Menu.Item>
      <Menu.Item key="5">超时提醒</Menu.Item>
    </SubMenu>
    </Menu>
  )}
  >
    <h1></h1>
</Layout>
}
