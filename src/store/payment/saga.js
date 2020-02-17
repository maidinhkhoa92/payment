import actions from './actions';
import { all, fork, takeLatest, put, call } from 'redux-saga/effects';
import { Payment, } from 'services/payment';

// Get all agents
export function* paymentSaga() {
  yield takeLatest(actions.PAYMENT_REQUEST, function*({ params, meta }) {
    try {
      const res = yield call(Payment, params);

      if (res.status !== 200) {
        throw res.data.msg;
      }
      yield put({ type: actions.PAYMENT_SUCCESS, payload: res.data, meta });
    } catch (error) {
      yield put({
        type: actions.PAYMENT_FAILURE,
        payload: error,
        error: true,
        meta
      });
    }
  });
}

export default function* rootSaga() {
  yield all([
    fork(paymentSaga),
  ]);
}
