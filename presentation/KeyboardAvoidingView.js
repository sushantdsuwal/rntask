import React, { useState } from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';

// const keyboardVerticalOffset = Platform.OS === 'ios' ? 40 : 0;

const KeyBoardView = ({ children }) => {
  return (
    <KeyboardAvoidingView
      behavior='padding'
      keyboardVerticalOffset={Platform.OS === 'ios' ? 40 : 0}
    >
      {children}
    </KeyboardAvoidingView>
  );
};

export default KeyBoardView;
