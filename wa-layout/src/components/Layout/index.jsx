import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import React from "react"

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

const LocalLayout = (props) => {
  const { menu = [], menuProps } = props
  return (
      <Layout>
    <Header className="header">
      <div className="logo" />
      <Menu 
      theme="dark" 
      mode="inline" 
      defaultSelectedKeys={['2']}
      {
        ...menuProps
      }
      >
        {/* <Menu.Item key="1">nav 1</Menu.Item> 微服务模块 */}
      </Menu>
    </Header>
    <Layout>
      <Sider width={200} className="site-layout-background">
        {menu && menu}
      </Sider>
      <Layout style={{ padding: '0 24px 24px' }}>
        <Content
          className="site-layout-background"
          style={{
            padding: 24,
            margin: 0,
            minHeight: "calc(100vh - 64px)",
          }}
        >
          {props?.children && props?.children}
        </Content>
      </Layout>
    </Layout>
  </Layout>
  )
}

export default LocalLayout