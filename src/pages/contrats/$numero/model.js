import { fetchAvenants, fetchClauses, fetchPrestations, fetchPrimes } from '../../../services/contrat';
import { avenantMapper, clauseMapper, prestationMapper, primeMapper } from './mapper';
import DataSource from '../../../utils/DataSource';

export default {
  namespace: 'contratDetails',
  state: {
    avenants: new DataSource(avenantMapper),
    prestations: new DataSource(prestationMapper),
    clauses: new DataSource(clauseMapper),
    primes: new DataSource(primeMapper),
  },
  effects: {
    *fetchAvenants({ payload }, { call, put }) {
      const { numero } = payload;
      try {
        const avenants = new DataSource(avenantMapper);
        avenants.setData = yield call(fetchAvenants, numero);

        yield put({
          type: 'avenantsFetched',
          payload: avenants,
        });
      } catch (e) {
        console.log(e);
      }
    },
    *fetchPrestations({ payload }, { call, put }) {
      try {
        const { numero, frontPagination } = payload;
        const prestations = new DataSource(prestationMapper, frontPagination);
        prestations.setData = yield call(
          fetchPrestations,
          numero,
          prestations.getPaginationQueryString(),
        );

        yield put({ type: 'prestationsFetched', payload: prestations });
      } catch (e) {
        console.log(e);
      }
    },

    *fetchClauses({ payload }, { call, put }) {
      try {
        const { numero, frontPagination } = payload;
        const clauses = new DataSource(clauseMapper, frontPagination);
        clauses.setData = yield call(fetchClauses, numero, clauses.getPaginationQueryString());
        yield put({
          type: 'clausesFetched',
          payload: clauses,
        });
      } catch (e) {
        console.log(e);
      }
    },
    *fetchPrimes({ payload }, { call, put }) {
      try {
        const { numero, frontPagination } = payload;
        const primes = new DataSource(primeMapper, frontPagination);
        const data = yield call(fetchPrimes, numero, primes.getPaginationQueryString());
        primes.setData = data;

        yield put({
          type: 'primesFetched',
          payload: primes,
        });
      } catch (e) {
        console.log(e);
      }
    },
  },

  reducers: {
    avenantsFetched(state, action) {
      return {
        ...state,
        avenants: action.payload,
      };
    },
    prestationsFetched(state, action) {
      return {
        ...state,
        prestations: action.payload,
      };
    },
    clausesFetched(state, action) {
      return {
        ...state,
        clauses: action.payload,
      };
    },
    primesFetched(state, action) {
      return {
        ...state,
        primes: action.payload,
      };
    },
  },
};
