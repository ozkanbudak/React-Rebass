import React from "react";
import { Input } from "antd";
import { Text } from "rebass";

const SingleInput = (props) => {
  const { title= "Test", labelColor = "huseyin", labelSize = 7, ...rest} = props;
  return (
    <>
      {title && <Text as="label" color={labelColor} fontSize={labelSize}>{title}</Text>}
      <Input {...rest} />
    </>
  );
};

export default SingleInput;
