import { declarationMapper } from './mapper';
import DataSource from '../../../utils/DataSource';
import { searchDeclarationMaladie } from '../../../services/declarationMaladie';

export default {
  namespace: 'declarationSearch',
  state: {
    declarations: new DataSource(declarationMapper),
  },
  effects: {
    *search({ payload }, { call, put }) {
      try {
        const { values, frontPagination } = payload;
        const declarations = new DataSource(declarationMapper, frontPagination);
        declarations.setData = yield call(searchDeclarationMaladie, {
          ...values,
          ...declarations.getBackendPagination(),
        });
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
