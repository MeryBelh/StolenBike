import { searchContrat } from '../../../../services/contrat';
import { fetchBeneficiaire, searchAdherent } from '../../../../services/adherent';
import { savePEC } from '../../../../services/pec';
import {
  fetchPrestatiaire,
  fetchTypePrestatiaire,
  fetchVilles,
} from '../../../../services/prestataire';

export default {
  namespace: 'createPec',
  state: {
    pecId: null,
    adherent: {},
    beneficiaire: {},
    contrat: {},
    typePrestataire: [],
    villes: [],
    prestataires: [],
  },
  effects: {
    *fetchData({ payload }, { call, put }) {
      try {
        const { numeroAdherent } = payload;
        const adherentList = yield call(searchAdherent, { numeroAdherent });
        const adherent = adherentList ? (adherentList.content ? adherentList.content[0] : {}) : {};
        yield put({ type: 'adherentFetched', payload: adherent });

        const { numeroBeneficiaire } = payload;
        let beneficiaire = {
          ...adherent,
          numeroBeneficiaire: 1,
          nomBeneficiaire: adherent.nomAdherent,
        };
        if (numeroBeneficiaire !== '1') {
          beneficiaire = yield call(fetchBeneficiaire, numeroAdherent, numeroBeneficiaire);
        }
        yield put({ type: 'beneficiaireFetched', payload: beneficiaire });

        const { categorie, numeroContrat } = adherent;
        const contrats = yield call(searchContrat, { categorie, numeroContrat });
        const contrat = contrats ? (contrats.content ? contrats.content[0] : {}) : {};
        yield put({ type: 'contratFetched', payload: contrat });
      } catch (e) {
        console.log(e);
      }
    },
    *fetchTypePrestataire({ payload }, { call, put }) {
      try {
        const typePrestataire = yield call(fetchTypePrestatiaire);
        yield put({ type: 'typePrestataireFetched', payload: typePrestataire });
      } catch (e) {
        console.log(e);
      }
    },

    *fetchVilles({ payload }, { call, put }) {
      try {
        const villes = yield call(fetchVilles, payload);
        yield put({ type: 'villesFetched', payload: villes });
      } catch (e) {
        console.log(e);
      }
    },
    *fetchPrestataires({ payload }, { call, put }) {
      try {
        const { typePresatataire, codeVille } = payload;
        const prestataires = yield call(fetchPrestatiaire, typePresatataire, codeVille);
        yield put({ type: 'prestatairesFetched', payload: prestataires });
      } catch (e) {
        console.log(e);
      }
    },

    *createPec({ payload }, { call, put }) {
      try {
        const { pec,  autre, pm, devis, cin } = payload;
        const pecId = yield call(savePEC, pec,  autre, pm, devis, cin);
        yield put({ type: 'PecIdFetched', payload: pecId });
      } catch (e) {
        console.log(e);
      }
    },

    *changePecId({ payload }, { put }) {
      try {
        yield put({ type: 'PecIdFetched', payload });
      } catch (e) {
        console.log(e);
      }
    },
  },
  reducers: {
    adherentFetched(state, action) {
      return {
        ...state,
        adherent: action.payload,
      };
    },
    beneficiaireFetched(state, action) {
      return {
        ...state,
        beneficiaire: action.payload,
      };
    },
    contratFetched(state, action) {
      return {
        ...state,
        contrat: action.payload,
      };
    },
    PecIdFetched(state, action) {
      return {
        ...state,
        pecId: action.payload,
      };
    },
    typePrestataireFetched(state, action) {
      return {
        ...state,
        typePrestataire: action.payload,
      };
    },
    villesFetched(state, action) {
      return {
        ...state,
        villes: action.payload,
      };
    },
    prestatairesFetched(state, action) {
      return {
        ...state,
        prestataires: action.payload,
      };
    },
  },
};
