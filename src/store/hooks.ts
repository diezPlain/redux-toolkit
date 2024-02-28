/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback } from 'react'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { AsyncThunkAction, unwrapResult } from '@reduxjs/toolkit'
import { AppDispatch, RootState } from './store'

export interface AsyncDispatch {
  <R>(action: AsyncThunkAction<R, any, any>): Promise<R>
}

export function useAsyncDispatch(): AsyncDispatch {
  const dispatch = useDispatch<AppDispatch>()

  const asyncDispatch = useCallback<AsyncDispatch>(
    (action) => {
      return dispatch(action).then(unwrapResult)
    },
    [dispatch]
  )

  return asyncDispatch
}

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
