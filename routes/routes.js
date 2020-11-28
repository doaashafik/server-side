import React, { Suspense } from "react";
import {  HashRouter as Router, Switch, Redirect } from "react-router-dom";
import { browserHistory } from "./history";
import Loading from "../components/loading/Loading";
import PrivateRoute from "./PrivateRoute";
import { ProductDetail, ProductList, Order, Cart } from '../utils/LazyLoad'

export default function Routes({ children }) {
  return (
    <Router basename="/" history={browserHistory}>
      { children }
      <Suspense fallback={<Loading />}>
        <Switch>
          <PrivateRoute exact  path="/products" component={ProductList} />
          <PrivateRoute exact path="/products/:id" component={ProductDetail} />
          <PrivateRoute exact path="/order" component={Order} />
          <PrivateRoute exact path="/cart" component={Cart} />
          <Redirect from="/" to="/products" />
        </Switch>
      </Suspense>
    </Router>
  );
}
