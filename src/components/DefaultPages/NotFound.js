/* eslint-disable import/no-anonymous-default-export */
import { Result, Button } from "antd";

export default () => (
  <Result
    status="404"
    title="404"
    subTitle="Sorry, the page you visited does not exist."
    extra={
      <>
        <Button type="primary">Go Back</Button>
        <Button type="primary">Go Home</Button>
      </>
    }
  />
);
