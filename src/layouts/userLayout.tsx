/*
 * @Date: 2021-02-20 11:16:39
 * @LastEditors: LuoChun
 * @LastEditTime: 2021-02-21 17:36:26
 */
/**用户页面的样式背景组件*/
import React from 'react';
import styles from './userLayout.less';
import { Layout, Space } from 'antd';
import moment from 'moment';

const { Header, Footer, Content } = Layout;
//userLayoutProps等同于props.children来渲染子路由，props.chilren获取react下的子节点
const UserLayout: React.FC<{}> = (props) => {
  const { children } = props;
  console.log(props);
  return (
    <Layout className={styles.container}>
      <Header className={styles.head}>
        <Space>
          {/* <img src="" alt="your logo"/> */}
          <span className={styles.title}>THE NAME</span>
        </Space>
      </Header>
      <Content className={styles.content}>{children}</Content>
      <Footer className={styles.footer}>
        <p>
          Copyright<span className={styles.copySignal}>©</span>
          {moment().format('YYYY')} The Company
        </p>
      </Footer>
    </Layout>
  );
};

export default UserLayout;
