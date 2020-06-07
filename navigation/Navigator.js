import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { ADD_USER_SCREEN, LIST_SCREEN } from './routes';
import { ListScreen, AddUserScreen } from '../screens';

const MainStack = createStackNavigator();

const HeaderRight = () => {
  const navigation = useNavigation();
  return (
    <Ionicons
      name='md-add-circle-outline'
      size={30}
      onPress={() => navigation.navigate(ADD_USER_SCREEN)}
    />
  );
};

const MainStackNavigator = () => {
  return (
    <MainStack.Navigator>
      <MainStack.Screen
        name={LIST_SCREEN}
        component={ListScreen}
        options={{
          headerTitle: 'Users',
          headerRight: () => <HeaderRight />,
          headerRightContainerStyle: {
            paddingHorizontal: 10,
          },
        }}
      />
      <MainStack.Screen
        name={ADD_USER_SCREEN}
        options={{ headerTitle: 'Add New User' }}
        component={AddUserScreen}
      />
    </MainStack.Navigator>
  );
};

const Navigator = () => {
  return <MainStackNavigator />;
};

export default Navigator;
