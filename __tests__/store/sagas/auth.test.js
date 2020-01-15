import { runSaga } from 'redux-saga';
import MockAdapter from 'axios-mock-adapter';

import api from '~/services/api';

import * as Auth from '~/store/modules/auth/actions';
import { signIn, setToken } from '~/store/modules/auth/sagas';

const apiMock = new MockAdapter(api);

describe('Auth saga', () => {
  it('should be able to sign in', async () => {
    const dispatch = jest.fn();

    const responseBody = {
      investor: { id: 1, investor_name: 'Teste Apple' },
      enterprise: null,
      success: true,
    };

    const responseHeader = {
      uid: 'uid.example',
      client: 'client.example',
      'access-token': 'access-token.example',
    };

    apiMock
      .onPost('/users/auth/sign_in')
      .reply(200, responseBody, responseHeader);

    await runSaga({ dispatch }, signIn, {
      payload: {
        username: 'username.example',
        password: 'password.example',
      },
    }).toPromise();

    expect(dispatch).toHaveBeenCalledWith(
      Auth.signInSuccess(responseHeader, responseBody.investor)
    );
  });

  it('should be able to handle error in signIn', async () => {
    const dispatch = jest.fn();

    apiMock.onPost('/users/auth/sign_in').reply(401);

    await runSaga({ dispatch }, signIn, {
      payload: {
        username: 'username.example',
        password: 'password.example',
      },
    }).toPromise();

    expect(dispatch).toHaveBeenCalledWith(Auth.signInFailure());
  });

  it('should be able save api headers when app start', async () => {
    setToken({
      payload: { auth: { oAuth: { token: 'oAth.exmaple' } } },
    });

    expect(api.defaults.headers).toStrictEqual({ token: 'oAth.exmaple' });
  });
});
