import React from "react";
import  styled  from "@emotion/styled";
import { Button } from "antd";

const AntButton = styled(Button)`
  background: ${props => props.theme.colors[props.color]};
  height: ${props => props.theme.colors[props.color]};
`;

const Btn = ({ color = "primary", children }) => {
  return (
    <div>
      {children}
      <AntButton size="large" color={color} >Go to Profile</AntButton>
    </div>
  );
};

export default Btn;
