import { ThemeProvider } from "emotion-theming";
import _ from "lodash";
import { Box, Flex, Text } from "rebass";
import { ConfigProvider, Button, Input } from "antd";
import { useEffect, useMemo, useState } from "react";
import "antd/dist/antd.variable.min.css";
import "./ant.less";
import AppRouter from "route/index";
import FInput from "components/UI/Forms/FormControllers/FInput";
import { useForm } from "react-hook-form";
import  useTestForm  from "config/formElements/useTestForm";
import { convertFormElements } from "config/utils";
import styled from "@emotion/styled";
import FSelect from "components/UI/Forms/FormControllers/FSelect";
import Test, { HeaderButton } from "Test";
import SSelect from "components/UI/Forms/SFormElements/SSelect";
import { Select } from "antd";
import axios from "axios";
import FRadio from "components/UI/Forms/FormControllers/FRadio";
import SRadio from "components/UI/Forms/SFormElements/SRadio";

const theme = {
  colors: {
    primary: "#c71111",
    huseyin: "green",
  },
  fontSizes: [8, 10, 12, 14, 16, 18, 20, 22],
  space: [5, 10, 12, 20, 25, 30],
};

ConfigProvider.config({
  theme: {
    primaryColor: theme.colors.primary,
    testColor: theme.colors.huseyin,
  },
});

const { Option } = Select;


// function formElements() {

// }

// export const convertFormElements1 = ({
//   els,
//   control,
//   status,
//   defaultValues,
// }) => {
//   Object.keys(els).map((key) => {
//     els[key].refinerName = els[key].name;
//     els[key].name = els[key].parentName
//       ? `${els[key].parentName}.${els[key].name}`
//       : els[key].name;
//     if (defaultValues)
//       els[key].defaultValue = _.get(defaultValues, els[key].name);
//     if (
//       els[key].activeStatuses &&
//       !els[key].activeStatuses.some((x) => x === status)
//     ) {
//       els[key].size = 'medium';
//       els[key].readonly = true;
//     }
//     els[key].control = control;

//     return '';
//   });
//   return els;
// };

// const formEls = useMemo(() => {
//   if (subundegeri == 5)
//   els.vendor.rules.validate = customrulum
//   const els = formElements();
//   Object.keys(els).map((key) => {
//     els[key].defaultValue = demandListSource.store.formData[els[key].name];
//     els[key].control = control;
//     els[key].refinerName = els[key].name;
//     if (readonly)
//     els[key].readonly ;
//     return '';

//     const els = rootFormElements();
//     return convertFormElements({ els, status, control, defaultValues });
//   });

//   return els;
// }, [asd]);

// ,validate:{enaz100: (val) => if val > 100 undefined : '100den büyük gir'}

const Deneme = styled(FInput)`
  color: ${(props) => props.color};
`;

function App() {
  const [state, setState] = useState(1);
  const { control, watch, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  const defaultValues = {
    test: "2343",
  };
  const els = useTestForm()
  const tt = useMemo(() => convertFormElements({ els, control }), []);
  const test = watch("test");

  console.log("tt",tt)

  return (
    <ThemeProvider theme={theme}>
      {state}
      <form onSubmit={handleSubmit(onSubmit)}>
        <FInput {...tt.test} />
        <FSelect {...tt.test2} />
        <FSelect {...tt.test3} />
        <FRadio {...tt.test4} />
        <SSelect name="ozkan" {...tt.test2} />
        <Flex justifyContent={["center", "end", "start"]} px={[2, 4, 5]} py={4}>
          <Box width={[10, 20, 1 / 100]}>Flex</Box>
        </Flex>
        <input type="submit" />
      </form>
      <Button
        onClick={() => {
          ConfigProvider.config({
            theme: {
              primaryColor: Math.random() > 0.5 ? theme.colors.primary : "blue",
            },
          });
          setState(state + 1);
        }}
        type="test"
      >
        Primary Button
      </Button>
      <Input placeholder="large size" size="large" />
      <Text fontSize={7} color="huseyin">
        Text
      </Text>
      <Test></Test>
      <HeaderButton color="huseyin" px={4} py={4} decoration="underline">Header Underline</HeaderButton>
      <HeaderButton color="huseyin" px={4} py={4}>Header None</HeaderButton>
      <AppRouter />
    </ThemeProvider>
  );
}

export default App;
