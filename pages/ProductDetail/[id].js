import React, { Fragment, useState, useEffect } from "react";
import "./index.module.scss";
import { productDetailsRequest } from "../../network/apis/Requests/Product";
import { useParams } from "react-router-dom";
import { AddToCart } from "../../components/addToCart/AddToCart";
import { Notification, open } from "../../components/notification/Notification";
import { useSelector } from "react-redux";

export async function getServerSideProps() {
  //  const { id } = useParams();
  const { data } = await productDetailsRequest(1);
  console.log(data)
  return {
    props: {
      recieved: true,
      product: data
    },
  };
}

const ProductDetail = ({ recieved, product }) => {
  const { items } = useSelector((state) => state.cart);

  const item = product ? items.filter((i) => i.id == product.id) : {};
  return (
    <Fragment>
      {recieved && (
        <div className="product-card-border-less-wrapper">
          <p>{product.title}</p>
          <div className="product-image">
            <img src={product.image} alt="product" />
          </div>
          <div className=" mt-2 d-flex justify-content-around">
            <p>{product.category}</p>
            <p>{product.price}</p>
          </div>
          <AddToCart
            item={{ ...product, count: item.length > 0 ? item[0].count : 0 }}
            notifiy={() => {
              open({
                slug: "Delete Item",
                title: product.title,
                message: "Was Deleted Successfully",
              });
            }}
          />
          <p className="mt-2">{product.description}</p>
        </div>
      )}
    </Fragment>
  );
};
export default ProductDetail;
