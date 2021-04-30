/*
 * @Date: 2021-04-13 15:20:17
 * @LastEditors: LuoChun
 * @LastEditTime: 2021-04-29 20:29:39
 * @Description: 组件数据流
 */
import { deepCopy } from '@/utils/utils';
import { Effect, ImmerReducer, Reducer, Subscription } from 'umi';
// import { componentList } from './data';
export interface ModelState {
  cardUrl: string;
  logoUrl: string;
  componentData: [];
  isClickComponentStatus: false; //是否选中组件
  selectedComponentPropertyId: [] | null; //选中的组件Id
  singleSelectedComponent: [] | null;
  // selectedComponent: [] | null; //被选中的组件
  menuShow: boolean;
  menuSettings: {};
  editMode: boolean; //是否处于编辑模式 true 编辑 ，false 预览
}
export interface ModelType {
  namespace: 'editor';
  state: ModelState;
  reducers: {
    addComponent: ImmerReducer;
    setClickComponentsStatus: Reducer; //修改在编辑面板上是否有选中组件
    setCurrentSelectedComponent: Reducer;
    removeCurrentSelectedComponent: Reducer;
    modifyDragBoxByPropetyId: Reducer;
    saveUrl: Reducer;
    setSingleCSS: Reducer;
    setMenu: Reducer;
    deleteComponent: Reducer;
  };
}

const EditorModel: ModelType = {
  namespace: 'editor',
  state: {
    cardUrl: '',
    logoUrl: '',
    componentData: [], //模板中的组件数据
    isClickComponentStatus: false, // 是否有选中的组件
    selectedComponentPropertyId: [], // 被选中的组件的属性ID
    singleSelectedComponent: null, //单个被选中的组件 用于设置样式
    menuShow: false, //是否显示右键菜单
    menuSettings: { x: 0, y: 0 },
    editMode: true,
  },

  reducers: {
    setMenu(state, { payload }) {
      const { axis, show } = payload;
      console.log('setMenu', show);
      state.menuShow = show;
      if (show) {
        state.menuSettings.x = axis.x;
        state.menuSettings.y = axis.y;
      }
      return {
        ...state,
      };
    },
    deleteComponent(state, { payload }) {
      console.log('deleteComponen', payload);
      const { componentData } = state;
      const index = componentData.findIndex(
        (item) => item.propetyId === payload,
      );
      componentData.splice(index, 1);
      return {
        ...state,
      };
      // const temp = JSON.parse(JSON.stringify(payload))
    },
    addComponent(state, { payload }) {
      const { componentData } = state;
      const temp = JSON.parse(JSON.stringify(payload));
      const updateList = [...componentData, temp];
      return {
        ...state,
        componentData: updateList,
      };
    },
    setClickComponentsStatus(state, { payload }) {
      state.isClickComponentStatus = payload;
      return { ...state };
    },
    setCurrentSelectedComponent(state, { payload }) {
      state.selectedComponentPropertyId.push(payload);
      return { ...state };
    },
    removeCurrentSelectedComponent(state, { payload }) {
      console.log('remove');
      state.selectedComponentPropertyId.splice(
        0,
        state.selectedComponentPropertyId.length,
      );
      return {
        ...state,
      };
    },
    modifyDragBoxByPropetyId(state, { payload }) {
      let { id, axis, size } = payload;
      let index = state.componentData.findIndex(
        (item) => item.propertyId === id,
      );
      // console.log(state.componentData[index])
      axis &&
        (state.componentData[index]['coordinates'] = { x: axis.x, y: axis.y });
      size && (state.componentData[index].size = size);
      return { ...state };
    },
    /**
     * @method 保存卡片背景
     */
    saveUrl(state, { payload }) {
      const { name, url } = payload;
      if (name === 'card') {
        state.cardUrl = url;
        return {
          ...state,
        };
      }
    },
    /**
     * @Method 设置整个选中元素的css样式
     */
    setSingleCSS(state, { payload }) {
      const { propertyId, cssName, cssProperty } = payload;
      const index = state.componentData.findIndex(
        (item) => item.propertyId === propertyId,
      );
      if (state.componentData[index].componentId === 1) {
        state.componentData[index].propStyles.label[cssName] = cssProperty;
        state.componentData[index].propStyles.colon[cssName] = cssProperty;
        state.componentData[index].propStyles.value[cssName] = cssProperty;
      } else if (state.componentData[index].componentId === 100) {
        state.componentData[index].propStyles.value[cssName] = cssProperty;
      }
      return {
        ...state,
      };
    },

    // 启用 immer 之后
    // save(state, action) {
    //   state.name = action.payload;
    // },
  },
};
export default EditorModel;
