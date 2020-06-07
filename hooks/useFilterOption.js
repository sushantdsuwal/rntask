import React from 'react';
import { UserContext } from '../reducers/userReducer';

const userFilterOption = () => {
  const { store } = React.useContext(UserContext);
  const [filterData, setFilterData] = React.useState([]);

  React.useEffect(() => {
    const country = store.users
      .map((item) => item.country)
      .reduce(
        (unique, item) => (unique.includes(item) ? unique : [...unique, item]),
        []
      );
    const brand = store.users
      .map((item) => item.brand)
      .reduce(
        (unique, item) => (unique.includes(item) ? unique : [...unique, item]),
        []
      );
    setFilterData([
      { title: 'Country', data: country },
      { title: 'Brand', data: brand },
    ]);
  }, [store]);

  return filterData;
};

export default userFilterOption;
