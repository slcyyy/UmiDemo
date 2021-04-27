/*
 * @Date: 2021-04-25 17:43:28
 * @LastEditors: LuoChun
 * @LastEditTime: 2021-04-27 17:30:54
 * @Description:
 */
import React, { useEffect } from 'react';
import Grid from './components/grid';
import CustomWrapper from './custom-drag-components/CustomWrapper';
import { connect, ConnectProps } from 'umi';
import {
  ConfigInputBox,
  DIYTextBox,
} from '../../custom-drag-components/CustomComponents';
import defaultCard from '@/assets/img/virtual-card/default_card.svg';
import styles from '../../../styles.less';
// import url from '@/assets/img/virtual-card/default_card.svg';

const VEEdit: React.FC<ConnectProps> = (props) => {
  const { editor } = props;
  const { componentData, isClickComponentStatus, cardUrl } = editor;

  /**
   * @method 判断拖拽哪个组件到编辑面板
   * @returns
   */
  const judgeComponent = (props: any, index: number) => {
    const { componentId, propValues, propStyles, propertyId } = props;
    switch (componentId) {
      case 1:
        return (
          <ConfigInputBox
            key={`${propertyId}+'-'+${index}`}
            propValues={propValues}
            propStyles={propStyles}
          />
        );
      case 100:
        return <DIYTextBox propValues={propValues} propStyles={propStyles} />;
      default:
        break;
    }
  };

  /**
   * @method
   * @param e
   */
  const handleMouseDown = (e: any) => {
    console.log('1handleMousedown', isClickComponentStatus);
    if (!isClickComponentStatus) {
      console.log('mainmousedown');
      e.preventDefault();
      e.stopPropagation();
    }
  };

  const handleMouseUp = (e: any) => {
    // console.log('2handleMouseUp',isClickComponentStatus)
    // // if(!isClickComponentStatus){
    //   e.preventDefault()
    //   e.stopPropagation()
    // // }
  };

  return (
    <div className={styles.VEEdit}>
      <div
        className={styles.cardBackground}
        style={{ backgroundImage: `url(${cardUrl})` }}
      ></div>
    </div>
    // <div
    //   className={styles.editWrapper}
    //   onMouseDown={handleMouseDown}
    //   onMouseUp={handleMouseUp}
    // >
    //   {/* <Grid /> */}
    //   {componentData &&
    //     componentData.map((item, index) => (
    //       // key是因为自定义文本的属性都是一样的
    //       <CustomWrapper
    //         key={item.propertyId}
    //         current={item}
    //         // coordinates={item.coordinates}
    //         // size={item.size}
    //       >
    //         {judgeComponent(item, index)}
    //       </CustomWrapper>
    //     ))}

    //   <div className={styles.card}></div>
    // </div>
  );
};

const mapStateToProps = (props) => {
  const { editor } = props;
  return {
    editor,
  };
};
export default connect(mapStateToProps)(VEEdit);
