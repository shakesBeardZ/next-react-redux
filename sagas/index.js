import { delay } from 'redux-saga';
import {
  all,
  call,
  put,
  take,
} from 'redux-saga/effects';

import * as actionTypes from '../contants/actionTypes';
import { tickClock } from '../actions/clock';

function* runClockSaga() {
  yield take(actionTypes.START_CLOCK);
  while (true) {
    yield put(tickClock(false));
    yield call(delay, 1000);
  }
}

function* rootSage() {
  yield all([
    runClockSaga(),
  ]);
}

export default rootSage;
