import { useState } from 'react'

const useToggle = (initial = false) => {
  const [open, setOpen] = useState(initial)
  const toggle = () => setOpen((prev) => !prev)
  const hide = () => setOpen(false)
  return {
    open,
    toggle,
    hide,
  }
}

export default useToggle
