import { beneficiaireMapper } from './mapper';
import DataSource from '../../../../utils/DataSource';
import { fetchBeneficiaires, searchAdherent } from '../../../../services/adherent';
import { searchContrat } from '../../../../services/contrat';


export default {
  namespace: 'adherentDetails',
  state: {
    beneficiaires: new DataSource(beneficiaireMapper),
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

    *fetchAdherent({ payload }, { call, put }) {
      try {
        const { numero, numeroContrat, categorie } = payload;
        const adherentList = yield call(searchAdherent, {
          numeroAdherent: numero,
          numeroContrat,
          categorie,
        });
        const adherent = adherentList ? (adherentList.content ? adherentList.content[0] : {}) : {};
        const contraList = yield call (searchContrat, {categorie, numeroContrat})
        const { nomClient } = contraList.content[0]
        console.log('contratList', contraList)
        console.log('nomClient', nomClient)
        adherent.nomClient = nomClient
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
