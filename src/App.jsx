import { ThemeProvider } from "emotion-theming";
import Test from "./Test";
import _ from "lodash";
import { Text } from "rebass";
import { ConfigProvider, Button, Input } from "antd";
import { Typography } from "antd";
import { useState } from "react";
import "antd/dist/antd.variable.min.css";
import "./ant.less";
import AppRouter from "./route/index";

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
  },
});

function App() {
  const [state, setState] = useState(1);

  return (
    <ThemeProvider theme={theme}>
      {state}
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
