import { reclamationMapper } from './mapper';
import DataSource from '../../../utils/DataSource';
import { searchReclamation } from '../../../services/reclamation';

export default {
  namespace: 'reclamationsSearch',
  state: {
    reclamations: new DataSource(reclamationMapper),
  },
  effects: {
    *search({ payload }, { call, put }) {
      try {
        const { values, frontPagination } = payload;
        const reclamations = new DataSource(reclamationMapper, frontPagination);
        reclamations.setData = yield call(searchReclamation, {
          ...values,
          ...reclamations.getBackendPagination(),
        });
        yield put({
          type: 'reclamationsFetched',
          payload: reclamations,
        });
      } catch (e) {
        console.log(e);
      }
    },
  },

  reducers: {
    reclamationsFetched(state, action) {
      return {
        ...state,
        reclamations: action.payload,
      };
    },
  },
};
