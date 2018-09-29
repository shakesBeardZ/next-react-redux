import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Text = styled.div`
  padding: 15px;
  display: inline-block;
  color: #82FA58;
  font: 50px menlo, monaco, monospace;
  background-color: ${props => (props.light ? '#999' : '#000')};
`;

const pad = n => (n < 10 ? `0${n}` : n);
const format = t => `${pad(t.getUTCHours())}:${pad(t.getUTCMinutes())}:${pad(t.getUTCSeconds())}`;

const Clock = ({ lastUpdate, light }) => (
  <Text light={light}>
    {format(new Date(lastUpdate))}
  </Text>
);

Clock.propTypes = {
  lastUpdate: PropTypes.number.isRequired,
  light: PropTypes.bool.isRequired,
};

export default Clock;
