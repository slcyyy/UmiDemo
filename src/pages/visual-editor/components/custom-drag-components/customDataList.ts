/*
 * @Date: 2021-04-13 13:43:47
 * @LastEditors: LuoChun
 * @LastEditTime: 2021-04-13 20:35:45
 * @Description: 后台返回的可选择添加到模板上的数据
 */

// 组件数据
export const list = [
  {
    componentId: 1, //输入框
    propValues: {
      label: '', // 组件标签
      value: '', // 组件的值
    },
    propStyles: {
      label: {
        width: 200,
        height: 22,
        fontSize: 16,
        fontFmaily: 'SimSun ', //字体
        letterSpacing: 'normal', //字间距
        color: '#ffffff',
        fontWeight: '400',
        textAlign: 'left',
      },
      value: {
        width: 200,
        height: 22,
        fontSize: 16,
        fontFmaily: 'SimSun ', //字体
        letterSpacing: 'normal', //字间距
        color: '#ffffff',
        fontWeight: '400',
        textAlign: 'left',
      },
    },
    coordinates: {
      x: 0,
      y: 0,
    },
  },
];
