import router from 'umi/router';
import { AnyAction, Reducer } from 'redux';
import { EffectsCommandMap } from 'dva';
import { deleteTokenInformation, persistTokenInformation } from '@/pages/user/login/utils/utils';
import { reloadAuthorized } from '@/utils/Authorized';
import { autheticate } from '@/services/user';

export interface IStateType {
  status?: 'ok' | 'error';
  currentAuthority?: 'user' | 'guest' | 'admin';
}

export type Effect = (
  action: AnyAction,
  effects: EffectsCommandMap & { select: <T>(func: (state: IStateType) => T) => T },
) => void;

export interface ModelType {
  namespace: string;
  state: IStateType;
  effects: {
    login: Effect;
    logout: Effect;
  };
  reducers: {
    changeLoginStatus: Reducer<IStateType>;
  };
}

const Model: ModelType = {
  namespace: 'userLogin',

  state: {
    status: undefined,
  },

  effects: {
    
    *login({ payload }, { call, put }) {      
      const policeOfficer = yield call(autheticate, payload);

      const result = policeOfficer.length
      ? { status: 'ok', currentAuthority: 'admin' }
      : { status: 'error', currentAuthority: 'guest' };
        
      if (result.status === 'ok') {
        yield persistTokenInformation(policeOfficer[0]);
        reloadAuthorized();
        yield router.push('/stolenbike/cases');
      }
      yield put({
        type: 'changeLoginStatus',
        payload: result,
      });
    },

    *logout({ payload }, { call, put }) {
      yield deleteTokenInformation();
      router.push('/');
      yield put({
        type: 'changeLoginStatus',
        payload: { status: '' },
      });
    },
  },

  reducers: {
    changeLoginStatus(state, { payload }) {
      return {
        ...state,
        status: payload.status,
      };
    },
  },
};

export default Model;
