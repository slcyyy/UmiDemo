/*
 * @Date: 2021-02-20 15:49:36
 * @LastEditors: LuoChun
 * @LastEditTime: 2021-02-21 15:16:42
 */
import React from 'react';
import styles from './login.less';
import { Form, Input, Button } from 'antd';
import { KeyOutlined, UserOutlined } from '@ant-design/icons';
const Login: React.FC<{}> = (props) => {
  return (
    <div className={styles.loginWrapper}>
      <div className={styles.loginMain}>
        <div className={styles.loginTitle}>登录</div>
        <Form className={styles.loginForm} size="large">
          <Form.Item name="username">
            <Input prefix={<UserOutlined />} placeholder="账号" />
          </Form.Item>
          <Form.Item name="password">
            <Input prefix={<KeyOutlined />} placeholder="密码" />
          </Form.Item>
          <Form.Item name="submit">
            <Button type="primary" htmlType="submit" block>
              登录
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Login;
