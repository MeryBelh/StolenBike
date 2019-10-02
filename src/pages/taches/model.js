import DataSource from '../../utils/DataSource';
import { fetchTaches, solveCase } from '@/services/tache';
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
    *solvecase({ payload }, { call, put }) {
      try {
        payload = {
          ...payload,
          policeId: localStorage.getItem('access-token') || 0,
        };
        yield call(solveCase, payload);
        yield put({ type: 'caseSolved', payload: payload });
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
    caseSolved(state, action) {
      let index = state.taches.data.findIndex(item => item.id === action.payload.bikeId);

      let stateTemp = new DataSource(tacheMapper, 0);
      stateTemp.data = [
        ...state.taches.data.slice(0, index),
        ...state.taches.data.slice(index + 1),
      ];
      return {
        ...state,
        taches: stateTemp,
      };
    },
  },
};
