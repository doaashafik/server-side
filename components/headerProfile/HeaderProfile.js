import { Menu } from "antd";
import React from "react";
import { Dropdown, Button } from "antd";
import {UserOutlined   } from "@ant-design/icons";
const ProfileMenu = (
    <Menu>
      <Menu.Item>
        <a href="/profile">Profile</a>
        <a href="/sign-out">SignOut</a>
      </Menu.Item>
    </Menu>
  );
const ProfileDropdownMenu = () => {
  return (
    <Dropdown key="more" overlay={ProfileMenu}>
      <Button
        style={{
          border: "none",
          padding: 0,
        }}
      >
        <UserOutlined  
          style={{
            fontSize: 20,
            verticalAlign: "top",
          }}
        />
      </Button>
    </Dropdown>
  );
};
export default ProfileDropdownMenu;
