import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import Head from '../components/Head';

const { Header, Content, Footer } = Layout;

const Containerhome= (props) => {
  return(
      <Layout className="layout">
        <Head/>
        <Content style={{ padding: '0 20px' }}>
          <div style={{ padding: 10, }}>
             <div>{props.children}</div>
          </div>
        </Content>
      </Layout>
);
}

export default Containerhome;
