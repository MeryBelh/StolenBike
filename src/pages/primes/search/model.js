import { searchPrimes } from '../../../services/prime';
import DataSource from '../../../utils/DataSource';
import { primeMapper } from './mapper';

export default {
  namespace: 'primesSearch',
  state: {
    primes: new DataSource(primeMapper),
  },
  effects: {
    *search({ payload }, { call, put }) {
      try {
        const { values, frontPagination } = payload;
        const primes = new DataSource(primeMapper, frontPagination);
        primes.setData = yield call(searchPrimes, { ...values, ...primes.getBackendPagination() });
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
    primesFetched(state, action) {
      return {
        ...state,
        primes: action.payload,
      };
    },
  },
};
