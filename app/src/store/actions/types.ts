//** Amazon Auth Types */
export const USER_LOADING = 'USER_LOADING';
export const USER_LOADED = 'USER_LOADED';
export const AUTH_ERROR = 'AUTH_ERROR';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const REG_LOADING = 'REG_LOADING';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAIL = 'REGISTER_FAIL';
export const LOG_LOADING = 'LOG_LOADING';

//** Amazon Product Types */
export const SENDING_PRODUCT = 'SENDING_PRODUCT';
export const LOADING_PRODUCTS = 'LOADING_PROUDCTS';
export const SENT_PRODUCT = 'SENT_PRODUCT';
export const LOADED_PRODUCTS = 'LOADED_PRODUCTS';
export const DELETE_PRODUCT = 'DELETE_PRODUCT';

//** Amazon Cart Types */
export const ADD_TO_CART = 'ADD_TO_CART';
export const CHECK_OUT = 'CHECK_OUT';

//** Amazon Error Types */
export const GET_ERRORS = 'GET_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

//** Amazon Dispatch Props */
export type AllDispatchProp = (arg0: {
  type: string;
  payload: any | void;
}) => void;

//** Amazon Action Props */
export type ActionProps = {
  type: any;
  payload: any | void;
};

//** Amazon URI */
export const API_URI = `http://192.168.254.243:5000`;
