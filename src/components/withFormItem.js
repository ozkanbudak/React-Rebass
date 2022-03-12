import React from "react";
import { ErrorMessage } from "@hookform/error-message";
import { Text } from "rebass";

const withFormItem =
  (WrappedComponent) =>
  ({ errors, name, ...rest }) => {
      console.log("name", name)
    return (
      <>
        <WrappedComponent name={name} {...rest} />
        <ErrorMessage
          errors={errors}
          name={name}
          render={({ message }) => <Text color="primary">{message}</Text>}
        />
      </>
    );
  };

export default withFormItem;
