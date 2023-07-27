import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "..";
type InitialState = {
  token: string | null;
  loggedInUserId: string | undefined;
};

const initialState: InitialState = {
  token: null,
  loggedInUserId: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLoggedInUserId: (state, action: PayloadAction<string | undefined>) => {
      state.loggedInUserId = action.payload;
    },
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
    clearToken: (state) => {
      state.token = null;
    },
  },
});

export const { setToken, clearToken, setLoggedInUserId } = authSlice.actions;

export const selectToken = (state: RootState) => state.auth.token;
export const selectUserId = (state: RootState) => state.auth.loggedInUserId;
export default authSlice.reducer;
