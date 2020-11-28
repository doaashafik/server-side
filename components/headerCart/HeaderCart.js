import React from "react";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { Badge } from "antd";
import { useSelector } from "react-redux";
import "./HeaderCart.module.scss";
const HeaderCart = () => {
  const { count } = useSelector((state) => state.cart);
  return (
      <a href="/Cart">
      <Badge
        className="site-badge-count-109"
        count={count}
        showZero
        style={{ backgroundColor: "#52c41a" }}
      >
        <ShoppingCartOutlined
          style={{
            fontSize: 20,
            verticalAlign: "top",
          }}
        />
      </Badge>
      </a>
  );
};
export default HeaderCart;
