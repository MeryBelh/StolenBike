import { pecTableMapper } from '@/pages/prise-charge/recherche/mapper';
import DataSource from '@/utils/DataSource';
import { fetchPecsService, fetchPecStatutsService } from '@/services/pec';

export default {
  namespace: 'pecSearch',
  state: {
    pecs: new DataSource(pecTableMapper),
  },
  effects: {
    *fetchPecStatus({ payload }, { call, put }) {
      try {
        const pecStatuts = yield call(fetchPecStatutsService);
        yield put({ type: 'addPecStatuts', pecStatuts });
      } catch (e) {
        console.log(e);
      }
    },
    *fetchPecs({ formData, frontPagination }, { call, put }) {
      try {
        const pecs = new DataSource(pecTableMapper, frontPagination);
        pecs.setData = yield call(fetchPecsService, {
          ...formData,
          ...pecs.getBackendPagination(),
        });
        yield put({ type: 'addPecs', pecs });
      } catch (e) {
        console.error(e);
      }
    },
  },
  reducers: {
    addPecs(state, action) {
      return {
        ...state,
        pecs: action.pecs,
      };
    },
    addPecStatuts(state, action) {
      return {
        ...state,
        pecStatuts: action.pecStatuts,
      };
    },
  },
};
