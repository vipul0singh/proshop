import {USER_URL} from "../constants";
import {apiSlice} from "./apiSlice";

export const usersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: USER_URL + '/auth',
        method: "POST",
        body: data,
      }),
      keepUnusedDataFor: 5,
    }),
    logout: builder.mutation({
      query: () => ({
        url: USER_URL + '/logout',
        method: "POST",
      }),
    }),
  }),
});

export const {useLoginMutation, useLogoutMutation} = usersApiSlice;