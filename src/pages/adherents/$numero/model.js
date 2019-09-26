import { beneficiaireMapper, adherentHistoriqueMapper } from './mapper';
import DataSource from '../../../utils/DataSource';
import { fetchAdherentHistoriques, fetchBeneficiaires } from '../../../services/adherent';
import { fetchAdherent } from '../../../services/pec';

export default {
  namespace: 'adherentDetails',
  state: {
    beneficiaires: new DataSource(beneficiaireMapper),
    adherentHistoriques: new DataSource(adherentHistoriqueMapper),
    adherent: {},
  },
  effects: {
    *fetchBeneficiaires({ payload }, { call, put }) {
      try {
        const { numero, frontPagination } = payload;
        const beneficiaires = new DataSource(beneficiaireMapper, frontPagination);
        beneficiaires.setData = yield call(
          fetchBeneficiaires,
          numero,
          beneficiaires.getPaginationQueryString(),
        );
        yield put({
          type: 'beneficiairesFetched',
          payload: beneficiaires,
        });
      } catch (e) {
        console.log(e);
      }
    },
    *fetchAdherentHistoriques({ payload }, { call, put }) {
      try {
        const { numero, fronPagination } = payload;
        const adherentHistoriques = new DataSource(adherentHistoriqueMapper, fronPagination);
        adherentHistoriques.setData = yield call(
          fetchAdherentHistoriques,
          numero,
          adherentHistoriques.getPaginationQueryString(),
        );

        yield put({
          type: 'adherentHistoriquesFetched',
          payload: adherentHistoriques,
        });
      } catch (e) {
        console.log(e);
      }
    },

    *fetchAdherent({ payload }, { call, put }) {
      try {
        const { numero } = payload;
        const adherent = yield call(fetchAdherent, numero);
        yield put({
          type: 'adherentFetched',
          payload: adherent,
        });
      } catch (e) {
        console.log(e);
      }
    },
  },

  reducers: {
    beneficiairesFetched(state, action) {
      return {
        ...state,
        beneficiaires: action.payload,
      };
    },

    adherentFetched(state, action) {
      return {
        ...state,
        adherent: action.payload,
      };
    },
    adherentHistoriquesFetched(state, action) {
      return {
        ...state,
        adherentHistoriques: action.payload,
      };
    },
  },
};
