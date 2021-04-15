/*
 * @Date: 2021-04-13 20:28:41
 * @LastEditors: LuoChun
 * @LastEditTime: 2021-04-15 15:17:58
 * @Description: 包裹组件的外框，确定位置
 */
import React from 'react';
import Draggable, { DraggableCore } from 'react-draggable'; // Both at the same time
import styles from '../../styles.less';

type WrapperProps = {
  children: React.ReactNode;
  coordinates: coordinates;
};
type coordinates = {
  x: number;
  y: number;
};

const CustomWrapper: React.FC<WrapperProps> = (props) => {
  const { coordinates, children } = props;
  const { x, y } = coordinates;
  return (
    <Draggable axis="both" defaultPosition={{ x, y }} bounds="parent">
      <div className={styles.dragBox}>{children}</div>
    </Draggable>
  );
};

export default CustomWrapper;
