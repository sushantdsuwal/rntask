export const uuidv4 = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c == 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};

export const phoneNumberValidator = (text) => {
  var reg = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  if (reg.test(text.trim())) {
    return true;
  } else {
    return false;
  }
};

export const filterOption = (data) => {
  const country = data
    .map((item) => item.country)
    .reduce(
      (unique, item) => (unique.includes(item) ? unique : [...unique, item]),
      []
    );
  const brand = data
    .map((item) => item.brand)
    .reduce(
      (unique, item) => (unique.includes(item) ? unique : [...unique, item]),
      []
    );
  return [
    { title: 'Country', data: country },
    { title: 'Brand', data: brand },
  ];
};
