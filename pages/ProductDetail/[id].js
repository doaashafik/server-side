import React, { Fragment, useState, useEffect } from "react";
import ProductDetailStyles from "./index.module.scss";
import { productDetailsRequest } from "../../network/apis/Requests/Product";
import { AddToCart } from "../../components/addToCart/AddToCart";
import { Notification, open } from "../../components/notification/Notification";
import { useSelector } from "react-redux";
import Head from "next/head";
import { SocialNetwork } from "../../components/SocialNetwork/SocialNetwork";

export async function getStaticPaths() {
  const res = await fetch(`https://fakestoreapi.com/products/`);
  const data = await res.json();
  const paths = data.map((item) => `/ProductDetail/${item.id}`);
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const res = await fetch(`https://fakestoreapi.com/products/${params.id}`);
  const data = await res.json();
  return {
    props: {
      recieved: true,
      product: data,
    },
  };
}

const ProductDetail = ({ recieved, product }) => {
  const url = `https://server-side.vercel.app/ProductDetail/${product.id}`;
  return (
    <Fragment>
      <Head>
        <title>Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="title" content="Products — ProductDetail" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={url} />
        <meta property="og:title" content={product.title} />
        <meta property="og:description" content={product.description} />
        <meta property="og:image" content={product.image} />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={url} />
        <meta property="twitter:title" content={product.title} />
        <meta property="twitter:description" content={product.description} />
        <meta property="twitter:image" content={product.image} />
        <meta name="twitter:site" content="@doaashafik"/>
      </Head>
      {recieved && (
        <div className="product-card-border-less-wrapper">
          <p className="text-center">{product.title}</p>
          <div className={ProductDetailStyles["product-image"]}>
            <img
              className={ProductDetailStyles["image"]}
              src={product.image}
              alt="product"
            />
          </div>
          <div className="mt-2 d-flex justify-content-around">
            <p>{product.category}</p>
            <p>{product.price}</p>
          </div>
          <div className={"mt-2"}>
            <SocialNetwork url={url} />
          </div>
          <p className={"mt-2 text-center"}>{product.description}</p>
        </div>
      )}
    </Fragment>
  );
};
export default ProductDetail;
