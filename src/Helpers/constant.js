const { VITE_BASE_URL: BASE_URL, VITE_UPLOAD_URL: VITE_EDITOR_URL } =
  import.meta.env

const REQUEST_STATUS = {
  SUCCESS: 'success',
  ERROR: 'error',
}

export default {
  BASE_URL,
  VITE_EDITOR_URL,
  REQUEST_STATUS,
}
