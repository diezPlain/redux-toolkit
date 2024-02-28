import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface UIState {
  showModal: boolean
}

const initialState: UIState = {
  showModal: false,
}

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    showModalAction: (state, action: PayloadAction<boolean>) => {
      state.showModal = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { showModalAction } = uiSlice.actions

export default uiSlice.reducer
