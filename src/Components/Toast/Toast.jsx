import { Toast as BootstrapToast, ToastContainer } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import {
  selectToastAlert,
  setToastValue,
} from '@auction/Store/Slices/toastAlertSlice'

const TOAST_TYPE = {
  success: 'success',
  danger: 'danger',
}

export default function Toast() {
  const dispatch = useDispatch()
  const toast = useSelector(selectToastAlert)

  if (!toast.value) return null
  return (
    <ToastContainer
      position="top-end"
      className="position-fixed toast-custom p-3"
    >
      <BootstrapToast
        className={toast.type}
        autohide
        delay={4000}
        onClose={() => {
          dispatch(setToastValue(false))
        }}
        bg={TOAST_TYPE[toast?.type]}
      >
        <BootstrapToast.Body>
          <span>{toast.message}</span>
        </BootstrapToast.Body>
      </BootstrapToast>
    </ToastContainer>
  )
}
