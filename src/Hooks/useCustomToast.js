import { useCallback } from 'react'

import { useDispatch } from 'react-redux'
import {
  setToastMessage,
  setToastType,
  setToastValue,
} from '@auction/Store/Slices/toastAlertSlice'

function useCustomToast() {
  const dispatch = useDispatch()

  const successDispatch = useCallback(
    (message) => {
      dispatch(setToastValue(true))
      dispatch(setToastMessage(message))
    },
    [dispatch]
  )

  const errorDispatch = useCallback(
    (response) => {
      const responseData = response?.data
      if (responseData) {
        if (responseData?.status !== 200 || responseData?.error) {
          dispatch(setToastValue(true))
          dispatch(setToastType('failure'))
          dispatch(
            setToastMessage(
              response?.data?.message?.name ||
                responseData?.message ||
                responseData?.error
            )
          )
        }
      } else if (response?.status !== 200 || response?.error) {
        dispatch(setToastValue(true))
        dispatch(setToastType('failure'))
        dispatch(setToastMessage(response?.message || response?.error))
      }
    },
    [dispatch]
  )
  return { errorDispatch, successDispatch }
}

export default useCustomToast
