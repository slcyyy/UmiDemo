/*
 * @Date: 2021-04-09 15:29:32
 * @LastEditors: LuoChun
 * @LastEditTime: 2021-04-12 10:59:46
 */
import React, { useState, useEffect } from 'react';
import { componentList } from '../data';
import { Button } from 'antd';
import styles from '../styles.less';
const VELeft: React.FC<{}> = () => {
  type ListData = {
    id: number;
    text: string;
  };
  const [listData, setListData] = useState<ListData[]>([]);
  useEffect(() => {
    console.log('componentList', componentList);
    setListData(componentList);
  }, []);

  return (
    <div className={styles.componentWrapper}>
      {/* {JSON.stringify(listData)} */}
      {/* {listData.length} */}
      {listData.map((item) => (
        <div className={styles.dragButton} key={item.id}>
          <Button>{item.text}</Button>
        </div>
      ))}
    </div>
  );
};

export default VELeft;
