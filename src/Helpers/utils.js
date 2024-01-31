import { getLocalStorage } from '@auction/Helpers/browserStorageOperations'

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
