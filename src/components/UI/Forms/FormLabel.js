import { Text } from "rebass";

const FormLabel = ({ title, color = "primary", fontSize = 7 }) => {
  return (
    <Text color={color} fontSize={fontSize}>
      {title}
    </Text>
  );
};

export default FormLabel;
