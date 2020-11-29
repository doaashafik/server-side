import React from "react";
import { PageHeader } from "antd";
import "./Header.module.scss";
import HeaderCart from "../headerCart/HeaderCart";
import HeaderProfile from "../headerProfile/HeaderProfile";
import Link from "next/link";

const Header = () => {
  return (
    <PageHeader
      className="site-page-header"
      title={<Link href="/ProductList">Products</Link>}
      extra={[
      <HeaderProfile key="profile" />,
      <HeaderCart key="cart"/>
    ]}
    />
  );
};
export default (Header);
