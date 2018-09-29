import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getIn } from 'immutable';

import {
  startClock as startClockAct,
  tickClock,
} from '../actions/clock';
import Clock from '../components/Clock';

class Counter extends Component {
  static async getInitialProps({ store, ctx }) {
    const { isServer } = ctx;
    store.dispatch(tickClock(isServer));

    return { isServer };
  }

  componentDidMount() {
    const { startClock } = this.props;
    startClock();
  }

  render() {
    return (
      <Clock {...this.props} />
    );
  }
}

const mapStateToProps = state => ({
  lastUpdate: getIn(state, ['clock', 'lastUpdate']),
  light: getIn(state, ['clock', 'light']),
});
const mapDispatchToProps = dispatch => ({
  startClock: bindActionCreators(startClockAct, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
