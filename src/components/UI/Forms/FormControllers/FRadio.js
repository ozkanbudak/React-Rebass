import React from "react";
import SRadio from "components/UI/Forms/SFormElements/SRadio";
import withController from "components/UI/Forms/withController";

const FRadio = (props) => {
  return <SRadio {...props} />;
};

export default withController(FRadio);
