import { searchContrat } from '../../../../services/contrat';
import { fetchBeneficiaire, searchAdherent } from '../../../../services/adherent';
import { fetchBaremes, fetchPathologies, savePEC } from '../../../../services/pec';

export default {
  namespace: 'createPec',
  state: {
    pecId: null,
    adherent: {},
    beneficiaire: {},
    contrat: {},
    pathologies: [],
    baremes: [],
    estimation: { baremes: [], montantTotal: 0 },
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

    *fetchPathologies({ payload }, { call, put }) {
      try {
        const pathologies = yield call(fetchPathologies);

        yield put({
          type: 'pathologiesFetched',
          payload: pathologies,
        });
      } catch (e) {
        console.log(e);
      }
    },

    *fetchBaremes({ payload }, { call, put }) {
      try {
        const baremes = yield call(fetchBaremes);
        yield put({
          type: 'baremesFetched',
          payload: baremes,
        });
      } catch (e) {
        console.log(e);
      }
    },

    *createPec({ payload }, { call, put }) {
      try {
        const { pec, AUTRE } = payload;
        const pecId = yield call(savePEC, pec, AUTRE, null, null, null, null);
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

    pathologiesFetched(state, action) {
      return {
        ...state,
        pathologies: action.payload,
      };
    },

    baremesFetched(state, action) {
      return {
        ...state,
        baremes: action.payload,
      };
    },
    estimationChanged(state, action) {
      return {
        ...state,
        estimation: action.payload,
      };
    },
    baremesChanged(state, action) {
      return {
        ...state,
        baremes: action.payload,
      };
    },

    PecIdFetched(state, action) {
      return {
        ...state,
        pecId: action.payload,
      };
    },
  },
};
