import React from "react";
import FormLabel from "./FormLabel";

const withFormLabel =
  (WrappedComponent) =>
  ({ errorMessage, title, labelOpt, ...rest }) => {
    return (
      <div  className={errorMessage ? "ant-form-item-has-error" : ""}>
        {title && <FormLabel title={title} {...labelOpt} />}
        <WrappedComponent {...rest} hasError={!!errorMessage} />
        {errorMessage}
      </div>
    );
  };

export default withFormLabel;
