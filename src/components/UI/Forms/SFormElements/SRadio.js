import React from "react";
import { Radio } from "antd";
import withFormLabel from "../withFormLabel";

const SRadio = ({...rest}) => {
  return (
    <Radio.Group
      {...rest}
    >
    </Radio.Group>
  );
};

export default withFormLabel(SRadio);
