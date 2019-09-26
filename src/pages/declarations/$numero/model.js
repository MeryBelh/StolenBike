import {
  fetchDeclaration,
  fetchPrestations,
  fetchCorrespondances,
} from '../../../services/declarationMaladie';
import { acteMedicaleMapper, correspondanceMapper } from './mapper';
import DataSource from '../../../utils/DataSource';

export default {
  namespace: 'declarationDetails',
  state: {
    declaration: {},
    prestations: new DataSource(acteMedicaleMapper),
    correspondances: new DataSource(correspondanceMapper),
  },

  effects: {
    *fetchDeclaration({ payload }, { call, put }) {
      try {
        const { numero } = payload;

        const declaration = yield call(fetchDeclaration, numero);
        console.log('declaration model', declaration);
        yield put({
          type: 'declarationFetched',
          payload: declaration,
        });
      } catch (e) {
        console.log(e);
      }
    },
    *fetchPrestations({ payload }, { call, put }) {
      try {
        const { numero, frontPagination } = payload;
        const prestations = new DataSource(acteMedicaleMapper, frontPagination);
        prestations.setData = yield call(
          fetchPrestations,
          numero,
          prestations.getPaginationQueryString(),
        );
        yield put({
          type: 'prestationsFetched',
          payload: prestations,
        });
      } catch (e) {
        console.log(e);
      }
    },

    *fetchCorrespondances({ payload }, { call, put }) {
      try {
        const { numero, frontPagination } = payload;
        const correspondances = new DataSource(correspondanceMapper, frontPagination);
        correspondances.setData = yield call(
          fetchCorrespondances,
          numero,
          correspondances.getPaginationQueryString(),
        );

        yield put({
          type: 'correspondancesFetched',
          payload: correspondances,
        });
      } catch (e) {
        console.log(e);
      }
    },
  },

  reducers: {
    declarationFetched(state, action) {
      return { ...state, declaration: action.payload };
    },
    prestationsFetched(state, action) {
      return { ...state, prestations: action.payload };
    },
    correspondancesFetched(state, action) {
      return { ...state, correspondances: action.payload };
    },
  },
};
