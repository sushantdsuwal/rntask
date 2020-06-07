import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const color = {
  focused: '#498BE7',
  blur: '#696969',
};

const InputText = ({ title, placeholder, ...attributes }) => {
  const [isFocus, setIsFocus] = useState();
  return (
    <View style={styles.containerStyle}>
      <Text style={styles.labelStyle}>{title}</Text>
      <View
        style={[
          styles.textInputWrapper,
          { borderColor: isFocus ? color.focused : color.blur },
        ]}
      >
        <TextInput
          autoCapitalize={'none'}
          autoCorrect={false}
          placeholder={placeholder}
          placeholderTextColor='red'
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          placeholderTextColor={isFocus ? color.focused : color.blur}
          {...attributes}
        />
      </View>
    </View>
  );
};

InputText.propTypes = {
  title: PropTypes.string,
  placeholder: PropTypes.string,
};

const styles = StyleSheet.create({
  containerStyle: { padding: 10 },
  textInputWrapper: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
  },
  labelStyle: { marginBottom: 3, fontSize: 16 },
});

export default InputText;
