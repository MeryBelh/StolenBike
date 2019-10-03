import DataSource from '../../utils/DataSource';
import { fetchTaches, fetchTachesNonAffected, solveCase, asignTask } from '@/services/tache';
import tacheMapper from '../../mappers/tacheMapper';

export default {
  namespace: 'tachesModel',
  state: {
    taches: new DataSource(tacheMapper),
    tachesNonAffecte: new DataSource(tacheMapper),
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
    *fetchTachesNonAffected({ payload }, { call, put }) {
      try {
        const { frontPagination } = payload;
        const tachesNonAffecte = new DataSource(tacheMapper, frontPagination);
        tachesNonAffecte.setData = yield call(
          fetchTachesNonAffected,
          tachesNonAffecte.getPaginationQueryString(),
        );
        yield put({
          type: 'tachesNonAffecteFetched',
          payload: tachesNonAffecte,
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
    *asignTask({ payload }, { call, put }) {
      try {
        payload = {
          ...payload,
          policeId: localStorage.getItem('access-token') || 0,
          resolved: 0,
        };
        yield call(asignTask, payload);
        yield put({ type: 'taskAsigned', payload: payload });
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
    tachesNonAffecteFetched(state, action) {
      return {
        ...state,
        tachesNonAffecte: action.payload,
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
    taskAsigned(state, action) {
      //delete from tachesNonAffecte
      let index = state.tachesNonAffecte.data.findIndex(item => item.id === action.payload.bikeId);

      let asignedTask = state.tachesNonAffecte.data[index];

      let nonAffectedTasks = new DataSource(tacheMapper, 0);
      nonAffectedTasks.data = [
        ...state.tachesNonAffecte.data.slice(0, index),
        ...state.tachesNonAffecte.data.slice(index + 1),
      ];

      //add the one on the tasks
      let affectedTasks = new DataSource(tacheMapper, 0);
      affectedTasks.data = [...state.taches.data, asignedTask];
      return {
        ...state,
        taches: affectedTasks,
        tachesNonAffecte: nonAffectedTasks,
      };
    },
  },
};
