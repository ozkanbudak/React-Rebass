import React from "react";
import { Input } from "antd";
import withFormLabel from "components/UI/Forms/withFormLabel";

const SInput = (props) => {
  const { hasError, ...rest} = props;
  return <Input className={hasError ? "ant-input-status-error" : ""} {...rest} />
};

export default withFormLabel(SInput);
