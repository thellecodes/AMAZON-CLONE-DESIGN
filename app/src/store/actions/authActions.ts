import {
  AllDispatchProp,
  API_URI,
  AUTH_ERROR,
  CLEAR_ERRORS,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  LOG_LOADING,
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  REG_LOADING,
  USER_LOADED,
} from './types';
import axios from 'axios';
import {returnErrors} from './errorActions';
import AsyncStorage from '@react-native-community/async-storage';

//* Register Action*//
export const register = ({
  name,
  email,
  password,
}: {
  name: string;
  email: string;
  password: string;
}) => async (dispatch: AllDispatchProp) => {
  dispatch({type: REG_LOADING, payload: null});

  const data = JSON.stringify({name, email, password});

  await axios({
    method: 'POST',
    url: `${API_URI}/api/users`,
    data,
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((res) => {
      dispatch({type: CLEAR_ERRORS, payload: null});
      dispatch({type: REGISTER_SUCCESS, payload: res.data});
    })
    .catch((err) => {
      dispatch({type: REGISTER_FAIL, payload: null});
      dispatch(
        returnErrors(err.response.data, err.response.status, 'REGISTER_FAIL'),
      );
    });
};

//* login action *//
export const login = ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => async (dispatch: AllDispatchProp, getState: any) => {
  dispatch({type: LOG_LOADING, payload: null});

  const data = JSON.stringify({email, password});

  await axios({
    method: 'POST',
    url: `${API_URI}/api/login`,
    data,
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((res) => {
      dispatch({type: CLEAR_ERRORS, payload: null});
      dispatch({type: LOGIN_SUCCESS, payload: res.data});
    })
    .catch((err) => {
      dispatch({type: LOGIN_FAIL, payload: null});
      dispatch(
        returnErrors(err.response.data, err.response.status, 'LOGIN_FAIL'),
      );
    });
};

export const loadUser = () => async (dispatch: AllDispatchProp) => {
  dispatch({type: LOG_LOADING, payload: null});

  const token = await AsyncStorage.getItem('@user_token');

  axios({
    method: 'GET',
    url: `${API_URI}/api/login/user`,
    headers: {
      'content-type': 'application/json',
      'x-amazon-token': token,
    },
  })
    .then((res) => {
      dispatch({type: USER_LOADED, payload: res.data});
    })
    .catch((err) => {
      dispatch(returnErrors(err.response.data, '', 'LOAD_FAIL'));
      dispatch({
        type: AUTH_ERROR,
        payload: null,
      });
    });
};

//* Handle logout *//
export const logout = () => async (dispatch: AllDispatchProp) => {
  await AsyncStorage.removeItem('@user_token');
  return dispatch({
    type: LOGOUT_SUCCESS,
    payload: null,
  });
};
