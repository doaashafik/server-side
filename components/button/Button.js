import { Button } from "antd";

const ButtonControl = (props) => {
  const { content, type } = props;
  return (
    <Button {...props} htmlType={type}>
      {content}
    </Button>
  );
};

export default ButtonControl;
