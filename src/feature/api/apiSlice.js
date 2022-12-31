import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://mern-expense-tracker-backend.vercel.app/",
  }),
  tagTypes: ["categories", "transactions"],
  endpoints: (builder) => ({
    // get all categories
    getCategories: builder.query({
      query: () => ({ url: "exp/categories" }),
      providesTags: ["categories"],
    }),

    // get all labels
    getLabels: builder.query({
      query: () => ({ url: "exp/labels" }),
      providesTags: ["transactions"],
    }),

    // add a transaction
    addTransaction: builder.mutation({
      query: (data) => ({
        url: "exp/transactions",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["transactions"],
    }),

    // delete a transaction
    deleteTransaction: builder.mutation({
      query: (transactionId) => ({
        url: "exp/transactions",
        method: "DELETE",
        body: transactionId,
      }),
      invalidatesTags: ["transactions"],
    }),
  }),
});

export const {
  useGetCategoriesQuery,
  useGetLabelsQuery,
  useAddTransactionMutation,
  useDeleteTransactionMutation,
} = apiSlice;
