import { fromJS } from 'immutable';
import * as actionTypes from '../contants/actionTypes';

const initialState = fromJS({
  count: 0,
  error: false,
  lastUpdate: 0,
  light: false,
});

const clock = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.TICK_CLOCK:
      return state
        .set('lastUpdate', action.ts)
        .set('light', !!action.light);
    default:
      return state;
  }
};

export default clock;
