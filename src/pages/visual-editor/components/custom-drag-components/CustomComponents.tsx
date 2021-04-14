/*
 * @Date: 2021-04-13 14:39:36
 * @LastEditors: LuoChun
 * @LastEditTime: 2021-04-14 17:20:15
 * @Description: 输入文本框（含label）
 */
import React from 'react';
import styles from './customStyle.less';

type ComponentProps = {
  label?: string;
  value?: string;
};

/**
 * @method 含label的输入框
 */
export const InputComponent = (props: ComponentProps) => {
  const { propStyles, propValues } = props;
  return (
    <div className={styles.customInputWrapper}>
      <input type="text" value={propValues.label} />:
      <input type="text" value={propValues.value} />
    </div>
  );
};

/**
 * @method 输入框
 */
export const TextComponent = (props: ComponentProps) => {
  return (
    <div>
      <textarea value={props.value} />
    </div>
  );
};
