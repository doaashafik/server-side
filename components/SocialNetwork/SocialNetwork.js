import React from "react";
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  FacebookIcon,
  LinkedinIcon,
  TwitterIcon,
} from "react-share";
import { Row, Col } from "antd";
export const SocialNetwork = ({ url }) => {
  return (
    <Row align="center">
      <Col span={1}>
        <FacebookShareButton url={url}>
            <FacebookIcon size="32" />
        </FacebookShareButton>
      </Col>
      <Col span={1}>
        <LinkedinShareButton url={url}>
            <LinkedinIcon  size="32"/>
        </LinkedinShareButton>
      </Col>
      <Col span={1}>
        <TwitterShareButton  url={url}>
            <TwitterIcon size="32"/>
        </TwitterShareButton>
      </Col>
    </Row>
  );
};
