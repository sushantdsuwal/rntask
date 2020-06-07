import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  View,
} from 'react-native';

export const Button = ({ onPress, title, textStyle, containerStyle }) => {
  return (
    <TouchableOpacity style={[styles.root, containerStyle]} onPress={onPress}>
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 5,
    borderRadius: 4,
  },
  text: {
    fontSize: 20,
    marginHorizontal: 10,
  },
});
