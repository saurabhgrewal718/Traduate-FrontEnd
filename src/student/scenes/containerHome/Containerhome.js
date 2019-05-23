import React, { Component } from 'react';
import Head from '../components/Head';

import { Layout } from 'antd';

const { Header, Footer, Sider, Content } = Layout;


const Containerhome= (props) => {
  return(
      <div>
      <Layout className="layout">
        <Head/>
        <Content style={{ padding:0 }}>
          <div style={{ padding:2 }}>
             <div>{props.children}</div>
          </div>
        </Content>
      </Layout>
    </div>
);
}

export default Containerhome;


