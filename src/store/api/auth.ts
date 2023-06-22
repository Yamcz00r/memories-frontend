import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

type RegisterCredentials = {
  userName: string;
  email: string;
  password: string;
};

type LoginCredentials = {
  email: string;
  password: string;
};

const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8080/auth" }),
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (credentials: RegisterCredentials) => ({
        method: "POST",
        body: { ...credentials },
      }),
    }),
  }),
});
