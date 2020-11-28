const { IS_LOADING } = require("./types");

const INIT_STATE =  false;

export const loadingReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case IS_LOADING:
      return state =  action.payload
    default:
      return state;
  }
};
