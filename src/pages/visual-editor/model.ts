/*
 * @Date: 2021-04-13 15:20:17
 * @LastEditors: LuoChun
 * @LastEditTime: 2021-04-14 09:45:16
 * @Description: 组件数据流
 */
import { Effect, ImmerReducer, Reducer, Subscription } from 'umi';
import { componentList } from './data';
export interface ModelState {
  name: string;
  componentData: any[];
}
export interface ModelType {
  namespace: 'editor';
  state: ModelState;
  reducers: {
    addComponent: Reducer;
  };
}

const EditorModel: ModelType = {
  namespace: 'editor',
  state: {
    name: '',
    componentData: [],
  },

  reducers: {
    addComponent(state, { type, payload }) {
      state.componentData.push(payload);
      return { ...state };
    },
    // 启用 immer 之后
    // save(state, action) {
    //   state.name = action.payload;
    // },
  },
};
export default EditorModel;
