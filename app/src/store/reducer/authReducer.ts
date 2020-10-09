import {
  ActionProps,
  AUTH_ERROR,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  LOG_LOADING,
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  REG_LOADING,
  USER_LOADED,
  USER_LOADING,
} from '../actions/types';

const intialState = {
  regLoading: false,
  logLoading: false,
  isAuthenticated: null,
  user: null,
};

export default (state = intialState, {payload, type}: ActionProps) => {
  switch (type) {
    case REG_LOADING:
      return {
        ...state,
        regLoading: true,
      };
    case LOG_LOADING:
      return {
        ...state,
        logLoading: true,
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        regLoading: false,
        isAuthenticated: true,
      };
    case LOGOUT_SUCCESS:
    case AUTH_ERROR:
    case REGISTER_FAIL:
    case LOGIN_FAIL:
      return {
        ...state,
        regLoading: false,
        user: null,
        isAuthenticated: null,
        logLoading: false,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        logLoading: false,
      };
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        user: payload,
        logLoading: false,
      };
    default:
      return state;
  }
};
