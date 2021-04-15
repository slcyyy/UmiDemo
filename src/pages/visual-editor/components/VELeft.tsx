/*
 * @Date: 2021-04-09 15:29:32
 * @LastEditors: LuoChun
 * @LastEditTime: 2021-04-15 15:42:30
 */
import React, { useState, useEffect } from 'react';
import { propertyList } from '../data';
import { Button } from 'antd';
import styles from '../styles.less';

const VELeft: React.FC<{}> = () => {
  interface dragListData {
    propertyId: number;
    label: string;
  }
  const [listData, setListData] = useState<dragListData[]>([]);

  useEffect(() => {
    setListData(propertyList);
  }, []);

  const handleDragStart = (e: any) => {
    // react中事件都是在冒泡阶段被触发
    // e.persist() v17会被去掉 只有加了才可以在console中看到  但是为什么需要这个呢？
    e.dataTransfer.setData('propertyId', e.target.dataset.propertyid);
  };
  return (
    <div className={styles.componentWrapper} onDragStart={handleDragStart}>
      {listData.map((item, index) => (
        <div
          className={styles.dragChild}
          key={index}
          data-propertyid={item.propertyId}
          draggable
        >
          <span>{item.label}</span>
        </div>
      ))}
    </div>
  );
};

export default VELeft;
