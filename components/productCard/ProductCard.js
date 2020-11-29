import React from "react";
import { Card } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import "./ProductCard.module.scss";
import Link from "next/link";

const ProductCard = ({ product, addToCart }) => {
  const { price, image, category, title, id } = product;
  return (
    <Card
      cover={
         <Link href={`/ProductDetail/${id}`} className="product-image">
          <img src={image} alt="product-image" />
        </Link>
      }
      bordered={true}
      style={{ width: 300, margin: "0 5px 5px 0" }}
    >
      <p className="d-flex justify-content-between">
        <strong>{title}</strong>
        <ShoppingCartOutlined
          onClick={addToCart}
          style={{ fontSize: "25px", color: "green" }}
        />
      </p>
      <p className="d-flex justify-content-between">
        <strong>{category}</strong>
        <strong>{price}</strong>
      </p>
    </Card>
  );
};
export default ProductCard;
