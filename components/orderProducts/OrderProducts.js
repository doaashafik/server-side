import React, { Component, useEffect } from "react";
import './OrderProducts.module.scss'
export const OrderProduct = ({ product }) => {
  const { count, title, price } = product;
  return (
    <div className="order-product">
      <p><strong>name: </strong> {title}</p>
      <p><strong>Quantity:</strong> {count}</p>
      <p><strong>price Per Item:</strong> {price}</p>
    </div>
  );
};
