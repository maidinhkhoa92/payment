import { all } from 'redux-saga/effects';
import PaymentSaga from './payment/saga';

export default function* rootSaga() {
  yield all([PaymentSaga()]);
}
