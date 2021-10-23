import React from "react";
import Reducer from "./Reducer";
const initialState = {
  user: JSON.parse (localStorage.getItem('user')) || null,
  isFetching: false,
  error: false,
};

export const Context = React.createContext(initialState);
export const ContextProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(Reducer, initialState);
  React.useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.user));
  },[state.user])
  return (
    <Context.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </Context.Provider>
  );
};
