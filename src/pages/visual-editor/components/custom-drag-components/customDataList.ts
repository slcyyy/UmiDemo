/*
 * @Date: 2021-04-13 13:43:47
 * @LastEditors: LuoChun
 * @LastEditTime: 2021-04-21 13:59:43
 * @Description: 默认显示的模板上的数据（如有保存则由后台传入）
 */

// 组件数据
export const customDataList = [
  {
    componentId: 1, //组件Id  输入框
    propValues: {
      label: '', // 组件标签
      value: '双击可编辑文本', // 组件的值
    },
    propStyles: {
      label: {
        fontSize: 16,
        fontFmaily: 'SimSun ', //字体
        letterSpacing: 'normal', //字间距
        color: 'black',
        fontWeight: '400',
        textAlign: 'left',
      },
      colon: {
        fontSize: 16,
        color: 'black',
        fontWeight: '400',
        textAlign: 'left',
      },
      value: {
        fontSize: 16,
        fontFmaily: 'SimSun ', //字体
        letterSpacing: 'normal', //字间距
        color: 'black',
        fontWeight: '400',
        textAlign: 'left',
      },
    },
    size: {
      width: '200',
      height: '30',
    },
    coordinates: {
      x: 0,
      y: 0,
    },
  },
  {
    componentId: 100, //自定义文本
    propValues: {
      value: '双击可编辑文本',
    },
    propStyles: {
      value: {
        fontSize: 16,
        fontFmaily: 'SimSun ', //字体
        letterSpacing: 'normal', //字间距
        color: 'black',
        fontWeight: '400',
        textAlign: 'left',
      },
    },
    coordinates: {
      x: 0,
      y: 0,
    },
    size: {
      width: '200',
      height: '30',
    },
  },
];
