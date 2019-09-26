import DataSource from '../../utils/DataSource';
import { fetchTaches } from '@/services/tache';
import tacheMapper from '../../mappers/tacheMapper';

export default {
  namespace: 'tachesModel',
  state: {
    taches: new DataSource(tacheMapper),
  },
  effects: {
    *fetchTaches({ payload }, { call, put }) {
      try {
        const { frontPagination } = payload;
        console.log('frontPagination', frontPagination);
        const taches = new DataSource(tacheMapper, frontPagination);
        taches.setData = yield call(fetchTaches, taches.getPaginationQueryString());
        yield put({
          type: 'tachesFetched',
          payload: taches,
        });
      } catch (e) {
        console.log(e);
      }
    },
  },

  reducers: {
    tachesFetched(state, action) {
      return {
        ...state,
        taches: action.payload,
      };
    },
  },
};
