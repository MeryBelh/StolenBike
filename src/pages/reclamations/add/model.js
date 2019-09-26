import { saveReclamation } from '../../../services/reclamation';

export default {
  namespace: 'reclamations',
  state: {},
  effects: {
    *saveReclamation({ payload }, { call }) {
      yield call(saveReclamation, payload);
    },
  },
};
