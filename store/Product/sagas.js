import { put, call, takeEvery } from "redux-saga/effects";
import {  ALL_PRODUCTS } from "./types";
import { allProductsRequest } from "../../network/apis/Requests/Product";
import { allProductsRecieved, allProductsError } from "./actions";
import { store } from "..";


function* handleAllProducts(query) {
  try {
    console.log(store,'dd')
    const result = yield call(allProductsRequest, query.payload);
    yield put(allProductsRecieved(result.data));
    yield 
  }
  catch {
    yield put(allProductsError());
  }  
}
export function* ProductSagaWatch() {
  yield takeEvery(ALL_PRODUCTS, handleAllProducts);
}