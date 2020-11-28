import * as types from "./types";

export const addItemToCart = (payload) => ({
  type: types.ADD_TO_CART,
  payload,
});
export const deleteCartItem = (payload) => ({
  type: types.DELETE_ITEM,
  payload,
});

export const IncreaseCartItem = (payload) => ({
  type: types.INCREASE_CART_ITEM,
  payload,
});
export const DecreaseCartItem = (payload) => ({
  type: types.DECREASE_CART_ITEM,
  payload,
});
export const submitUserOrder = (payload) => ({
  type: types.SUBMIT_ORDER,
  payload
});

export const getTotal = () => ({
  type: types.TOTAL_PRICE
});
