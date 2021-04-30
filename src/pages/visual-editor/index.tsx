/*
 * @Date: 2021-04-09 14:47:23
 * @LastEditors: LuoChun
 * @LastEditTime: 2021-04-28 10:47:22
 * @description 模板编辑最外层
 */
import React, { useEffect } from 'react';
import VELeft from './components/VEMain/components/VELeft';
import VEMain from './components/VEMain/VEMain';
import { connect, ConnectProps } from 'umi';
// import customComponentList from './components/custom-drag-components/customComponentList'; //定义的组件数据
import styles from './styles.less';
import { Row, Col, Button } from 'antd';
import { propertyList } from './data'; //后台获取的属性数据

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

  return (
    <div className={styles.editModel}>
      <div className={styles.VETitle}>
        <h1 className={styles.title}>新增虚拟卡模板</h1>
        <Button className={styles.backBtn}>返回</Button>
      </div>

      <VEMain />

      {/* <Row className={styles.VEContainer}>
      <Col span={4} className={styles.VELeft}>
        <VELeft />
      </Col>
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
    </Row> */}
    </div>
  );
};

const mapStateToProps = (props) => {
  const { editor } = props;
  return {
    editor,
  };
};
export default connect(mapStateToProps)(VisualEditor);
