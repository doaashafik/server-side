import React, { Fragment, useEffect } from "react";
import { Badge } from "antd";
import { useDispatch } from "react-redux";
import "./CartProducts.module.scss";
import { DeleteOutlined } from "@ant-design/icons";
import { deleteCartItem } from "../../store/Cart/actions";
import { Notification, open } from "../notification/Notification";
import { AddToCart } from "../addToCart/AddToCart";
export const CartProducts = ({ items }) => {
  const dispatch = useDispatch();
  return (
    <>
      {items.map((item) => {
        const { title, image, id, price } = item;
        return (
          <div key={id + "product"} className="cart-product d-flex">
            <div className="content">
              <p>{title}</p>
              <p>{price}</p>
            </div>

            <div className="product-image">
              <img src={image} alt="product-image" />
            </div>
            <div>
              <AddToCart item={item} notifiy={open} />
              <DeleteOutlined
                onClick={() => {
                  open({
                    slug: "Delete Item",
                    title,
                    message: "Was Deleted Successfully",
                  });
                  dispatch(deleteCartItem(id));
                }}
                className="mt-2 product-icon"
              />
            </div>
          </div>
        );
      })}
    </>
  );
};
