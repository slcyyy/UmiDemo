/*
 * @Date: 2021-04-13 20:28:41
 * @LastEditors: LuoChun
 * @LastEditTime: 2021-04-29 20:12:03
 * @Description: 包裹组件的外框，确定位置
 */
import React, { useState, useEffect } from 'react';
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
  const selectedComponentPropertyId = useSelector(
    (state) => state.editor.selectedComponentPropertyId,
  );
  const isClickComponentStatus = useSelector(
    (state) => state.editor.isClickComponentStatus,
  );

  const [isSelected, setIsSelected] = useState<boolean>(false); //是否选中该元素

  // console.log('componentData',componentData)
  const { propertyId, coordinates, size } = current;

  let { x, y } = current.coordinates;
  let { width, height } = current.size;

  useEffect(() => {
    !isClickComponentStatus && setIsSelected(false);
  }, [isClickComponentStatus]);

  /**
   * @method 移动拖拽停止时
   * @param e
   * @param d
   */
  const handleDragStop = (e, d) => {
    dispatch({
      type: 'editor/modifyDragBoxByPropetyId',
      payload: { id: propertyId, axis: d },
    });
  };

  /**
   * @method 放大缩小组件结束时
   * @param e
   * @param direction
   * @param ref
   * @param delta
   * @param position
   */
  const handleResizeStop = (e, direction, ref, delta, position) => {
    let size = {
      width: ref.style.width,
      height: ref.style.height,
    };
    dispatch({
      type: 'editor/modifyDragBoxByPropetyId',
      payload: { id: propertyId, axis: position, size },
    });
  };

  /**
   * @method 选中组件，记录组件标识
   * @param e
   */
  const handleSelectBox = (e?: any) => {
    // console.log(e.button)
    dispatch({ type: 'editor/setClickComponentsStatus', payload: true });
    if (
      selectedComponentPropertyId.length === 0 ||
      selectedComponentPropertyId.indexOf(propertyId) === -1
    ) {
      setIsSelected(true);
      dispatch({
        type: 'editor/setCurrentSelectedComponent',
        payload: propertyId,
      });
    }
  };

  /**
   * @method 阻止右键单击触发默认事件
   */
  const handleContextMenu = (e) => {
    // e.preventDefault()
    e.persist();
    e.preventDefault();
    handleSelectBox();
    let [x, y] = [e.nativeEvent.layerX, e.nativeEvent.layerY];
    dispatch({
      type: 'editor/setMenu',
      payload: { show: true, axis: { x, y } },
    });
  };

  return (
    <Rnd
      size={{ width, height }}
      position={{ x, y }}
      className={styles.rndBox}
      style={{ border: isSelected ? '1px dashed #0084FF' : 'none' }}
      dragAxis="both"
      bounds="parent"
      onDragStop={handleDragStop}
      onResizeStop={handleResizeStop}
      onClick={handleSelectBox}
      onContextMenu={handleContextMenu}
      // resizeHandleStyles={{bottom:'border:1px dashed rgba(0,132,255,1)'}}
    >
      <div className={styles.dragBox}>{children}</div>
    </Rnd>
  );
};

export default CustomWrapper;
