import { all } from 'redux-saga/effects'
import { ProductSagaWatch } from './Product/sagas'

export default function* rootSaga() {
    yield all([
      ProductSagaWatch(),
    ])
  }