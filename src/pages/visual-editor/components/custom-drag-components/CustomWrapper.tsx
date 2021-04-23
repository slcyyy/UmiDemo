/*
 * @Date: 2021-04-13 20:28:41
 * @LastEditors: LuoChun
 * @LastEditTime: 2021-04-23 14:07:30
 * @Description: 包裹组件的外框，确定位置
 */
import React from 'react';
// import Draggable, { DraggableCore } from 'react-draggable'; // Both at the same time
import { Rnd } from 'react-rnd';
import { useDispatch, useSelector } from 'umi';
import styles from '../../styles.less';

type WrapperProps = {
  children: React.ReactNode;
  current: any;
};
type coordinates = {
  x: number;
  y: number;
};

const CustomWrapper: React.FC<WrapperProps> = (props) => {
  const { current, children } = props;
  const dispatch = useDispatch();
  const componentData = useSelector((state) => state.editor.componentData);

  // console.log('componentData',componentData)
  const { propertyId, coordinates, size } = current;

  let { x, y } = current.coordinates;
  let { width, height } = current.size;

  const handleStop = (e) => {
    console.log('stop');
    // e.preventDefault()
  };

  const handleDragStop = (e, d) => {
    dispatch({
      type: 'editor/modifyDragBoxByPropetyId',
      payload: { id: propertyId, axis: d },
    });
  };

  const handleResizeStop = (e, direction, ref, delta, position) => {
    console.log(direction, position);
    let size = {
      width: ref.style.width,
      height: ref.style.height,
    };
    dispatch({
      type: 'editor/modifyDragBoxByPropetyId',
      payload: { id: propertyId, axis: position, size },
    });
  };
  // const handleResize = (ref,position)=>{
  //   console.log(position)
  //   width = ref.offsetWidth //content+padding+border
  //   height = ref.offsetHeight
  // }

  const handleSelectBox = () => {
    console.log();
  };
  return (
    <Rnd
      size={{ width, height }}
      position={{ x, y }}
      className={styles.rndBox}
      dragAxis="both"
      bounds="parent"
      onDragStop={handleDragStop}
      onResizeStop={handleResizeStop}
      onClick={handleSelectBox}
    >
      <div className={styles.dragBox}>{children}</div>
    </Rnd>
  );
};

export default CustomWrapper;
