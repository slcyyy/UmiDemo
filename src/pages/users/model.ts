/*
 * @Date: 2020-12-30 19:54:49
 * @LastEditors: LuoChun
 * @LastEditTime: 2020-12-30 20:19:03
 */
import { Effect, ImmerReducer, Reducer, Subscription } from 'umi';
import {getRemoteList} from './service'
export interface IndexModelState {
  name: string;
}
export interface IndexModelType {
  namespace: 'users';
  state: IndexModelState;
  effects: {
    getRemote: Effect;
  };
  reducers: {
    getList: Reducer;
    // 启用 immer 之后
    // save: ImmerReducer<IndexModelState>;
  };
  subscriptions: { setup: Subscription };
}
const UserModel: IndexModelType = {
  namespace: 'users',
  state: {
    name: '',
  },
  effects: {
    *getRemote({ payload }, { call, put }) {
      // yield put({type:'getList',payload:data})  传递给reducer\
      const res = yield call(getRemoteList)
      console.log(res)
      yield put({type:'getList',payload:res}) // payload不能直接裸数据，必须要用一个{}对象去嵌套
    },
  },
  reducers: {
    getList(state,{type,payload}) {
      return payload
    },
    // 启用 immer 之后
    // save(state, action) {
    //   state.name = action.payload;
    // },
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname }) => {
        if (pathname === '/users') {
          dispatch({
            type: 'getRemote',
          })
        }
      });
    }
  }
};
export default UserModel;