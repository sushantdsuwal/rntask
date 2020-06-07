import React, { useContext } from 'react';
import { Text as RNText, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const Text = ({ style, ...props }) => {
  return <RNText {...props} style={[style, { fontFamily: 'space-mono' }]} />;
};

Text.propStyles = {
  style: PropTypes.object,
};

Text.defaultProps = {};

export default Text;
