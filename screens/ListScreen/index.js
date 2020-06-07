import React, { useContext, useState } from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  SectionList,
  TouchableHighlight,
  Alert,
} from 'react-native';
import { Text, UserRow, Button, Modal, FilterRow } from '../../components';
import { UserContext } from '../../reducers/userReducer';
import { addUser, ADD_USER } from '../../reducers/userActions';
import useFilterOption from '../../hooks/useFilterOption';
import { ADD_USER_SCREEN } from '../../navigation/routes';
import { deleteUser } from '../../reducers/userActions';

const ListScreen = ({ navigation }) => {
  const { store, dispatch } = useContext(UserContext);
  const filterOption = useFilterOption();
  const [toggleFilterModal, setToggleFilterModal] = useState(false);
  const [filterData, setFilterData] = useState(null);
  const [selectedFilterItem, setSelectedFilterItem] = useState({});

  const renderHeader = () => {
    return (
      <UserRow
        containerStyle={{ backgroundColor: '#d3d3d3' }}
        rowColorViewStyle={{ backgroundColor: 'transparent' }}
        name={'Name'}
        country={'Country'}
        brand={'Favorite Brand'}
        phoneNumber={'Phone Number'}
      />
    );
  };
  const renderUser = ({ item }) => {
    return (
      <UserRow
        name={item.name}
        country={item.country}
        brand={item.brand}
        phoneNumber={item.phoneNumber}
        onPress={() => onPressItem(item)}
      />
    );
  };

  const renderEmptyComonent = () => (
    <Text style={{ textAlign: 'center', marginTop: 20 }}>
      No Data Found! Press + Button to add One
    </Text>
  );

  const onSelectFilterOption = (title, item) => {
    const filterData = store.users.filter(
      (data) => data[title.toLowerCase()] === item
    );
    setSelectedFilterItem({ item, title });
    setFilterData(filterData);
    toggleFilter();
  };

  React.useEffect(() => {
    // if filterOption is Selected and user perform delete action
    if (!!filterData) {
      const filterData = store.users.filter(
        (data) =>
          data[selectedFilterItem.title.toLowerCase()] ===
          selectedFilterItem.item
      );
      setFilterData(filterData);
    }
  }, [store]);

  const renderSectionHeader = ({ section }) => {
    return (
      <View style={styles.headerRowView}>
        <Text style={styles.headerRowText}>{section.title.toUpperCase()}</Text>
      </View>
    );
  };

  const renderFilterOption = ({ item, section: { title } }) => {
    return (
      <FilterRow
        onPress={() => onSelectFilterOption(title, item)}
        item={item}
        selectedFilterItem={selectedFilterItem?.item}
      />
    );
  };

  const toggleFilter = () => {
    setToggleFilterModal(!toggleFilterModal);
  };

  const onPressReset = () => {
    setSelectedFilterItem({});
    setFilterData(null);
    toggleFilter();
  };

  const onPressItem = (item) => {
    Alert.alert(
      'What to do?',
      '',
      [
        {
          text: 'Update',
          onPress: () => navigation.navigate(ADD_USER_SCREEN, { item: item }),
        },
        {
          text: 'Delete',
          onPress: () => dispatch(deleteUser(item.id)),
        },
        { text: 'Cancel', onPress: () => console.log('OK Pressed') },
      ],
      { cancelable: false }
    );
  };

  return (
    <View style={styles.container}>
      <Button title='Filter Option' onPress={toggleFilter} />
      <FlatList
        ListHeaderComponent={renderHeader}
        data={filterData ? filterData : store.users}
        renderItem={renderUser}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={renderEmptyComonent}
      />

      <Modal
        title={'Filter Option'}
        open={toggleFilterModal}
        close={() => toggleFilter()}
        headerRight='Reset'
        onPressHeaderRight={onPressReset}
      >
        <SectionList
          showsVerticalScrollIndicator={false}
          sections={filterOption}
          renderSectionHeader={renderSectionHeader}
          renderItem={renderFilterOption}
          keyExtractor={(item, index) => index}
          SectionSeparatorComponent={() => <View style={styles.separator} />}
        />
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  headerRowView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#d8d8d8',
    paddingBottom: 3,
    paddingRight: 16,
    paddingTop: 10,
  },
  headerRowText: { marginLeft: 23 },
  separator: { marginBottom: 10 },
  filterOptionWrapper: {
    paddingVertical: 8,
  },
});

export default ListScreen;
