import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import Loading from "../loading/Loading";
import Header from '../header/Header'
const Template = (props) => {
  return (
    <Fragment>
      <Header />
      {props.children}
    </Fragment>
  );
};

export default Template;
