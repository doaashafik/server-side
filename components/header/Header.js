import React, { useContext} from "react";
import { PageHeader } from "antd";
import "./Header.module.scss";
import HeaderCart from "../headerCart/HeaderCart";
import HeaderProfile from "../headerProfile/HeaderProfile";
import Link from "next/link";
import { I18nContext } from 'next-i18next'
import SwitchLanguage from "../switchLanguage/SwitchLanguage";

const Header = () => {
  const { i18n: { language } } = useContext(I18nContext)

  return (
    <PageHeader
      className="site-page-header"
      title={<Link href={`/${language}/ProductList`}>Products</Link>}
      extra={[
      <SwitchLanguage />,
      <HeaderProfile key="profile" />,
      <HeaderCart key="cart"/>
    ]}
    />
  );
};
export default (Header);
