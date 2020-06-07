import React from 'react';
import { StyleSheet, TouchableHighlight, View } from 'react-native';
import Text from '../Text';

export const UserRow = ({
  name,
  country,
  brand,
  phoneNumber,
  rowColorViewStyle,
  containerStyle,
  onPress,
}) => {
  return (
    <TouchableHighlight onPress={onPress}>
      <View style={[styles.userRowView, containerStyle]}>
        <View style={[styles.rowColorView, rowColorViewStyle]} />
        <View style={styles.textWrapper}>
          <Text style={styles.textStyle}>{name}</Text>
        </View>
        <View style={styles.textWrapper}>
          <Text style={styles.textStyle}>{country}</Text>
        </View>
        <View style={styles.textWrapper}>
          <Text style={styles.textStyle}>{brand}</Text>
        </View>
        <View style={styles.textWrapper}>
          <Text style={styles.textStyle}>{phoneNumber}</Text>
        </View>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  userRowView: {
    flex: 1,
    flexDirection: 'row',
    paddingVertical: 8,
    paddingRight: 4,
  },
  rowColorView: {
    width: 8,
    marginRight: 5,
    backgroundColor: '#878787',
  },
  textWrapper: { flex: 1, justifyContent: 'flex-start' },
  textStyle: {},
});

export default UserRow;
