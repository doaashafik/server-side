import * as actions from "./types";
import {
  totalPricePerItem,
  minusItem,
  getCount,
  addItem,
  plusItem,
} from "./reducerUtils";
const INIT_STATE = { items: [], count: 0 };

export const cartReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case actions.ADD_TO_CART:
      const item = { ...action.payload };
      let res = addItem([...state.items], item);
      return {
        ...state,
        items: res,
        count: getCount([...res]),
      };

    case actions.DELETE_ITEM:
      let res_1 = state.items.filter((item) => item.id !== action.payload);
      return {
        ...state,
        items: res_1,
        count: getCount([...res_1]),
      };

    case actions.DECREASE_CART_ITEM:
      let res_2 = state.items.map((item) => {
        if (item.id === action.payload) minusItem(item);
        return item;
      }).filter(item => item.count > 0)
      return {
        ...state,
        items: res_2,
        count: getCount([...res_2]),
      };

    case actions.INCREASE_CART_ITEM:
      let res_3 = state.items.map((item) => {
        if (item.id === action.payload) plusItem(item);
        return item;
      });
      return {
        ...state,
        items: res_3,
        count: getCount([...res_3]),
      };

    case actions.TOTAL_PRICE:
      const items = state.items.map(totalPricePerItem);
      const itemsAfterTotal = items.map((item) => item.total);
      const total =
        itemsAfterTotal.length > 0
          ? itemsAfterTotal.reduce((a, b) => a + b)
          : 0;
      return { ...state, items, total };

    case actions.SUBMIT_ORDER:
      return { ...state, items: [], order: action.payload, count: 0 };
    default:
      return state;
  }
};
