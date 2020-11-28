import { ALL_PRODUCTS,ERROR_REQUESTS, ALL_PRODUCTS_RECIEVE } from "./types";

export const allProductsRequest = (payload) => ({
  type: ALL_PRODUCTS,
  payload,
});
export const allProductsRecieved = (payload) => ({
  type: ALL_PRODUCTS_RECIEVE,
  payload,
});

export const allProductsError = () => ({
  type: ERROR_REQUESTS
});
