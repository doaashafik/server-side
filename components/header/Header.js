import React from "react";
import { PageHeader } from "antd";
import "./Header.module.scss";
import HeaderCart from "../headerCart/HeaderCart";
import HeaderProfile from "../headerProfile/HeaderProfile";

const Header = () => {
  return (
    <PageHeader
      className="site-page-header"
      onBack={() =>  window.history.back() }
      title={"Ecommerce Shopping"}
      extra={[
      <HeaderProfile key="profile" />,
      <HeaderCart key="cart"/>
    ]}
    />
  );
};
export default (Header);
