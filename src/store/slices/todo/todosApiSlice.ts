/* https://redux.js.org/tutorials/essentials/part-7-rtk-query-basics */

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ItemTodo } from './interfaces'

export const todosApiSlice = createApi({
  reducerPath: 'todos',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com' }),
  endpoints: builder => ({
    getTodos: builder.query<ItemTodo[], void>({
      query: () => '/todos'
    }),
    getTodosById: builder.query<ItemTodo, number>({
      query: (todoId) => `/todos/${todoId}`
    })
  })
})

/* Nos crea custom hooks!! */

export const { useGetTodosQuery, useGetTodosByIdQuery } = todosApiSlice
