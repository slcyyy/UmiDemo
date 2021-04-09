/*
 * @Date: 2021-04-09 14:47:23
 * @LastEditors: LuoChun
 * @LastEditTime: 2021-04-09 15:25:05
 */
import React from 'react';
import styles from './styles.less';

const VisualEditor: React.FC<{}> = () => {
  return (
    <div className={styles.VEContainer}>
      <section className={styles.VELeft}>左侧组件列表</section>
      <section className={styles.VEMain}>中间画布</section>
      <section className={styles.VERight}>右侧属性列表</section>
    </div>
  );
};

export default VisualEditor;
