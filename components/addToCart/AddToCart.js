import React from "react";
import { useDispatch } from "react-redux";
import {
  IncreaseCartItem,
  DecreaseCartItem,
  addItemToCart,
} from "../../store/Cart/actions";
import { MinusSquareOutlined, PlusSquareOutlined } from "@ant-design/icons";
import { Badge } from "antd";
import "./AddToCart.module.scss";
export const AddToCart = ({ notifiy, item }) => {
  const dispatch = useDispatch();
  const { title, id, count } = item;
  return (
    <div className="add-to-cart">
      <span
        onClick={() => {
          notifiy({slug: "Add Item", title, message: "Added To Cart" });
          if (count == 0) dispatch(addItemToCart(item));
          else {
            dispatch(IncreaseCartItem(id));
          }
        }}
      >
        <PlusSquareOutlined className="product-icon" />{" "}
      </span>
      <Badge
        className="site-badge-count-109"
        count={count}
        showZero
        style={{ backgroundColor: "#52c41a" }}
      />{" "}
      <span
        onClick={() => {
          notifiy({ slug: "Remove Item", title, message: "Removed From Cart" });
          dispatch(DecreaseCartItem(id));
        }}
      >
        <MinusSquareOutlined className="product-icon" />
      </span>
    </div>
  );
};
