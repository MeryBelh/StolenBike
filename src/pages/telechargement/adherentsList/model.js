import { fetchAssures } from './service';
import download from 'downloadjs';

export default {
  namespace: 'adherentsList',
  state: {
    compte: { data: [] },
  },
  effects: {
    *fetchAssures({ payload }, { call, put }) {
      try {
        const adherents = yield call(fetchAssures, payload);
        console.log('adherents', adherents);
        download(adherents, 'adherentsList.csv', 'application/json');
        // yield put({
        //   type: 'fetchAssures',
        //   payload: prestations,
        // });
      } catch (e) {
        console.log(e);
      }
    },
  },
  reducers: {
    fetchAssures(state, action) {
      return {
        ...state,
        compte: action.payload,
      };
    },
  },
};
