/*
 * @Date: 2021-04-09 15:29:32
 * @LastEditors: LuoChun
 * @LastEditTime: 2021-04-09 17:32:43
 */
import React, { useState, useEffect } from 'react';
import { componentList } from '../data';

const VELeft: React.FC<{}> = () => {
  type listData = {
    name: string;
  };
  const [listData, setListData] = useState([]);
  useEffect(() => {
    setListData(componentList);
  }, []);

  return <div></div>;
};

export default VELeft;
