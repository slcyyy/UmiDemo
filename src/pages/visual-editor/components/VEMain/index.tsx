/*
 * @Date: 2021-04-09 15:30:26
 * @LastEditors: LuoChun
 * @LastEditTime: 2021-04-12 11:25:32
 */
import React from 'react';
import styles from '../../styles.less';
import grid from './grid.svg';

const VEMain: React.FC<{}> = () => {
  return (
    <div className={styles.main}>
      <div className={styles.grid}></div>
      <div className={styles.card}></div>
    </div>
  );
};

export default VEMain;
