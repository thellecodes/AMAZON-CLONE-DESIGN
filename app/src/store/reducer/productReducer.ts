import {
  ADD_TO_CART,
  CHECK_OUT,
  DELETE_PRODUCT,
  LOADED_PRODUCTS,
  LOADING_PRODUCTS,
  SENDING_PRODUCT,
  SENT_PRODUCT,
} from '../actions/types';

const intialState = {
  sending: false,
  loading: true,
  products: [],
  product: null,
  cartProducts: [],
};

export default (state = intialState, {payload, type}: any) => {
  switch (type) {
    case SENDING_PRODUCT:
      return {
        ...state,
        sending: true,
      };
    case LOADING_PRODUCTS:
      return {
        ...state,
        loading: false,
      };
    case SENT_PRODUCT:
      return {
        ...state,
        sending: false,
        products: [payload, ...state.products],
        payload: payload,
      };
    case LOADED_PRODUCTS:
      return {
        ...state,
        products: payload,
        loading: false,
      };
    case DELETE_PRODUCT:
      return {
        ...state,
        products: state.products.filter((p: any) => p._id !== payload),
      };
    case ADD_TO_CART:
      const updatedCart = state.cartProducts.filter(
        (p: any) => p._id !== payload._id,
      );
      const updatedProducts = state.cartProducts.filter(
        (p: any) => p._id !== payload._id,
      );
      return {
        ...state,
        cartProducts: [payload, ...updatedCart],
        products: [payload, ...updatedProducts],
      };
    case CHECK_OUT:
      return {
        ...state,
        cartProducts: [],
        products: payload,
      };
    default:
      return state;
  }
};
