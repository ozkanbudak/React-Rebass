import { ThemeProvider } from "emotion-theming";
import { Box, Flex, Text } from "rebass";
import { ConfigProvider, Button, Input } from "antd";
import { useEffect, useMemo, useState } from "react";
import "antd/dist/antd.variable.min.css";
import "./ant.less";
import AppRouter from "route/index";
import FInput from "components/UI/Forms/FormControllers/FInput";
import { useForm } from "react-hook-form";
import testformelements from "config/formElements/testformelements";
import { convertFormElements } from "config/utils";
import styled from "@emotion/styled";
import FSelect from "components/UI/Forms/FormControllers/FSelect";
import Test, { HeaderButton } from "Test";
import { Select } from "antd";
import FRadio from "components/UI/Forms/FormControllers/FRadio";

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

const defaultValues = {
  test: "238905273498523758294057",
};

function App() {
  const [state, setState] = useState(1);
  const [hh, ww] = useState(true);
  const [a1, a2] = useState(true);
  const { control, getValues, watch, trigger, handleSubmit, formState: { isSubmitted } } = useForm();
  const onSubmit = (data) => console.log(data);
  
  const test = watch("test");
  const formelements = useMemo(() => {
    const els = testformelements();
    els.test2.rules.validate.keyfi = (values) =>  (values || []).length === 2 ?  "2 alan seçemezsiniz": undefined
    els.test2.rules.validate.requiredDependedToTest = (values) =>  (getValues("test") === "123" && (values || []).length < 1) ?  "BU ALAN ZORUNLUDUR": undefined
    return convertFormElements({ els: testformelements(), control, defaultValues });
  }, []);

  useEffect(() => {
    if(isSubmitted) trigger("test2");
  }, [test]);

  return (
    <ThemeProvider theme={theme}>
      {state}
      <form onSubmit={handleSubmit(onSubmit)}>
        <FInput {...formelements.test} />
        <FSelect {...formelements.test2} />
        <FSelect {...formelements.test3} />
        <FRadio {...formelements.test4} />
        {/* <SSelect name="ozkan" {...formelements.test2} /> */}
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
          ww(!hh)
          a2(!a1)
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
      {/* <HeaderButton color="huseyin" px={4} py={4} decoration="underline">
        Header Underline
      </HeaderButton>
      <HeaderButton color="huseyin" px={4} py={4}>
        Header None
      </HeaderButton> */}
      <AppRouter />
    </ThemeProvider>
  );
}

export default App;
