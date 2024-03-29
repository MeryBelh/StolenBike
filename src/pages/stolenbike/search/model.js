//import { fetchDeclarations } from '../../../services/bordereau';
import stolenBikeCasesMapper from './mapper';
import DataSource from '../../../utils/DataSource';

export default {
  namespace: 'stolenBikeCases',
  state: {
    stolenBikeCase: new DataSource(stolenBikeCasesMapper),
  },
  effects: {
    *fetchStolenBikeCases({ payload }, { call, put }) {
      try {
        const { numero, frontPagination } = payload;
        const declarations = new DataSource(stolenBikeCasesMapper, frontPagination);
        declarations.setData = yield call(
          fetchDeclarations,
          numero,
          declarations.getPaginationQueryString(),
        );
        yield put({
          type: 'stolenBikeCasesFetched',
          payload: declarations,
        });
      } catch (e) {
        console.log(e);
      }
    },
  },

  reducers: {
    stolenBikeCasesFetched(state, action) {
      return {
        ...state,
        stolenBikeCase: action.payload,
      };
    },
  },
};
