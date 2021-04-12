/*
 * @Date: 2021-04-09 14:47:23
 * @LastEditors: LuoChun
 * @LastEditTime: 2021-04-12 11:25:40
 */
import React from 'react';
import VELeft from './components/VELeft';
import VEMain from './components/VEMain';
import styles from './styles.less';
import { Row, Col } from 'antd';
const VisualEditor: React.FC<{}> = () => {
  return (
    <Row className={styles.VEContainer}>
      <Col span={4} className={styles.VELeft}>
        <VELeft />
      </Col>
      <Col span={16} className={styles.VEMain}>
        <VEMain />
      </Col>
      <Col span={4} className={styles.VERight}></Col>
    </Row>
  );
};

export default VisualEditor;
