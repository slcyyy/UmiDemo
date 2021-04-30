/*
 * @Date: 2021-04-09 15:44:10
 * @LastEditors: LuoChun
 * @LastEditTime: 2021-04-28 09:53:24
 */

type propertyItem = {
  propertyId: number;
  label: string;
  value?: string;
  iconName?: string; // 对应的icon组件
  componentId: number; //对应的组件编号
};

//  左侧拖拽的列表数据
export let propertyList: propertyItem[] = [
  {
    propertyId: 1, // 组件的唯一标识，用于在模板中确定该输入框的位置
    label: '人员编号',
    iconName: 'PerCode',
    componentId: 1,
  },
  {
    propertyId: 2,
    label: '使用单位',
    iconName: 'UnitInUse',
    componentId: 1,
  },
  {
    propertyId: 3,
    label: '姓名',
    iconName: 'Name',
    componentId: 1,
  },
  {
    propertyId: 4,
    label: '专业',
    iconName: 'Major',
    componentId: 1,
  },
  {
    propertyId: 5,
    label: '身份',
    iconName: 'Identity',
    componentId: 1,
  },
  {
    propertyId: 6,
    label: '性别',
    iconName: 'Sex',
    componentId: 1,
  },
  {
    propertyId: 7,
    label: '证件照',
    iconName: 'IDPhoto',
    componentId: 1,
  },
  {
    propertyId: 8,
    label: '部门名称',
    iconName: 'DepartmentName',
    componentId: 1,
  },
  {
    propertyId: 9,
    label: '上级部门名称',
    iconName: 'UpperDepartName',
    componentId: 1,
  },
  {
    propertyId: 10,
    label: '在校时间',
    iconName: 'TimeInSchool',
    componentId: 1,
  },
  {
    propertyId: 11,
    label: '开卡时间',
    iconName: 'CardInOpen',
    componentId: 1,
  },
  {
    propertyId: 12,
    label: '失效时间',
    iconName: 'CardInUnValid',
    componentId: 1,
  },
  {
    propertyId: 13,
    label: '二维码',
    iconName: 'QrCode',
    componentId: 1,
  },
  {
    propertyId: 100,
    label: '自定义',
    iconName: 'DIYText',
    componentId: 100,
  },
];
