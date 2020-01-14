import produce from 'immer';

const INITIAL_STATE = {
  oAuth: null,
  signed: false,
  loading: false,
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@auth/SIGN_IN_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@auth/SIGN_IN_SUCCESS': {
        draft.loading = false;
        draft.oAuth = action.payload.oAuth;
        draft.signed = true;
        break;
      }
      case '@auth/SIGN_IN_FAILURE': {
        draft.loading = false;
        draft.oAuth = null;
        draft.signed = false;
        break;
      }
      case '@auth/SIGN_OUT': {
        draft.loading = false;
        draft.oAuth = null;
        draft.signed = false;
        break;
      }
      default:
        break;
    }
  });
}
