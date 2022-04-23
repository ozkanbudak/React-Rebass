import React from "react";
import { Link, Text } from "rebass";
import { useTheme } from 'emotion-theming'
import styled from '@emotion/styled'

export const HeaderButton = styled(Link)`
  text-decoration: ${props =>
    props.decoration ? props.decoration : "none"};
`

const Test = () => {
  console.log("test",useTheme())
  return (
    <Text fontSize={0} color="primary" fontWeight="bold">
      Text
    </Text>
  );
}

export default React.memo(Test);
