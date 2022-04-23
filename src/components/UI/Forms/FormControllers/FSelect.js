import React from "react";
import SSelect from "components/UI/Forms/SFormElements/SSelect";
import withController from "components/UI/Forms/withController";

const FSelect = (props) => {
  return <SSelect {...props} />;
};

export default withController(FSelect);
