import { all, takeLatest, call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import { signInSuccess, signInFailure } from './actions';

import api from '~/services/api';

import history from '~/services/history';

export function setToken({ payload }) {
  if (!payload) return;

  const { oAuth } = payload.auth;

  if (oAuth) {
    api.defaults.headers = { ...oAuth };
  }
}

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;

    const response = yield call(api.post, '/users/auth/sign_in', {
      email,
      password,
    });

    const { investor } = response.data;

    const oAuth = {
      'access-token': response.headers['access-token'],
      client: response.headers.client,
      uid: response.headers.uid,
    };

    api.defaults.headers = { ...oAuth };

    yield put(signInSuccess(oAuth, investor));

    history.push('/enterprises');
  } catch (error) {
    if (error.response && error.response.status === 401) {
      toast.error('Credenciais inválidas, verifique seus dados!');
    } else {
      toast.error('Erro ao comunicar com o servidor!');
    }

    yield put(signInFailure());
  }
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
]);
