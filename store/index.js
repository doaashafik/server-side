import { createStore, applyMiddleware } from "redux";
import RootReducer from "./rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./rootSaga";
export let store;

const setStorewithInitState = (preloadedState) => {
  

  /* redux-saga setup */
  //const saga = createSagaMiddleware();
  //const composedEnhancer = composeWithDevTools(applyMiddleware(saga));
    store = createStore(RootReducer, preloadedState, composeWithDevTools());
    //saga.run(rootSaga);
    return store;
};

export const initializeStore = (preloadedState) => {
 if(!store) {
  setStorewithInitState(preloadedState);
 }
  return store;
};
