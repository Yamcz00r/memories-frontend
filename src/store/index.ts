import { configureStore } from "@reduxjs/toolkit";
import auth from "./slice/auth";
import authApi from "./api/auth";
import postsApi from "./api/posts";
export const store = configureStore({
  reducer: {
    auth,
    [authApi.reducerPath]: authApi.reducer,
    [postsApi.reducerPath]: postsApi.reducer,
  },
  middleware: (gDM) => gDM().concat(authApi.middleware, postsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
