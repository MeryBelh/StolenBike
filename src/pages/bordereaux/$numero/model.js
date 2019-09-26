import { fetchDeclarations } from '../../../services/bordereau';
import declarationMapper from './mapper';
import DataSource from '../../../utils/DataSource';

export default {
  namespace: 'bordereauDetails',
  state: {
    declarations: new DataSource(declarationMapper),
  },
  effects: {
    *fetchDeclarations({ payload }, { call, put }) {
      try {
        const { numero, frontPagination } = payload;
        const declarations = new DataSource(declarationMapper, frontPagination);
        declarations.setData = yield call(
          fetchDeclarations,
          numero,
          declarations.getPaginationQueryString(),
        );
        yield put({
          type: 'declarationsFetched',
          payload: declarations,
        });
      } catch (e) {
        console.log(e);
      }
    },
  },

  reducers: {
    declarationsFetched(state, action) {
      return {
        ...state,
        declarations: action.payload,
      };
    },
  },
};
