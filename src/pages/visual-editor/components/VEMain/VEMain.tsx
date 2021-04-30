/*
 * @Date: 2021-04-09 15:30:26
 * @LastEditors: LuoChun
 * @LastEditTime: 2021-04-30 09:37:08
 */
import React, { useEffect } from 'react';
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
  const { cardUrl, logoUrl, componentData } = useSelector(
    ({ editor }) => editor,
  );

  const handleOnClick = () => {
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
          {/* <UndoOutlined className={styles.icon} /> */}
          {/* <RedoOutlined className={styles.icon} /> */}
        </div>
        <div>
          <div className={styles.scale}>
            {/* <div></div> */}
            <img src={Enlarge} alt="恢复" className={styles.iconNoMargin} />
            <span className={styles.ratio}>100%</span>
            <img src={Reduce} alt="恢复" className={styles.iconNoMargin} />
          </div>
          <Button className={styles.save} onClick={handleOnClick}>
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
