import DataSource from '../../../../utils/DataSource';
import AdherentMapper from '../../../../mappers/adherent/AdherentMapper';
import { searchAdherent } from '../../../../services/adherent';
import { searchContrat } from '../../../../services/contrat';


export default {
  namespace: 'adherentSearch',
  state: {
    adherents: new DataSource(AdherentMapper),
  },
  effects: {
    // *search({ payload }, { call, put }) {
    //   try {
    //     const { frontPagination, values } = payload;
    //     const adherents = new DataSource(AdherentMapper, frontPagination);
    //     adherents.setData = yield call(searchAdherent, { ...values, ...adherents.getBackendPagination() });
    //
    //     yield put({
    //       type: 'adherentsFetched',
    //       payload: adherents,
    //     });
    //   } catch (e) {
    //     console.log(e);
    //   }
    // },

    *search({ payload }, { call, put }) {
      try {
        const { frontPagination, values } = payload;
        const adherents = new DataSource(AdherentMapper, frontPagination);
        const data = yield call(searchAdherent, { ...values, ...adherents.getBackendPagination() });

        const {categorie, numeroContrat} = data.content[0]
        const contratList = yield call(searchContrat, {categorie, numeroContrat} )
        const {nomClient} = contratList? contratList.content[0]: {}

        adherents.setData = [{...data.content[0], nomClient}]

        yield put({
          type: 'adherentsFetched',
          payload: adherents,
        });
      } catch (e) {
        console.log(e);
      }
    },
  },

  reducers: {
    adherentsFetched(state, action) {
      return {
        ...state,
        adherents: action.payload,
      };
    },
  },
};
