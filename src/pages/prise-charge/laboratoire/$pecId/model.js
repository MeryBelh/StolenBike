import { fetchDeclarationMaladie, fetchPrestations } from '../../../../services/declarationMaladie';
import { searchContrat } from '../../../../services/contrat';
import { fetchBeneficiaire, searchAdherent } from '../../../../services/adherent';
import DataSource from '../../../../utils/DataSource';
import { estimationMapper } from '../../../../mappers/estimationMapper';
import { giveUpPEC, rejectPec, submitPEC, validatePec } from '@/services/pec';

export default {
  namespace: 'pecDetail',
  state: {
    pec: {},
    contrat: {},
    adherent: {},
    beneficiaire: {},
    prestations: new DataSource(estimationMapper),
    pecSubmitted: null,
    pecGivedUp: null,
    pecValidated: null,
    pecRejected: null,
  },
  effects: {
    *fetchPecData({ payload }, { call, put }) {
      try {
        const pec = yield call(fetchDeclarationMaladie, payload);
        yield put({ type: 'pecFetched', payload: pec });

        const prestations = new DataSource(estimationMapper);
        prestations.setData = yield call(
          fetchPrestations,
          payload,
          prestations.getPaginationQueryString(),
        );
        yield put({ type: 'prestationsFetched', payload: prestations });

        const { categorie, numeroContrat } = pec;
        const contrats = yield call(searchContrat, { categorie, numeroContrat });
        const contrat = contrats ? (contrats.content ? contrats.content[0] : {}) : {};
        yield put({ type: 'contratFetched', payload: contrat });

        const { numeroAdherent } = pec;
        const adherentList = yield call(searchAdherent, { numeroAdherent });
        const adherent = adherentList ? (adherentList.content ? adherentList.content[0] : {}) : {};
        yield put({ type: 'adherentFetched', payload: adherent });

        const { numeroBeneficiaire } = pec;
        let beneficiaire = {
          ...adherent,
          numeroBeneficiaire: 1,
          nomBeneficiaire: adherent.nomAdherent,
        };
        if (numeroBeneficiaire !== 1)
          beneficiaire = yield call(fetchBeneficiaire, numeroAdherent, numeroBeneficiaire);
        yield put({ type: 'beneficiaireFetched', payload: beneficiaire });
      } catch (e) {
        console.log(e);
      }
    },

    *giveUpPec({ payload }, { call, put }) {
      try {
        const { pecId } = payload;
        const givedUpPec = yield call(giveUpPEC, pecId);
        yield put({ type: 'pecGivedUp', payload: givedUpPec });
      } catch (e) {
        console.log(e);
      }
    },

    *submitPec({ payload }, { call, put }) {
      try {
        const { pecId } = payload;
        const submittedPec = yield call(submitPEC, pecId);
        yield put({ type: 'pecSubmitted', payload: submittedPec });
      } catch (e) {
        console.log(e);
      }
    },

    *changePecGivedUp({ payload }, { put }) {
      try {

        yield put({ type: 'pecGivedUp', payload });
      } catch (e) {
        console.log(e);
      }
    },

    *changPecSubmitted({ payload }, { put }) {
      try {
        yield put({ type: 'pecSubmitted', payload });
      } catch (e) {
        console.log(e);
      }
    },

    *changePecValidated({ payload }, { put }) {
      try {

        yield put({ type: 'pecValidated', payload });
      } catch (e) {
        console.log(e);
      }
    },

    *changPecRejected({ payload }, { put }) {
      try {
        yield put({ type: 'pecRejected', payload });
      } catch (e) {
        console.log(e);
      }
    },

    *validatePec({ payload }, { call, put }) {
      try {

        const { pecId } = payload;
        const pecValidatedId = yield call(validatePec, pecId);
        yield put({ type: 'pecValidated', payload: pecValidatedId });
      }catch(e){
        console.log(e)
      }
    },

    *rejectPec({ payload }, { call, put }) {
      try {
        const pecRejectedId = yield call(rejectPec, payload);
        yield put({ type: 'pecRejected', payload: pecRejectedId });
      }catch(e){
      console.log(e)
    }
    },


  },
  reducers: {
    pecFetched(state, action) {
      return {
        ...state,
        pec: action.payload,
      };
    },
    prestationsFetched(state, action) {
      return {
        ...state,
        prestations: action.payload,
      };
    },
    contratFetched(state, action) {
      return {
        ...state,
        contrat: action.payload,
      };
    },
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
    pecSubmitted(state, action) {
      return {
        ...state,
        pecSubmitted: action.payload,
      };
    },
    pecGivedUp(state, action) {
      return {
        ...state,
        pecGivedUp: action.payload,
      };
    },
    pecValidated(state, action) {
      return {
        ...state,
        pecValidated: action.payload,
      };
    },
    pecRejected(state, action) {
      return {
        ...state,
        pecRejected: action.payload,
      };
    },
  },
};
