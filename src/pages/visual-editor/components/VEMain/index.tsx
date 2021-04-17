/*
 * @Date: 2021-04-09 15:30:26
 * @LastEditors: LuoChun
 * @LastEditTime: 2021-04-18 00:18:18
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
  const { componentData } = editor;

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
  return (
    // onMouseDown = {}
    <div className={styles.main}>
      <Grid />
      {componentData &&
        componentData.map((item, index) => (
          // key是因为自定义文本的属性都是一样的
          <CustomWrapper
            key={`${item.propertyId}+'-'+${index}`}
            coordinates={item.coordinates}
          >
            {judgeComponent(item, index)}
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
