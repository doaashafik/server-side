import React, { Fragment } from "react";
import { CartProducts } from "../../components/cartProducts/CartProducts";
import { useSelector } from "react-redux";
import  * as CartStyles from './index.module.scss'
const Cart = () => {
    const { items } = useSelector((state) => state.cart);
  return (
    <div className="car-container">
        <h1 className="mt-2 cart-header"> Shopping Cart</h1>
      {items.length > 0 ? (
        <Fragment>
          <CartProducts items={items}/>
          <a href={"/Order"} className="product-checkout">
            Review Order
          </a>
        </Fragment>
      ) : (
        <p className="text-center">Start Shopping Now!</p>
      )}
    </div>
  );
};
export default Cart;
