import { Select } from "antd";
import withFormLabel from "components/UI/Forms/withFormLabel";

const SSelect = ({
  data,
  fieldNames = { label: "test2", value: "test1" },
  hasError,
  children,
  options,
  ...rest
}) => {
  console.log("options")
  return (
    <Select
      style={{ width: 120 }}
      fieldNames={fieldNames}
      options={!children && options}
      allowClear
      className={hasError ? "ant-select-status-error" : ""}
      {...rest}
    >
      {children}
    </Select>
  );
};

export default withFormLabel(SSelect);
