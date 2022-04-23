import React from "react";
import SInput from "components/UI/Forms/SFormElements/SInput";
import withController from "components/UI/Forms/withController";

const FInput = (props) => {
  return <SInput {...props} />;
};

export default withController(FInput);
