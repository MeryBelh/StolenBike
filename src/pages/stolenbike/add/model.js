import { addStolenBike } from '../../../services/stolenBike';

export default {
  namespace: 'stolenBikes',
  state: {
    stolenBikes: [],
  },
  effects: {
    *add({ payload }, { call, put }) {
      try {
         payload = {
          ...payload,
          stolenDate : new Date().toISOString().slice(0, 19).replace('T', ' ')

        }
      yield call(addStolenBike, payload);
       // yield put({ type: 'PecIdFetched', payload: pecId });
      } catch (e) {
        console.log(e);
      }
    },
  },

  reducers: {
    reglementsBloqueFetched(state, action) {
      return {
        ...state,
        stolenBikes: action.payload,
      };
    },
  },
};
