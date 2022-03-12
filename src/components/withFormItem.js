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
          render={({ message }) => <p>{message}</p>}
        />
      </>
    );
  };

export default withFormItem;
