import { Breadcrumb, Layout, Menu } from 'antd';
import React from 'react';
import { Link, Router } from 'react-router-dom';


const { Header, Content, Footer } = Layout;
const navitems =['Add Students','View Students'];

function Dashboard() {

return(
    
       <Layout className="layout" style={{
        height:'100pc'
       }}>
    <Header>
      {/* <div className="logo" /> */}
      
      <Menu
        theme="dark"
        mode="horizontal"    
        >
        <Menu.Item>
        <Link to='/Add'>Add</Link>
        </Menu.Item>
        <Menu.Item>
        <Link to='/View'>View</Link>
        </Menu.Item>
       
        {/* <Menu.Item>View</Menu.Item> */}
        
       </Menu>
    </Header>
    <Content
      style={{
        padding: '0 50px',
        height: '100%'
      }}
    >
      {/* <Breadcrumb
        style={{
          margin: '16px 0',
        }}
      >
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb> */}
      <div className="site-layout-content" style={{
        textAlign:'center',
        fontSize:'30px',
        padding:'50px'
      }}>Welcome To Student Portal!</div>
    </Content>
    {/* <Footer
      style={{
        textAlign: 'center',
      }}
    >
      Ant Design ©2018 Created by Ant UED
    </Footer> */}
  </Layout>


  
)


}
export default Dashboard;