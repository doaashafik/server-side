import { Instance } from '../index'
export const allProductsRequest = async () => Instance.get('/products');
export const productDetailsRequest = async (id) => Instance.get(`/products/${id}`);
