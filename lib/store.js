import { configureStore } from "@reduxjs/toolkit";
import userNameReducer from "./features/userName/userNameSlice";
export const makeStore = () => {
  return configureStore({
    reducer: {
      userName: userNameReducer,
    },
  });
};
