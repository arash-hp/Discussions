import { createSlice } from "@reduxjs/toolkit";
import { IUser } from "../types";

const initialState: { user: IUser } = {
  user: {
    name: "arash",
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload
    },
  },
});

export const { setUser } = userSlice.actions;
// Action creators are generated for each case reducer function

export default userSlice.reducer;
