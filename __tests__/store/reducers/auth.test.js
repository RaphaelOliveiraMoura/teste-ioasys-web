import reducer, { INITIAL_STATE } from '~/store/modules/auth/reducer';
import * as Auth from '~/store/modules/auth/actions';

describe('Auth reducer', () => {
  it('DEFAULT', () => {
    const state = reducer(undefined, {});

    expect(state).toStrictEqual(INITIAL_STATE);
  });

  it('SIGN_IN_REQUEST', () => {
    const state = reducer(INITIAL_STATE, Auth.singInRequest());

    expect(state.loading).toBe(true);
  });

  it('SIGN_IN_SUCCESS', () => {
    const oAuth = {
      uid: 'uid.example',
      client: 'client.example',
      'access-token': 'access-token.example',
    };

    const state = reducer(INITIAL_STATE, Auth.signInSuccess(oAuth, null));

    expect(state.oAuth).toStrictEqual(oAuth);
    expect(state.loading).toBe(false);
    expect(state.signed).toBe(true);
  });

  it('SIGN_IN_FAILURE', () => {
    const state = reducer(
      { ...INITIAL_STATE, loading: true, signed: true },
      Auth.signInFailure()
    );

    expect(state.loading).toBe(false);
    expect(state.signed).toBe(false);
  });

  it('SIGN_OUT', () => {
    const state = reducer(INITIAL_STATE, Auth.singOut());

    expect(state.signed).toBe(false);
  });

  it('UNSET_LOADING', () => {
    const state = reducer(
      { ...INITIAL_STATE, loading: true },
      Auth.unsetLoading()
    );

    expect(state.loading).toBe(false);
  });
});
