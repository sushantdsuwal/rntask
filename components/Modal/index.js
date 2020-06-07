import React from 'react';
import {
  Modal,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import { Feather } from '@expo/vector-icons';

export const EModal = ({
  open,
  close,
  title,
  children,
  containerStyle,
  headerRight,
  onPressHeaderRight,
}) => {
  if (!open) {
    return null;
  }
  return (
    <Modal animationType='slide' transparent={false} visible={open}>
      <SafeAreaView style={styles.safeArea}>
        <View style={[styles.container, containerStyle]}>
          <View style={styles.headerContainer}>
            <TouchableHighlight onPress={close}>
              <Feather name='chevron-down' size={28} color={'#000'} />
            </TouchableHighlight>

            <Text style={styles.titleText}>{title}</Text>
            <Text
              style={[styles.titleText, { color: 'red' }]}
              onPress={onPressHeaderRight}
            >
              {headerRight}
            </Text>
          </View>

          {children}
        </View>
      </SafeAreaView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  container: {
    flex: 1,
    alignItems: 'stretch',
    paddingTop: 20,
    backgroundColor: '#FFFFFF',
  },
  headerContainer: {
    paddingBottom: 15,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    borderBottomColor: '#DDD',
    borderBottomWidth: 1,
  },
  titleText: {
    marginLeft: 30,
    fontSize: 20,
    color: '#000000',
    marginBottom: 2,
  },
});

export default EModal;
