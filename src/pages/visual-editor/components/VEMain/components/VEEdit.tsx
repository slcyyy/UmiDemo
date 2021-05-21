/*
 * @Date: 2021-04-25 17:43:28
 * @LastEditors: LuoChun
 * @LastEditTime: 2021-05-13 13:56:49
 * @Description:
 */
import React, { useEffect, useMemo } from 'react';
// import Grid from './components/grid';
import classNames from 'classnames';
import CustomWrapper from '../../custom-drag-components/CustomWrapper';
import customComponentList from '../../custom-drag-components/customComponentList'; //定义的组件数据
import { connect, ConnectProps } from 'umi';
import {
  ConfigInputBox,
  DIYTextBox,
} from '../../custom-drag-components/CustomComponents';
import { propertyList } from '../../../data'; //后台获取的属性数据
import { deepCopy } from '@/utils/utils';
import Grid from './grid';
import defaultCard from '@/assets/img/virtual-card/default_card.svg';
import ContextMenu from './contextMenu';
import styles from '../../../styles.less';

const VEEdit: React.FC<{}> = (props) => {
  const { editor, dispatch } = props;
  const {
    componentData,
    isClickComponentStatus,
    cardUrl,
    selectedComponentPropertyId,
    menuShow,
    scale,
  } = editor;

  /**
   * @method 判断拖拽哪个组件到编辑面板
   * @returns
   */
  const judgeComponent = (props: any, index: number) => {
    const { componentId, propValues, propStyles, propertyId } = props;
    switch (componentId) {
      case 1:
        return (
          <ConfigInputBox propValues={propValues} propStyles={propStyles} />
        );
      case 100:
        return <DIYTextBox propValues={propValues} propStyles={propStyles} />;
      default:
        break;
    }
  };

  /**
   * @method 拖拽到可释放目标时触发
   * @param e
   */
  const handleDragOver = (e: any) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'copy'; // 属性控制在拖放操作中给用户的反馈（通常是视觉上的）
  };

  /**
   * @method 释放目标
   * @param e
   * @description 目前只写了创建的操作，还有后台返回的数据去显示
   */
  const handleDrop = (e: any) => {
    e.preventDefault(); //默认事件有哪些啊
    e.stopPropagation();
    let propertyId = e.dataTransfer.getData('propertyId'); // 获取要添加的属性
    let componentId = e.dataTransfer.getData('componentId'); // 获取要添加的属性
    let label = e.dataTransfer.getData('label'); // 获取要添加的属性
    //找到对应的组件
    let component = customComponentList.filter(
      (item) => Number(item.componentId) === Number(componentId),
    )[0];
    // <100是后台配置的可拖拽属性，为组件添加label值
    if (Number(propertyId) < 100) {
      component.propValues.label = label;
    }
    component.propertyId = propertyId + '-' + (componentData?.length || 0); //属性ID 除自定义文本外可唯一标识需后台数据配置的属性组件
    let [x, y] = [e.nativeEvent.offsetX, e.nativeEvent.offsetY];
    console.log('yoho', x, y);
    // if (x > 192) {
    //   x = x - (x - 192);
    // }
    component.coordinates.x = x; //关于被触发的DOM的左上角距
    component.coordinates.y = y;
    e.persist();

    dispatch && dispatch({ type: 'editor/addComponent', payload: component });
    // console.log(componentData)
    return false;
  };

  /**
   * @method
   * @param e
   */
  const handleMouseUp = (e: any) => {
    // 如果没有选中组件 在画布上点击时需要调用 e.preventDefault() 防止触发 drop 事件
    if (!isClickComponentStatus || selectedComponentPropertyId.length === 0) {
      e.preventDefault();
    }
    // 0 左击 1 滚轮 2 右击
    if (!menuShow) {
      if (isClickComponentStatus || selectedComponentPropertyId.length > 0) {
        console.log('画布上左击');
        //清空掉选中的元素  同时只能选择一个组件
        dispatch && dispatch({ type: 'editor/removeCurrentSelectedComponent' });
        dispatch &&
          dispatch({ type: 'editor/setClickComponentsStatus', payload: false });
      }
    }

    //隐藏右键菜单 写在这里是因为会先捕获到这里，再触发contextMenu的，有问题
    if (menuShow && dispatch) {
      console.log('画布上的删除');

      if (selectedComponentPropertyId.length > 0) {
        dispatch({
          type: 'editor/deleteComponent',
          payload: selectedComponentPropertyId[0],
        });
        dispatch({ type: 'editor/setMenu', payload: { show: false } });
        dispatch({ type: 'editor/removeCurrentSelectedComponent' });
        dispatch({ type: 'editor/setClickComponentsStatus', payload: false });
      } else {
        dispatch({ type: 'editor/setMenu', payload: { show: false } });
      }
    }
  };

  /**
   * @method 阻止右键单击触发默认事件
   */
  const hanleContextMenu = (e) => {
    e.preventDefault();
  };

  return (
    <div className={styles.VEEdit}>
      <div className={styles.overflowWrapper}>
        <div
          // className={styles.cardBackground}
          className={styles.cardBackground}
          style={{
            backgroundImage: cardUrl
              ? `url(${cardUrl})`
              : `url(${defaultCard})`,
            // transform:`scale(${scale},${scale})`,
            // transformOrigin:'left top'
            width: `Number(${scale})*400`,
            height: `Number(${scale})*300`,
          }}
          onMouseUp={handleMouseUp}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        >
          {componentData &&
            componentData.map((item, index) => (
              // key是因为自定义文本的属性都是一样的
              <CustomWrapper
                key={item.propertyId}
                current={item}
                // onContextMenu={handleContextMenu}
              >
                {judgeComponent(item, index)}
              </CustomWrapper>
            ))}
          {menuShow ? <ContextMenu /> : null}
        </div>
        {/* <Grid /> */}
      </div>
    </div>
  );
};

const mapStateToProps = (props) => {
  const { editor } = props;
  return {
    editor,
  };
};
export default connect(mapStateToProps)(VEEdit);
