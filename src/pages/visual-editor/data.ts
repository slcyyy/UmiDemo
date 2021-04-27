/*
 * @Date: 2021-04-09 15:44:10
 * @LastEditors: LuoChun
 * @LastEditTime: 2021-04-27 14:08:46
 */

type propertyItem = {
  propertyId: number;
  label: string;
  value?: string;
  iconName?: string; // 对应的icon组件
};

//  左侧拖拽的列表数据
export let propertyList: propertyItem[] = [
  {
    propertyId: 1, // 组件的唯一标识，用于在模板中确定该输入框的位置
    label: '人员编号',
    iconName: 'PerCode',
  },
  {
    propertyId: 2,
    label: '使用单位',
    iconName: 'UnitInUse',
  },
  {
    propertyId: 3,
    label: '姓名',
    iconName: 'Name',
  },
  {
    propertyId: 4,
    label: '专业',
    iconName: 'Major',
  },
  {
    propertyId: 5,
    label: '身份',
    iconName: 'Identity',
  },
  {
    propertyId: 6,
    label: '性别',
    iconName: 'Sex',
  },
  {
    propertyId: 7,
    label: '证件照',
    iconName: 'IDPhoto',
  },
  {
    propertyId: 8,
    label: '部门名称',
    iconName: 'DepartmentName',
  },
  {
    propertyId: 9,
    label: '上级部门名称',
    iconName: 'UpperDepartName',
  },
  {
    propertyId: 10,
    label: '在校时间',
    iconName: 'TimeInSchool',
  },
  {
    propertyId: 11,
    label: '开卡时间',
    iconName: 'CardInOpen',
  },
  {
    propertyId: 12,
    label: '失效时间',
    iconName: 'CardInUnValid',
  },
  {
    propertyId: 13,
    label: '二维码',
    iconName: 'QrCode',
  },
  {
    propertyId: 100,
    label: '自定义',
    iconName: 'DIYText',
  },
];
