import axios from 'axios';
import { ADD_USER } from '../types';

export const userAdd = (value) => ({
  type: ADD_USER,
  payload: value,
});

export const userSignUp = (input) => (dispatch) => {
  axios.post('/api/user/signup', input)
    .then((res) => dispatch(userAdd(res.data)))
    // eslint-disable-next-line no-console
    .catch((err) => console.log('err'));
};

export const userCheck = () => (dispatch) => {
  axios.post('/api/user/check')
    .then((res) => dispatch(userAdd(res.data)))
    // eslint-disable-next-line no-console
    .catch((err) => console.log('err'));
};

export const signInUser = (input) => (dispatch) => {
  axios.post('/api/user/signin', input)
    .then((res) => dispatch(userAdd(res.data)))
    // eslint-disable-next-line no-console
    .catch((err) => console.log('err'));
};

export const logoutUser = () => (dispatch) => {
  axios('/api/user/logout')
    .then((res) => dispatch(userAdd({})))
    // eslint-disable-next-line no-console
    .catch((err) => console.log('err'));
};
