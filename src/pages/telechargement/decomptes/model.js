import { fetchEditCompte } from './service';
import download from 'downloadjs';

export default {
  namespace: 'decomptes',
  state: {
    compte: { data: [] },
  },
  effects: {
    *fetchEditCompte({ payload }, { call, put }) {
      try {
        const data = yield call(fetchEditCompte, payload);
        download(data, 'decomptes.pdf', 'application/pdf');
        // yield put({
        //   type: 'compteFetched',
        //   payload: compte,
        // });
      } catch (e) {
        console.log(e);
      }
    },
  },
  reducers: {
    compteFetched(state, action) {
      return {
        ...state,
        compte: action.payload,
      };
    },
  },
};
