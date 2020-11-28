import { createStore, applyMiddleware } from "redux";
import RootReducer from "./rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./rootSaga";
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";
export let store, persistor;

const setStorewithInitState = (preloadedState) => {
  console.log
  const persistConfig = {
    key: "root",
    storage,
    whiteList: ["products", "cart", 'init'],
    blacklist: ["isLoading"],
  };
  /* redux-saga setup */
  const saga = createSagaMiddleware();
  const composedEnhancer = composeWithDevTools(applyMiddleware(saga));

  if (typeof window == "undefined") {
    store = createStore(RootReducer, preloadedState, composedEnhancer);
  } else {
     /* handle persist-redux */
    const persistedReducer = persistReducer(persistConfig, RootReducer);
    store = createStore(persistedReducer, preloadedState, composedEnhancer);
    persistor = persistStore(store);
  }
    saga.run(rootSaga);
    return store;
};

export const initializeStore = (preloadedState) => {
  if(!store) {
     setStorewithInitState(preloadedState);
   }
   setStorewithInitState({
    ...preloadedState,
    ...store.getState(),
 })
  return store;
};
