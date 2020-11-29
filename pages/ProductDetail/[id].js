import React, { Fragment, useState, useEffect } from "react";
import ProductDetailStyles from  "./index.module.scss";
import { productDetailsRequest } from "../../network/apis/Requests/Product";
import { AddToCart } from "../../components/addToCart/AddToCart";
import { Notification, open } from "../../components/notification/Notification";
import { useSelector } from "react-redux";
import { SocialNetwork } from "../../components/SocialNetwork/SocialNetwork";

// This function gets called at build time
export async function getStaticPaths() {
  const res = await fetch(`https://fakestoreapi.com/products/`)
  const data = await res.json()

  // Get the paths we want to pre-render based on posts
  const paths = data.map((item) => `/ProductDetail/${item.id}`)

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
   const res = await fetch(`https://fakestoreapi.com/products/${params.id}`)
   const data = await res.json()
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
            <SocialNetwork url={`https://server-side.vercel.app/ProductDetail/${product.id}`}/>
          </div>
          <p className={'mt-2 text-center'}>{product.description}</p>
        </div>
      )}
    </Fragment>
  );
};
export default ProductDetail;
