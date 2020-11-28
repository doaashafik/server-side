import { Input } from "antd";

export const InputControl = (props) => {
  const {
    field: { name },
    type,
    placeholder,
    className,
    value,
    form: { setFieldValue },
  } = props;
  return (
    <Input
      name={name}
      className={className}
      value={value}
      type={type}
      placeholder={placeholder}
      onChange={(event) => setFieldValue(name, event.target.value)}
    />
  );
};
