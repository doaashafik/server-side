import * as actions from "./types";


export const productReducer = (state = [], action) => {
  switch (action.type) {
    case actions.ALL_PRODUCTS_RECIEVE:
    const value = action.payload ? action.payload : []
    return [ ...state,  ...value ];
    default:
      return state;
  }
};
