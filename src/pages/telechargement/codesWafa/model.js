import { CleActivation } from './service';
import download from 'downloadjs';
export default {
  namespace: 'codesWafa',
  state: {
    compte: { data: [] },
  },
  effects: {
    *CleActivation({ payload }, { call, put }) {
      try {
        const data = yield call(CleActivation, payload);
        download(data, 'codeWafa.csv', 'application/json');
        // yield put({
        //   type: 'CleActivation',
        //   payload: data,
        // });
      } catch (e) {
        console.log(e);
      }
    },
  },
  reducers: {
    CleActivation(state, action) {
      return {
        ...state,
        compte: action.payload,
      };
    },
  },
};
