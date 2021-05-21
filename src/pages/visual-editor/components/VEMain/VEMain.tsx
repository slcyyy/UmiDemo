/*
 * @Date: 2021-04-09 15:30:26
 * @LastEditors: LuoChun
 * @LastEditTime: 2021-05-13 13:57:49
 */
import React, { useEffect, useMemo } from 'react';
import Grid from './components/grid';
import CustomWrapper from '../custom-drag-components/CustomWrapper';
import { connect, ConnectProps, useDispatch, useSelector } from 'umi';
import { UndoOutlined, RedoOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import styles from '../../styles.less';
import VELeft from './components/VELeft';
import VEEdit from './components/VEEdit';
import VERight from './components/VERight';
import Undo from '@/assets/img/virtual-card/undo.svg';
import Redo from '@/assets/img/virtual-card/redo.svg';
import Enlarge from '@/assets/img/virtual-card/enlarge.svg';
import Reduce from '@/assets/img/virtual-card/reduce.svg';
const VEMain: React.FC<{}> = () => {
  const dispatch = useDispatch();
  const { cardUrl, logoUrl, componentData, scale } = useSelector(
    ({ editor }) => editor,
  );

  /**
   * @method 放大画布
   * @description 等差10%
   */
  const handleZoomIn = () => {
    let data = Number((Number(scale) + 0.1).toFixed(1));
    Number(data) <= 2.5 &&
      dispatch({ type: 'editor/setZoomScale', payload: data });
  };

  /**
   * @method 缩小画布
   * @description 等差10%
   */
  const handleZoomOut = () => {
    let data = Number(Number(scale) - 0.1).toFixed(1);
    Number(data) >= 0.5 &&
      dispatch({ type: 'editor/setZoomScale', payload: data });
  };

  let percent = useMemo(() => {
    let temp = Math.round(Number(scale) * 100); //不化整数会有精度问题110.00000000000001
    return temp;
  }, [scale]);
  /**
   * @method 保存
   */
  const handleOnSave = () => {
    let cardData = {
      cardUrl,
      logoUrl,
      componentData,
    };
    // console.log(cardData)
    localStorage.setItem('cardData', JSON.stringify(cardData));
  };

  return (
    // onMouseDown = {}
    <div className={styles.VEMain}>
      <div className={styles.recallBox}>
        <div>
          <img src={Undo} alt="撤销" className={styles.icon} />
          <img src={Redo} alt="恢复" className={styles.icon} />
          <div className={styles.scale}>
            {/* <div></div> */}
            <img
              src={Enlarge}
              alt="放大"
              className={styles.iconNoMargin}
              onClick={handleZoomIn}
            />
            <span className={styles.ratio}>{percent}%</span>
            <img
              src={Reduce}
              alt="缩小"
              className={styles.iconNoMargin}
              onClick={handleZoomOut}
            />
          </div>
          {/* <UndoOutlined className={styles.icon} /> */}
          {/* <RedoOutlined className={styles.icon} /> */}
        </div>
        <div>
          <Button className={styles.save} onClick={handleOnSave}>
            保存
          </Button>
        </div>
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
