import React, { Fragment, useState, useEffect } from "react";
import ProductDetailStyles from  "./index.module.scss";
import { productDetailsRequest } from "../../network/apis/Requests/Product";
import { AddToCart } from "../../components/addToCart/AddToCart";
import { Notification, open } from "../../components/notification/Notification";
import { useSelector } from "react-redux";
import { SocialNetwork } from "../../components/SocialNetwork/SocialNetwork";

export async function getStaticProps(props) {
   const id = props.params.id;
  const { data } = await productDetailsRequest(id);
  return {
    props: {
      recieved: true,
      product: data
    },
  };
}

const ProductDetail = ({ recieved, product }) => {
  return (
    <Fragment>
      {recieved && (
        <div className="product-card-border-less-wrapper">
          <p className="text-center">{product.title}</p>
          <div className={ProductDetailStyles["product-image"]}>
            <img className={ProductDetailStyles["image"]} 
                 src={product.image} alt="product" />
          </div>
          <div className="mt-2 d-flex justify-content-around">
            <p>{product.category}</p>
            <p>{product.price}</p>
          </div>
          <div className={'mt-2'}>
            <SocialNetwork url={`/ProductDetail/${product.id}`}/>
          </div>
          <p className={'mt-2 text-center'}>{product.description}</p>
        </div>
      )}
    </Fragment>
  );
};
export default ProductDetail;
