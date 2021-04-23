/*
 * @Date: 2021-04-13 15:20:17
 * @LastEditors: LuoChun
 * @LastEditTime: 2021-04-22 15:57:55
 * @Description: 组件数据流
 */
import { Effect, ImmerReducer, Reducer, Subscription } from 'umi';
import { componentList } from './data';
export interface ModelState {
  name: string;
  componentData: any[];
  isClickComponentStatus: false; //是否选中组件
  selectedComponentPropertyId: [] | null; //选中的组件Id
  selectedComponent: [] | null; //被选中的组件
  editMode: boolean; //是否处于编辑模式 true 编辑 ，false 预览
}
export interface ModelType {
  namespace: 'editor';
  state: ModelState;
  reducers: {
    addComponent: Reducer;
    setClickComponentsStatus: Reducer; //修改在编辑面板上是否有选中组件
    setCurrentSelectedComponent: Reducer;
    modifyDragBoxByPropetyId: Reducer;
  };
}

const EditorModel: ModelType = {
  namespace: 'editor',
  state: {
    name: '',
    componentData: [],
    isClickComponentStatus: false, // 是否有选中的组件
    selectedComponentPropertyId: null, // 被选中的组件的属性ID
    selectedComponent: null, //被选中的组件
    editMode: true,
  },

  reducers: {
    addComponent(state, { payload }) {
      state.componentData.push(payload);
      return { ...state };
    },
    setClickComponentsStatus(state, { payload }) {
      state.isClickComponentStatus = payload;
      return { ...state };
    },
    setCurrentSelectedComponent(state, { payload }) {
      state.selectedComponentPropertyId = payload.id;
      state.selectedComponent = payload.component;
      return { ...state };
    },
    modifyDragBoxByPropetyId(state, { payload }) {
      console.log('modify', payload);
      let { id, axis, size } = payload;
      let index = state.componentData.findIndex(
        (item) => Number(item.propertyId) === Number(id),
      );
      axis && (state.componentData[index].coordinates = axis);
      size && (state.componentData[index].size = size);
      return { ...state };
    },
    // 启用 immer 之后
    // save(state, action) {
    //   state.name = action.payload;
    // },
  },
};
export default EditorModel;
