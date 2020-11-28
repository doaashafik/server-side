import React from "react";
import { LoadingOutlined } from "@ant-design/icons";
import './Loading.module.scss'
const Loading = () => {
  return (
    <div className="loading-content">
      <div className="loading-icon">
        <LoadingOutlined />
      </div>
    </div>
  );
};
export default Loading;
