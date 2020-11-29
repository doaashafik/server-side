import * as actions from "./types";


export const productReducer = (state = [], action) => {
  switch (action.type) {
    case actions.ALL_PRODUCTS_RECIEVE:
    return [...state, ...action.payload];
    default:
      return state;
  }
};
