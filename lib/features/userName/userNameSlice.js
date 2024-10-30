import { createSlice } from "@reduxjs/toolkit";

const initialState = "";

export const userNameSlice = createSlice({
  name: "userName",
  initialState,
  reducers: {
    setUserName: (state, action) => {
      return action.payload;
    },
  },
});

export const userNameActions = userNameSlice.actions;
export default userNameSlice.reducer;
