/*
 * @Date: 2021-04-09 15:30:35
 * @LastEditors: LuoChun
 * @LastEditTime: 2021-04-29 15:57:01
 */
import React from 'react';
import styles from '../../../styles.less';
import { useDispatch, useSelector } from 'umi';
import { Select, InputNumber } from 'antd';

const VERight: React.FC<{}> = () => {
  const { Option } = Select;

  const dispatch = useDispatch();
  const selectedComponentPropertyId = useSelector(
    (state) => state.editor.selectedComponentPropertyId,
  );

  const textSizeOnChange = (val) => {
    if (selectedComponentPropertyId.length > 0) {
      dispatch({
        type: 'editor/setSingleCSS',
        payload: {
          propertyId: selectedComponentPropertyId[0],
          cssName: 'fontSize',
          cssProperty: val,
        },
      });
    }
  };

  const TextFontChange = (val) => {
    if (selectedComponentPropertyId.length > 0) {
      dispatch({
        type: 'editor/setSingleCSS',
        payload: {
          propertyId: selectedComponentPropertyId[0],
          cssName: 'fontFamily',
          cssProperty: val,
        },
      });
    }
  };
  const TextWeightChange = (val) => {
    if (selectedComponentPropertyId.length > 0) {
      dispatch({
        type: 'editor/setSingleCSS',
        payload: {
          propertyId: selectedComponentPropertyId[0],
          cssName: 'fontWeight',
          cssProperty: val,
        },
      });
    }
  };

  const handleChange = () => {};
  return (
    <div className={styles.VERight}>
      <div className={styles.title}>属性</div>
      <div className={styles.wrapper}>
        <div className={styles.box}>
          <label>字体大小</label>
          <div>
            <InputNumber
              style={{ width: '100%' }}
              min={10}
              max={25}
              defaultValue={12}
              onChange={textSizeOnChange}
            />
          </div>
        </div>
        <div className={styles.box}>
          <label>字体</label>
          <Select defaultValue="FangSong" onChange={TextFontChange}>
            <Option value="FangSong">仿宋</Option>
            <Option value="KaiTi">楷体</Option>
            <Option value="SimHei">黑体</Option>
          </Select>
        </div>
        <div className={styles.box}>
          <label>字重</label>
          <Select defaultValue="400" onChange={TextWeightChange}>
            <Option value="400">400</Option>
            <Option value="500">500</Option>
            <Option value="600">600</Option>
            <Option value="700">700</Option>
          </Select>
        </div>
      </div>
      {/* <div className={styles.nothingText}>请选择组件</div> */}
    </div>
  );
};

export default VERight;
