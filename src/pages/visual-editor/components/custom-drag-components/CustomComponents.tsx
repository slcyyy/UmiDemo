/*
 * @Date: 2021-04-13 14:39:36
 * @LastEditors: LuoChun
 * @LastEditTime: 2021-04-21 14:27:35
 * @Description: 编辑面板中的拖拽组件
 */
import React, { useState } from 'react';
import styles from './customStyle.less';

type ComponentProps = {
  propValues: {
    label?: string;
    value: string;
  };
  propStyles: {
    label?: object;
    colon?: object;
    value: object;
  };
};

/**
 * @method 后台数据配置的文本框
 */
export const ConfigInputBox = (props: ComponentProps) => {
  const { propStyles, propValues } = props;
  const {
    label: labelStyles,
    colon: colonStyles,
    value: valueStyles,
  } = propStyles;
  const [canEdit, setCanEdit] = useState<boolean[]>([false, false, false]);

  const dbClick = (index: number) => {
    console.log('双击');
    if (!canEdit[index]) {
      let temp = [...canEdit];
      temp[index] = true;
      setCanEdit(temp);
    }
    return undefined;
  };

  const handleMouseDown = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number,
  ) => {
    console.log('鼠标放下');
    canEdit[index] && e && e.stopPropagation();
    return undefined;
  };

  const handleBlur = (index: number) => {
    // if (canEdit[index]) {
    //   let temp = [...canEdit];
    //   temp[index] = false;
    //   setCanEdit(temp);
    // }
    return undefined;
  };
  const handleMouseUp = (e: any) => {
    console.log('3handleMouseUp');
    e.preventDefault();
    e.stopPropagation();
  };
  return (
    <div className={styles.customInputWrapper}>
      {/* 不用textare是为了方便缩放，和元素自身的换行，毕竟textarea需要自定义rows,多行的话会折叠，出现一个overflow；且可以不用定义width和height,可以让其自适应 */}
      <div
        contentEditable={canEdit[0]}
        suppressContentEditableWarning={true}
        onDoubleClick={dbClick(0)}
        onMouseDown={(e) => handleMouseDown(e, 0)}
        onMouseUp={handleMouseUp}
        onBlur={handleBlur(0)}
        style={{ ...labelStyles }}
      >
        {propValues.label}
      </div>
      <span
        className={styles.colon}
        contentEditable
        suppressContentEditableWarning={true}
        // onDoubleClick={dbClick(1)}
        // onMouseDown={handleMouseDown(1)}
        // onBlur={handleBlur(1)}
        style={{ ...colonStyles }}
      >
        :
      </span>
      <div
        contentEditable
        suppressContentEditableWarning={true}
        // onDoubleClick={dbClick(2)}
        // onMouseDown={handleMouseDown(2)}
        // onBlur={handleBlur(2)}
        style={{ ...valueStyles }}
      >
        {propValues.value}
      </div>
    </div>
  );
};

/**
 * @method 自定义文本框
 */
export const DIYTextBox = (props: ComponentProps) => {
  const { propValues, propStyles } = props;
  const [canEdit, setCanEdit] = useState<boolean>(false);

  const dbClick = () => {
    !canEdit && setCanEdit(true);
  };

  const handleMouseDown = (e: any) => {
    canEdit && e.stopPropagation();
  };

  const handleBlur = (e: any) => {
    canEdit && setCanEdit(false);
  };
  return (
    <div>
      <div
        contentEditable={canEdit}
        suppressContentEditableWarning={true}
        onDoubleClick={dbClick}
        onMouseDown={handleMouseDown}
        onBlur={handleBlur}
        style={{ ...propStyles.value }}
      >
        {propValues.value}
      </div>
    </div>
  );
};
