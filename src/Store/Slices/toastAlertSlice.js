/* eslint-disable no-param-reassign */
import { createSelector, createSlice } from '@reduxjs/toolkit'

const initialState = {
  type: 'success',
  message: '',
  value: false,
}
const toastAlertSlice = createSlice({
  name: 'toastAlert',
  initialState,
  reducers: {
    setToastType(state, action) {
      state.type = action.payload
    },
    setToastValue(state, action) {
      if (!state.value) {
        state.message = ''
        state.type = 'success'
      }
      state.value = action.payload
    },
    setToastMessage(state, action) {
      state.message = action.payload
    },
  },
})

export const { setToastType, setToastValue, setToastMessage } =
  toastAlertSlice.actions

const toastAlertSelector = (state) => state.toastAlert

export const selectToastAlert = createSelector(
  toastAlertSelector,
  (state) => state
)

export default toastAlertSlice
