import { getLocalStorage } from '@auction/Helpers/browserStorageOperations'

const ALLOWED_KEYS = [
  'Backspace',
  'Delete',
  'ArrowLeft',
  'ArrowRight',
  'Home',
  'End',
  'Enter',
  'Tab',
]
const REGEX_ONLY_NUMBERS = /^[0-9\b]+$/

export const isUserAuthenticated = () => {
  const getToken = getLocalStorage('authData')?.token
  return !!getToken
}

/**
 * Make Deep Copy OF an object
 * @param {Object} newObj
 * @returns {Object} - `Same Object` with deep copy
 */
export const makeDeepCopy = (newObj) => {
  if (!newObj) return null
  return JSON.parse(JSON.stringify(newObj))
}

/**
 * Gives Random String of Defined Length
 * @param {number} length - Length of String
 * @default - `length` is 4
 * @returns {string}
 */
export const randomString = (length = 4) => {
  let text = ''
  const possible =
    '9876543210ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'

  for (let i = 0; i < length; i += 1)
    text += possible.charAt(Math.floor(Math.random() * possible.length))

  return text
}

export const getParseQueryData = (location) => {
  const search = new URLSearchParams(location)
  const queryObject = Array.from(search.entries()).reduce(
    (acc, [key, value]) => ({
      ...acc,
      [key]: value,
    }),
    {}
  )
  return queryObject
}

export const capitalizeFirstLetter = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
}

export const handleKeyDownOnlyNumbers = (event) => {
  if (REGEX_ONLY_NUMBERS.test(event.key) || ALLOWED_KEYS.includes(event.key)) {
    return
  }
  event.preventDefault()
}
