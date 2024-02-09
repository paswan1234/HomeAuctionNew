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
    value: 'Foreclosure',
  },
  {
    id: randomString(),
    name: 'REO Bank Owned',
    value: 'Bank Owned',
  },
  {
    id: randomString(),
    name: 'Pre-Foreclosures',
    value: 'Pre-Foreclosure',
  },
]

const PROPERTY_TYPES = [
  {
    id: randomString(),
    name: 'Single-Family',
    value: 'Single Family Residence',
  },
  {
    id: randomString(),
    name: 'Condo',
    value: 'Condominium',
  },
  {
    id: randomString(),
    name: 'Multi-Family',
    value: 'Multi Family Residence',
  },
]

const PROPERTY_AREA = [
  {
    id: randomString(),
    name: '500 SqFt',
    value: '500',
  },
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

const MAX_PROPERTY_AREA = [
  {
    id: randomString(),
    name: '1500 SqFt',
    value: '1500',
  },
  {
    id: randomString(),
    name: '2000 SqFt',
    value: '2000',
  },
  {
    id: randomString(),
    name: '2500 SqFt',
    value: '2500',
  },
  {
    id: randomString(),
    name: '3000 SqFt',
    value: '3000',
  },
  {
    id: randomString(),
    name: '3500 SqFt',
    value: '3500',
  },
  {
    id: randomString(),
    name: '4000 SqFt',
    value: '4000',
  },
  {
    id: randomString(),
    name: '4500 SqFt',
    value: '4500',
  },
  {
    id: randomString(),
    name: '5000 SqFt',
    value: '5000',
  },
]

export default {
  BASE_URL,
  VITE_EDITOR_URL,
  REQUEST_STATUS,
  LISTING_TYPES,
  PROPERTY_TYPES,
  PROPERTY_AREA,
  MAX_PROPERTY_AREA,
}
