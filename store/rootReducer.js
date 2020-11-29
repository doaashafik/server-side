import { combineReducers } from 'redux'
import { productReducer } from './Product/reducer';
import { loadingReducer } from './Loading/reducer'
import { cartReducer } from './Cart/reducer';
export default combineReducers({
    products: productReducer,
    isLoading: loadingReducer,
    cart: cartReducer,
})