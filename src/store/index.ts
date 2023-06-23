import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import auth from "./slice/auth";
import authApi from "./api/auth";
export const store = configureStore({
  reducer: {
    auth,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (gDM) => gDM().concat(authApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
