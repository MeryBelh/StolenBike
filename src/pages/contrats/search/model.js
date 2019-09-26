import { contratMapper } from '../../../mappers/contratMapper';
import DataSource from '../../../utils/DataSource';
import { searchContrat } from '../../../services/contrat';

export default {
  namespace: 'contratSearch',
  state: {
    contrats: new DataSource(contratMapper),
  },
  effects: {
    *searchContrat({ payload }, { call, put }) {
      try {
        const { frontPagination, values } = payload;
        const contrats = new DataSource(contratMapper, frontPagination);
        contrats.setData = yield call(searchContrat, {
          ...values,
          ...contrats.getBackendPagination(),
        });
        yield put({
          type: 'contratsFetched',
          payload: contrats,
        });
      } catch (e) {
        console.log(e);
      }
    },
  },

  reducers: {
    contratsFetched(state, action) {
      return {
        ...state,
        contrats: action.payload,
      };
    },
  },
};
