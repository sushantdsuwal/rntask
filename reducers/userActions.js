export const ADD_USER = 'ADD_USER';
export const DELETE_USER = 'DELETE_USER';
export const UPDATE_USER = 'UPDATE_USER';

export const addUser = (payload) => ({
  type: ADD_USER,
  payload: payload,
});

export const updateUser = (payload) => ({
  type: UPDATE_USER,
  payload: payload,
});

export const deleteUser = (id) => ({
  type: DELETE_USER,
  payload: id,
});
