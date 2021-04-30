/*
 * @Date: 2021-04-29 16:54:07
 * @LastEditors: LuoChun
 * @LastEditTime: 2021-04-30 09:41:34
 * @Description: 右键菜单
 */

import React from 'react';
import { useDispatch, useSelector } from 'umi';
import styles from '../../../styles.less';

const ContextMenu: React.FC<{}> = () => {
  const dispatch = useDispatch();
  const menuSettings = useSelector((state) => state.editor.menuSettings);
  const selectedComponentPropertyId = useSelector(
    (state) => state.editor.selectedComponentPropertyId,
  );

  const handleOnClick = (e) => {
    if (dispatch) {
      console.log('删除上触发');
      dispatch({
        type: 'editor/deleteComponent',
        payload: selectedComponentPropertyId[0],
      });
      dispatch({ type: 'editor/setMenu', payload: { show: false } });
      dispatch({ type: 'editor/removeCurrentSelectedComponent' });
      dispatch({ type: 'editor/setClickComponentsStatus', payload: false });
    }
  };
  return (
    <div
      className={styles.contextMenu}
      style={{ top: menuSettings.y, left: menuSettings.x }}
    >
      <span onClick={handleOnClick}>删除</span>
    </div>
  );
};

export default ContextMenu;
