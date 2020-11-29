import React, { useContext} from "react";
import { Card } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import "./ProductCard.module.scss";
import Link from "next/link";
import { I18nContext } from 'next-i18next'

const ProductCard = ({ product, addToCart }) => {
  const { price, image, category, title, id } = product;
  const { i18n: { language } } = useContext(I18nContext)

  return (
    <Card
      cover={
         <Link href={`/${language}/ProductDetail/${id}`} className="product-image">
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
