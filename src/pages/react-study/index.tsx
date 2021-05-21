/*
 * @Date: 2021-05-08 10:02:28
 * @LastEditors: LuoChun
 * @LastEditTime: 2021-05-08 14:22:25
 * @Description: react学习
 */
import React from 'react';
import { history } from 'umi';
const ReactStudy: React.FC<{}> = ({ children }) => {
  return (
    <div>
      <a onClick={() => history.push('/react-study/react-eventmouse')}>
        事件处理
      </a>
      <div></div>
      {children}
    </div>
  );
};
export default ReactStudy;
