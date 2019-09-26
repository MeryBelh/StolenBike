import { bordereauMapper } from './mapper';
import DataSource from '../../../utils/DataSource';
import { searchBordereau } from '../../../services/bordereau';

export default {
  namespace: 'bordereauxSearch',
  state: {
    bordereaux: new DataSource(bordereauMapper),
  },
  effects: {
    *search({ payload }, { call, put }) {
      try {
        const { values, frontPagination } = payload;
        const bordereaux = new DataSource(bordereauMapper, frontPagination);
        bordereaux.setData = yield call(searchBordereau(), {
          ...values,
          ...bordereaux.getBackendPagination(),
        });
        yield put({
          type: 'bordereauxFetched',
          payload: bordereaux,
        });
      } catch (e) {
        console.log(e);
      }
    },
  },

  reducers: {
    bordereauxFetched(state, action) {
      return {
        ...state,
        bordereaux: action.payload,
      };
    },
  },
};
