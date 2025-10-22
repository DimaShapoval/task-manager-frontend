import { createApi } from "@reduxjs/toolkit/query/react";
import { baseParams } from "../baseParams";

export const boardApi = createApi({
  reducerPath: 'boardApi',
  baseQuery: baseParams,
  tagTypes: ['Board', 'Task', 'Subtask', 'Comment'],
  endpoints: (builder) => ({
    getBoards: builder.query({
      query: () => ({
        url: 'boards',
        method: 'GET',
      }),
      providesTags: ['Board'],
    })
  })
})

export const { useGetBoardsQuery } = boardApi;