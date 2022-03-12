import { ThemeProvider } from "emotion-theming";
import Test from "./Test";
import _ from "lodash";
import { Text } from "rebass";
import { ConfigProvider, Button, Input } from "antd";
import { Typography } from "antd";
import { useState } from "react";
import "./ant.less";
import "antd/dist/antd.variable.min.css";
import AppRouter from "./route/index";
import InputController from "./components/FormControllers/InputController"
import { useForm } from "react-hook-form";

const theme = {
  colors: {
    primary: "#c71111",
    huseyin: "blue",
  },
  fontSizes: [8, 10, 12, 14, 16, 18, 20, 22],
};

ConfigProvider.config({
  theme: {
    primaryColor: theme.colors.primary,
    testColor: theme.colors.huseyin
  },
});

function App() {
  const [state, setState] = useState(1);
  const { control, formState: { errors }, handleSubmit} = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <ThemeProvider theme={theme}>
      {state}
      <form onSubmit={handleSubmit(onSubmit)}>

      <InputController name="test" control={control} rules={{required: "Zorunlu"}} errors={errors} />
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
          type="primary"
        >
          Primary Button
        </Button>
        <Input placeholder="large size" />
        <Text fontSize={0} color="huseyin">
          Text
        </Text>
      <AppRouter>
        
      </AppRouter>
    </ThemeProvider>
  );
}

export default App;
