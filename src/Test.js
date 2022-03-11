import { Text } from "rebass";
import { useTheme } from 'emotion-theming'

function Test() {
  console.log(useTheme())
  return (
    <Text fontSize={0} color="primary" fontWeight="bold">
      Text
    </Text>
  );
}

export default Test;
