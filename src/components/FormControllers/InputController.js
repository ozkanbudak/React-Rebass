import React from "react";
import { Controller } from "react-hook-form";
import SingleInput from "components/SignleFormElements/SingleInput";
import withFormItem from "components/withFormItem";

const InputController = ({ name, rules, control, ...rest }) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field: { onChange, onBlur, value } }) => (
        <SingleInput
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

export default withFormItem(InputController);
