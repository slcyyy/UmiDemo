/*
 * @Date: 2021-04-09 14:47:23
 * @LastEditors: LuoChun
 * @LastEditTime: 2021-04-23 17:42:53
 */
import React, { Component } from 'react';
import VELeft from './components/VELeft';
import VEMain from './components/VEMain';
import { deepCopy } from '@/utils/utils';
import { customDataList } from './components/custom-drag-components/customDataList'; //前端自定义的组件数据
import { propertyList } from './data'; //后台获取的属性数据
import { connect, ConnectProps } from 'umi';
import styles from './styles.less';
import { Row, Col } from 'antd';

const VisualEditor: React.FC<ConnectProps> = ({
  dispatch,
  isClickComponentStatus,
  componentData,
}) => {
  /**
   * @method 点击编辑面板空白区，取消选中组件
   * @param e
   */
  const handleMouseDown = (e: any) => {
    // e.preventDefault()
    dispatch &&
      dispatch({ type: 'editor/setClickComponentsStatus', payload: false });
  };

  const handleMouseUp = (e) => {
    if (!isClickComponentStatus) {
      dispatch &&
        dispatch({
          type: 'editor/setCurrentSelectedComponent',
          payload: { id: null, component: null },
        });
    }
    // 0 左击 1 滚轮 2 右击
    if (e.button != 2) {
      console.log('鼠标非右键单击');
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
    e.preventDefault(); //默认事件有哪些啊，为什么要阻止啊
    e.stopPropagation(); // 冒泡是从内而外
    let propertyId = e.dataTransfer.getData('propertyId'); // 获取要添加的属性
    let component;
    if (Number(propertyId) === 100) {
      // 固定的自定义文本
      component = deepCopy(customDataList[1]); //找对应组件数据
    } else {
      // <100是后台配置的可拖拽属性
      component = deepCopy(customDataList[0]); // 获取该组件的数据配置
      // 获取文本标签
      const itemText = propertyList.filter((item) => {
        return Number(propertyId) === Number(item.propertyId);
      });
      component.propValues.label = itemText[0].label;
    }
    component.propertyId = propertyId + '' + (componentData?.length || 0); //属性ID 除自定义文本外可唯一标识需后台数据配置的属性组件
    component.coordinates.x = e.nativeEvent.offsetX; //关于被触发的DOM的左上角距离
    component.coordinates.y = e.nativeEvent.offsetY;
    dispatch && dispatch({ type: 'editor/addComponent', payload: component });
    return false;
  };

  return (
    <Row className={styles.VEContainer}>
      {/* 拖拽属性 */}
      <Col span={4} className={styles.VELeft}>
        <VELeft />
      </Col>
      {/* 放置区 */}
      <Col
        span={16}
        className={styles.VEMain}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
      >
        <VEMain />
      </Col>
      <Col span={4} className={styles.VERight}></Col>
    </Row>
  );
};

const mapStateToProps = (props) => {
  const { editor } = props;
  return {
    editor,
  };
};
export default connect(mapStateToProps)(VisualEditor);
