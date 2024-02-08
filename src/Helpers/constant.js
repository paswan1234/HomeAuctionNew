import { randomString } from './utils'

const { VITE_BASE_URL: BASE_URL, VITE_UPLOAD_URL: VITE_EDITOR_URL } =
  import.meta.env

const REQUEST_STATUS = {
  SUCCESS: 'success',
  ERROR: 'error',
}

const LISTING_TYPES = [
  {
    id: randomString(),
    name: 'Foreclosures',
  },
  {
    id: randomString(),
    name: 'REO Bank Owned',
  },
  {
    id: randomString(),
    name: 'Pre-Foreclosures',
  },
]

const PROPERTY_TYPES = [
  {
    id: randomString(),
    name: 'Single-Family',
  },
  {
    id: randomString(),
    name: 'Condo',
  },
  {
    id: randomString(),
    name: 'Multi-Family',
  },
  {
    id: randomString(),
    name: 'Mobile Home',
  },
  {
    id: randomString(),
    name: 'Commercial',
  },
]

const PROPERTY_AREA = [
  {
    id: randomString(),
    name: '600 SqFt',
    value: '600',
  },
  {
    id: randomString(),
    name: '750 SqFt',
    value: '750',
  },
  {
    id: randomString(),
    name: '1000 SqFt',
    value: '1000',
  },
]

export default {
  BASE_URL,
  VITE_EDITOR_URL,
  REQUEST_STATUS,
  LISTING_TYPES,
  PROPERTY_TYPES,
  PROPERTY_AREA,
}
