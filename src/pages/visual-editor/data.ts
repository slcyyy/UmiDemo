/*
 * @Date: 2021-04-09 15:44:10
 * @LastEditors: LuoChun
 * @LastEditTime: 2021-04-15 15:23:15
 */

type propertyItem = {
  propertyId: number;
  label: string;
  value?: string;
};

//  左侧拖拽的列表数据
export let propertyList: propertyItem[] = [
  {
    propertyId: 1, // 这个组件的唯一标识，用于在模板中确定该输入框的位置
    label: '人员编号',
  },
  {
    propertyId: 2,
    label: '姓名',
  },
  {
    propertyId: 3,
    label: '身份',
  },
  {
    propertyId: 100,
    label: '自定义文本',
  },
];
