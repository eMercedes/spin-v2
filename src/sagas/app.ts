import { put, call, takeEvery, all, fork } from 'redux-saga/effects';

import { login } from '../services/api';
import * as appActions from '../actions/app';
import * as actionTypes from '../interfaces/redux';

function* _login({ email, password }: actionTypes.LoginRequestAction) {
  try {
    const { data } = yield call(login, email, password);
    yield put(appActions.loginSuccess(data));
  } catch (error: any) {
    yield put(appActions.loginFailure(error.response.data.error));
  }
}

function* watchLogin() {
  yield takeEvery(actionTypes.LOGIN_REQUEST, _login);
}

export default function* appSaga() {
  yield all([fork(watchLogin)]);
}
