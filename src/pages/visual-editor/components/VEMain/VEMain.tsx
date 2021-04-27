/*
 * @Date: 2021-04-09 15:30:26
 * @LastEditors: LuoChun
 * @LastEditTime: 2021-04-25 19:22:05
 */
import React, { useEffect } from 'react';
import Grid from './components/grid';
import CustomWrapper from '../custom-drag-components/CustomWrapper';
import { connect, ConnectProps } from 'umi';
import { UndoOutlined, RedoOutlined } from '@ant-design/icons';
import styles from '../../styles.less';
import VELeft from './components/VELeft';
import VEEdit from './components/VEEdit';
import VERight from './components/VERight';

const VEMain: React.FC<{}> = () => {
  return (
    // onMouseDown = {}
    <div className={styles.VEMain}>
      <div className={styles.recallBox}>
        <UndoOutlined className={styles.icon} />
        <RedoOutlined className={styles.icon} />
      </div>
      <div className={styles.container}>
        <VELeft />
        <VEEdit />
        <VERight />
      </div>
    </div>
  );
};

export default VEMain;
