import createDataContext from "./createDataContext";

const authReducer = (state, action) => {
  switch (action.type) {
    case "signin":
      return { errorMessage: "", token: action.payload };
    case "signout":
      return { token: null, errorMessage: "" };
    default:
      return state;
  }
};

const signin = (dispatch) => () =>  {
  dispatch({ type: "signin", payload: "1324-1234-432-134" });
};

const signout = (dispatch) => () => {
  dispatch({ type: "signout" });
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signin, signout },
  { token: null, errorMessage: "" }
);
