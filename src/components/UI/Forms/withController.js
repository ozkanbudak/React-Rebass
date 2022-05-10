import React from "react";
import { Controller } from "react-hook-form";

const withController =
  (WrappedComponent) =>
  ({ name, rules, control, defaultValue, ...rest }) => {
    return (
      <Controller
        control={control}
        name={name}
        rules={rules}
        defaultValue={defaultValue}
        render={({
          field: { onChange, onBlur, value },
          fieldState: { error },
        }) => (
          <WrappedComponent
            errorMessage={error && error.message}
            onChange={onChange}
            onBlur={onBlur}
            defaultValue={value}
            name={name}
            {...rest}
          />
        )}
      />
    );
  };

export default withController;
