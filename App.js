import React, { useReducer } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import useCachedResources from './hooks/useCachedResources';
import LinkingConfiguration from './navigation/LinkingConfiguration';
import Navigator from './navigation/Navigator';
import { UserContext, initialUser, userReducer } from './reducers/userReducer';

export default function App(props) {
  const isLoadingComplete = useCachedResources();
  const [store, dispatch] = useReducer(userReducer, initialUser);

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <UserContext.Provider value={{ store, dispatch }}>
        <View style={styles.container}>
          <StatusBar
            barStyle={Platform.OS === 'ios' ? 'dark-content' : 'light-content'}
          />
          <NavigationContainer linking={LinkingConfiguration}>
            <Navigator />
          </NavigationContainer>
        </View>
      </UserContext.Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop:
      Platform.OS === 'ios'
        ? StatusBar.currentHeight
          ? StatusBar.currentHeight
          : 0
        : 0,
  },
});
