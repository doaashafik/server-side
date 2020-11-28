import { initializeStore } from '../../store';
import { allProductsRecieved} from '../../store/Product/actions';
import {allProductsRequest} from '../../network/apis/Requests/Product'
export default async function handler(req, res) {
  const store = initializeStore();
  const { data } = await allProductsRequest()
  await store.dispatch(allProductsRecieved(data))
  
  res.status(200).json(store.getState().products);
}
