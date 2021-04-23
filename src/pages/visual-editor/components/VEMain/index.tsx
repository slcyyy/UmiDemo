/*
 * @Date: 2021-04-09 15:30:26
 * @LastEditors: LuoChun
 * @LastEditTime: 2021-04-22 15:50:23
 */
import React, { useEffect } from 'react';
import Grid from './grid';
import CustomWrapper from '../custom-drag-components/CustomWrapper';
import { connect, ConnectProps } from 'umi';
import {
  ConfigInputBox,
  DIYTextBox,
} from '../custom-drag-components/CustomComponents';
import styles from '../../styles.less';

const VEMain: React.FC<ConnectProps> = (props) => {
  const { editor } = props;
  const { componentData, isClickComponentStatus } = editor;

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
    // onMouseDown = {}
    <div
      className={styles.main}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
    >
      {/* <Grid /> */}
      {componentData &&
        componentData.map((item, index) => (
          // key是因为自定义文本的属性都是一样的
          <CustomWrapper
            key={item.propertyId}
            current={item}
            // coordinates={item.coordinates}
            // size={item.size}
          >
            {/* <Shape> */}
            {judgeComponent(item, index)}
            {/* </Shape> */}
          </CustomWrapper>
        ))}

      <div className={styles.card}></div>
    </div>
  );
};

const mapStateToProps = (props) => {
  const { editor } = props;
  return {
    editor,
  };
};
export default connect(mapStateToProps)(VEMain);
