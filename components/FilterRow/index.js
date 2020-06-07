import React from 'react';
import { View, StyleSheet, TouchableHighlight } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Text from '../Text';

const FilterRow = ({ item, selectedFilterItem, onPress }) => {
  return (
    <TouchableHighlight onPress={onPress}>
      <View style={styles.filterOptionWrapper}>
        <Text style={styles.headerRowText}>{item}</Text>
        {selectedFilterItem === item && (
          <Ionicons color={'orangered'} name='md-checkmark' size={18} />
        )}
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  headerRowText: { marginLeft: 23 },
  separator: { marginBottom: 10 },
  filterOptionWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
  },
});

export default FilterRow;
