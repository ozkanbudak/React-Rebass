import React from "react";
import { ErrorMessage } from "@hookform/error-message";
import { Text } from "rebass";

const withFormItem =
  (WrappedComponent) =>
  ({ errors, ...rest }) => {
    return (
      <>
        <WrappedComponent {...rest} />
        <ErrorMessage
          errors={errors}
          name={rest.name}
          render={({ message }) => <Text color="primary">{message}</Text>}
        />
      </>
    );
  };

export default withFormItem;
