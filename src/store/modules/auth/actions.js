export function singInRequest(email, password) {
  return {
    type: '@auth/SIGN_IN_REQUEST',
    payload: { email, password },
  };
}

export function signInSuccess(oAuth, investor) {
  return {
    type: '@auth/SIGN_IN_SUCCESS',
    payload: { oAuth, investor },
  };
}

export function signInFailure() {
  return {
    type: '@auth/SIGN_IN_FAILURE',
  };
}

export function singOut() {
  return {
    type: '@auth/SIGN_OUT',
  };
}
