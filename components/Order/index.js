import React, { useEffect, Fragment } from "react";
import OrderForm from "../../components/orderForm/OrderForm";
import { OrderProduct } from "../../components/orderProducts/OrderProducts";
import { Row, Col } from "antd";
import { submitUserOrder, getTotal } from "../../store/Cart/actions";
import { useDispatch, useSelector } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import './index.module.scss'
const Order = ({ history }) => {
  const dispatch = useDispatch();
  const { items, total } = useSelector((state) => state.cart);

  useEffect(()=> {
   dispatch(getTotal())
 },[total])


  const submitForm = (values) => {
    dispatch(submitUserOrder(values));
  };

  const redirectToMainPage= () => {
    setTimeout(()=>{history.push('/products');}, 3000);
  }

  return (
    <Row>
      {items.length > 0 ? (
        <Fragment>
          <Col className="order-now" span={10}>
            <h3 className="mt-2">Order Now</h3>
            <OrderForm submitForm={submitForm} />
          </Col>
          <Col span={10} className="order-products">
              <h3 className="mt-2">Products</h3>
            {items.map((product, id) => (
              <OrderProduct key={id} product={product} />))}
              <strong>Total: {total}</strong>
          </Col>
        </Fragment>
      ) : (
        <Col className="mt-2 submit-message" span={10} >
          <h3 className="">Ok it's Done!,Back to Shopping Again!
          {" "} {" "}
          <a href="/shopping-cart/#/products">Products</a> </h3> 
          {redirectToMainPage()}
        </Col>
      )}
    </Row>
  );
};

export default withRouter(Order);
