import React from "react";
import { Controller } from "react-hook-form";

const withController =
  (WrappedComponent) =>
  ({ name, rules, control, ...rest }) => {
    return (
      <Controller
        control={control}
        name={name}
        rules={rules}
        render={({
          field: { onChange, onBlur, value },
          fieldState: { error },
        }) => (
          <WrappedComponent
            errorMessage={error && error.message}
            onChange={onChange}
            onBlur={onBlur}
            selected={value}
            name={name}
            {...rest}
          />
        )}
      />
    );
  };

export default withController;
