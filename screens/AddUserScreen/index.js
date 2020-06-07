import React, { useState, useContext } from 'react';
import { View, Alert, ScrollView } from 'react-native';
import { Text, TextInput, Button } from '../../components';
import { addUser, updateUser } from '../../reducers/userActions';
import { UserContext } from '../../reducers/userReducer';
import KeyboardAvoidingView from '../../presentation/KeyboardAvoidingView';
import { uuidv4, phoneNumberValidator } from '../../utils';

const AddUserScreen = ({ navigation, route }) => {
  const { dispatch } = useContext(UserContext);
  const [user, setUser] = useState({
    name: '',
    country: '',
    brand: '',
    phoneNumber: '',
  });

  React.useEffect(() => {
    if (!!route.params?.item) {
      setUser(route.params.item);
    }
  }, []);

  const onPressAdd = () => {
    const { name, country, brand, phoneNumber } = user;
    if (!!name && !!country && !!brand) {
      if (phoneNumberValidator(phoneNumber)) {
        if (!!route.params?.item) {
          dispatch(updateUser(user));
        } else {
          dispatch(addUser({ ...user, id: uuidv4() }));
        }
        navigation.goBack();
      } else {
        Alert.alert('Invalid phone number');
      }
    } else {
      Alert.alert('All fields are required');
    }
  };

  return (
    <ScrollView>
      <KeyboardAvoidingView>
        <TextInput
          title='Name'
          placeholder='Joe Deo'
          onChangeText={(text) => setUser({ ...user, name: text })}
          value={user.name}
        />
        <TextInput
          title='Country'
          placeholder='Country'
          onChangeText={(text) => setUser({ ...user, country: text })}
          value={user.country}
        />
        <TextInput
          title='Favorite Phone Brand'
          placeholder='Your favorite Phone'
          onChangeText={(text) => setUser({ ...user, brand: text })}
          value={user.brand}
        />
        <TextInput
          keyboardType='decimal-pad'
          title='Phone Number'
          placeholder='98******'
          onChangeText={(text) => setUser({ ...user, phoneNumber: text })}
          value={user.phoneNumber}
        />
        <Button
          title={!!route.params?.item ? 'Update User' : 'Add User'}
          onPress={onPressAdd}
        />
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default AddUserScreen;
