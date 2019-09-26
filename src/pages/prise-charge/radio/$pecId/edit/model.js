import { editAdherent } from '../../../../../services/adherent';
import { editObservation, editPec, editPecDetails } from '../../../../../services/pec';

export default {
  namespace: 'editPec',
  state: {
    prestationEdited: null,
  },
  effects: {
    *editAdherent({ payload }, { call }) {
      try {
        yield call(editAdherent, payload);
      } catch (e) {
        console.log(e);
      }
    },

    *editPrestation({ payload }, { call, put }) {
      try {
        yield call(editPec, payload);
        put({type: 'prestationEdited', payload: true})
      } catch (e) {
        console.log(e);
      }
    },

    *editEstimations({ payload }, { call }) {
      try {
        yield call(editPecDetails, payload);
      } catch (e) {
        console.log(e);
      }
    },

    *editObservation({ payload }, { call }) {
      try {

        yield call(editObservation, payload);
      } catch (e) {
        console.log(e);
      }
    },

    *editDocuments({ payload }, { call }) {
      try {
        const { pec, documents } = payload;
        yield call(console.log, pec, documents);
      } catch (e) {
        console.log(e);
      }
    },
  },
  reducers: {

    prestationEdited(state, action){
      return {
        ...state,
        prestationEdited: action.payload
      }
    }
  },
};
