import React, { useState } from "react";
import { Link, Text } from "rebass";
import { useTheme } from 'emotion-theming'
import styled from '@emotion/styled'

export const HeaderButton = styled(Link)`
  text-decoration: ${props =>
    props.decoration ? props.decoration : "none"};
`

const Test = () => {
  console.log("test",useTheme())
  const [state1, setState1] = useState("test");
  const [state2, setState2] = useState("test2");
  const [state3, setState3] = useState("test4");
  const [state4, setState4] = useState("test4");
  return (
    <Text fontSize={5} color="primary" fontWeight="bold" onClick={() => {
      setState1("state1");
      setState2("state2");
      setState3("state3");
      setState4("state4");
    }}>
      {state1} {state2} Text
    </Text>
  );
}

export default React.memo(Test);
