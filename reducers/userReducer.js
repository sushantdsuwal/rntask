import React from 'react';
import { ADD_USER, UPDATE_USER, DELETE_USER } from './userActions';

export const initialUser = {
  users: [
    {
      country: 'Nepal',
      brand: 'samsung',
      id: '8b93acd6-fd01-45b9-b0e6-19e4bf3be752',
      name: 'Joe deo',
      phoneNumber: '9810201010',
    },
    {
      country: 'Nepal',
      brand: 'one plus',
      id: '8b93acd6-fd01-45b9-b0e6-19e4bd3be752',
      name: 'Jack',
      phoneNumber: '9810294819',
    },
    {
      country: 'England',
      brand: 'Iphone',
      id: '8b93acd6-fd01-45b9-b0e6-19e4bd3be751',
      name: 'Jhon',
      phoneNumber: '9102901923',
    },
    {
      country: 'USA',
      brand: 'Iphone',
      id: 'eb4d523a-6813-421c-b8a8-ed7203ab4799',
      name: 'Tony ',
      phoneNumber: '9810291029',
    },
    {
      country: 'USA',
      brand: 'Samsung',
      id: '6a14f4f7-f11a-4ac6-a6d0-0fa48c280215',
      name: 'Super Man',
      phoneNumber: '9810291929',
    },
    {
      country: 'Netherland',
      brand: 'MI',
      id: 'a1f05be2-3cc4-481d-bba6-5c34528ac9cf',
      name: 'Bat Man',
      phoneNumber: '9111111192',
    },
    {
      country: 'Japan',
      brand: 'one plus',
      id: '4cd3c6a5-edfa-4319-b883-dfc0f1cff0dc',
      name: 'Luffy',
      phoneNumber: '5010201291',
    },
    {
      country: 'Japan',
      brand: 'MI',
      id: '7e31685d-8fe0-44e2-b282-16eddb76ab07',
      name: 'Roronoa Zero',
      phoneNumber: '9810291029',
    },
    {
      country: 'Brazil',
      brand: 'Sony',
      id: '0127031f-2c45-4d8b-b87e-5a7f02472967',
      name: 'Sanji',
      phoneNumber: '9810292010',
    },
  ],
};

const updateUser = (action, state) => {
  return {
    ...state,
    users: state.users.map((item) =>
      item.id === action.payload.id ? action.payload : item
    ),
  };
};

const deleteUser = (action, state) => {
  return {
    ...state,
    users: state.users.filter((e) => e.id !== action.payload),
  };
};

export const userReducer = (state, action) => {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    case UPDATE_USER:
      return updateUser(action, state);
    case DELETE_USER:
      return deleteUser(action, state);
    default:
      return state;
  }
};

export const UserContext = React.createContext();
