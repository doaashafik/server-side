import { createStore, applyMiddleware } from "redux";
import RootReducer from "./rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./rootSaga";
import createWebStorage from "redux-persist/lib/storage/createWebStorage";
import { persistStore, persistReducer } from "redux-persist";
export let store, persistor;

const setStorewithInitState = (preloadedState) => {
  
  /* redux-saga setup */
  const saga = createSagaMiddleware();
  const composedEnhancer = composeWithDevTools(applyMiddleware(saga));
    store = createStore(RootReducer, preloadedState, composedEnhancer);
    saga.run(rootSaga);
    return store;
};

export const initializeStore = (preloadedState) => {
 if(!store) {
  setStorewithInitState(preloadedState);
 }
 console.log(store.getState())
  return store;
};
