import { searchChequesBloques } from '../../../services/chequeBloque';
import { reglementBloqueMapper } from './mapper';
import DataSource from '../../../utils/DataSource';

export default {
  namespace: 'reglementsBloqueSearch',
  state: {
    reglementsBloque: new DataSource(reglementBloqueMapper),
  },
  effects: {
    *search({ payload }, { call, put }) {
      try {
        const { values, frontPagination } = payload;
        const reglementsBloque = new DataSource(reglementBloqueMapper, frontPagination);
        reglementsBloque.setData = yield call(searchChequesBloques, {
          ...values,
          ...reglementsBloque.getBackendPagination(),
        });
        yield put({
          type: 'reglementsBloqueFetched',
          payload: reglementsBloque,
        });
      } catch (e) {
        console.log(e);
      }
    },
  },

  reducers: {
    reglementsBloqueFetched(state, action) {
      return {
        ...state,
        reglementsBloque: action.payload,
      };
    },
  },
};
