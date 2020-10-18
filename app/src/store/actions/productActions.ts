import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';
import {returnErrors} from './dist/errorActions';
import {ADD_TO_CART, CHECK_OUT} from './dist/types';
import {
  AllDispatchProp,
  API_URI,
  CLEAR_ERRORS,
  DELETE_PRODUCT,
  LOADED_PRODUCTS,
  LOADING_PRODUCTS,
  SENT_PRODUCT,
} from './types';

export const addProduct = ({
  title,
  price,
  imageUrl,
  desc,
}: {
  title: string;
  price: string;
  imageUrl: string;
  desc: string;
}) => async (dispatch: AllDispatchProp, getState: any) => {
  const auth = getState().auth;
  const data = JSON.stringify({title, price, imageUrl, desc, user: auth.user});
  const token = AsyncStorage.getItem('@user_token');

  //* Store a product
  axios({
    method: 'POST',
    url: `${API_URI}/api/product`,
    data,
    headers: {
      'content-type': 'application/json',
      'x-amazon-token': token,
    },
  })
    .then((res) => {
      dispatch({type: CLEAR_ERRORS, payload: null});
      dispatch({type: SENT_PRODUCT, payload: res.data._doc});
    })
    .catch((err) => {
      dispatch(
        returnErrors(
          err.response.data,
          err.response.status,
          'PRODUCT_POST_FAIL',
        ),
      );
    });
};

//* Load Amazon Products *//
export const loadProducts = () => async (dispatch: AllDispatchProp) => {
  dispatch({type: LOADING_PRODUCTS, payload: null});
  const token = await AsyncStorage.getItem('@user_token');

  //* Load products from url *//
  axios({
    method: 'GET',
    url: `${API_URI}/api/product`,
    headers: {
      'content-type': 'application/json',
      'x-amazon-token': token,
    },
  })
    .then((res) => {
      dispatch({type: LOADED_PRODUCTS, payload: res.data});
    })
    .catch((err) => {
      dispatch(
        returnErrors(
          err.response.data,
          err.response.status,
          'LOAD_PRODUCT_FAIL',
        ),
      );
    });
};

export const deleteProduct = (_id: string) => async (
  dispatch: AllDispatchProp,
) => {
  const data = JSON.stringify({_id});
  const token = await AsyncStorage.getItem('@user_token');

  axios({
    method: 'DELETE',
    url: `${API_URI}/api/product`,
    data,
    headers: {
      'content-type': 'application/json',
      'x-amazon-token': token,
    },
  })
    .then((res) => {
      dispatch({type: DELETE_PRODUCT, payload: res.data._id});
    })
    .catch((err) => {
      dispatch(
        returnErrors(
          err.response.data,
          err.response.status,
          'DELETE_PRODUCT_FAIL',
        ),
      );
    });
};

//* Amazon add to cart *//
export const addToCart = (_id: string) => async (
  dispatch: AllDispatchProp,
  getState: any,
) => {
  const {products, cartProducts} = getState().product;
  const cartProduct = cartProducts.filter((p: any) => p._id === _id);
  const isInCart = cartProduct.length > 0;
  const data = JSON.stringify({_id});
  const token = await AsyncStorage.getItem('@user_token');

  if (!isInCart) {
    axios({
      method: 'PUT',
      url: `${API_URI}/api/product`,
      headers: {
        'content-type': 'application/json',
        'x-amazon-token': token,
      },
      data,
    })
      .then((res) => {
        dispatch({type: ADD_TO_CART, payload: res.data});
      })
      .catch((err) => {
        dispatch(
          returnErrors(
            err.response.data,
            err.response.status,
            'ADD_TO_CART_FAIL',
          ),
        );
      });
  }
};

export const productCheckOut = () => async (dispatch: AllDispatchProp) => {
  const token = await AsyncStorage.getItem('@user_token');

  axios({
    method: 'GET',
    url: `${API_URI}/api/product`,
    headers: {
      'content-type': 'application/json',
      'x-amazon-token': token,
    },
  })
    .then((res) => {
      dispatch({type: CHECK_OUT, payload: res.data});
    })
    .catch((err) => {
      dispatch(
        returnErrors(err.response.data, err.response.status, 'CHECKOUT_FAIL'),
      );
    });
};

export const clearCart = () => async (dispatch: AllDispatchProp) => {
  const token = await AsyncStorage.getItem('@user_token');
  axios({
    method: 'PUT',
    url: `${API_URI}/api/product/clear`,
    headers: {
      'x-amazon-token': token,
    },
  })
    .then(() => {
      return loadProducts();
    })
    .catch(() => {});
};
