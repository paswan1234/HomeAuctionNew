import { getLocalStorage } from '@auction/Helpers/browserStorageOperations'
import CONSTANTS from '@auction/Helpers/constant'
import ApiDefination from '@auction/Services/apiDefination'
import axios from 'axios'

axios.defaults.baseURL = CONSTANTS.BASE_URL

axios.interceptors.request.use(
  (config) => {
    const initialHeader = config.headers['Content-Type']
    const configCopy = { ...config }
    const userAuthData = getLocalStorage('authData')
    if (userAuthData?.token) {
      configCopy.headers.Authorization = `Bearer ${userAuthData.token}`
    }
    configCopy.headers.Accept = '*/*'
    configCopy.headers['Content-Type'] = initialHeader || 'application/json'

    return configCopy
  },
  (error) => Promise.reject(error)
)

const injectParamsToUrl = (_url_, paramObj) => {
  let url = _url_
  if (!paramObj) return url
  Object.keys(paramObj).forEach((paramKey) => {
    url = url.replace(`:${paramKey}`, paramObj[paramKey])
  })
  return url
}

const mainApiService = async (apiKeyName, data, queryParams = {}) => {
  const apiDetails = ApiDefination[apiKeyName]
  if (!apiDetails) {
    throw new Error(
      'Api configuration do not found in api-json, please check api-json.js'
    )
  }
  const requestObject = { ...apiDetails }
  requestObject.data = data
  requestObject.url = injectParamsToUrl(requestObject.url, data)

  // FOR POST QUERY PARAMS ARE EXPOSED HERE
  if (Object.keys(queryParams).length) {
    requestObject.url = injectParamsToUrl(requestObject.url, queryParams)
  }

  const { showResultMessage, showErrorMessage } = requestObject

  try {
    const result = await axios({ ...requestObject })
    const resultData = result?.data
    if (resultData) {
      return { ...result, showResultMessage }
    }

    return { data: {}, showResultMessage }
  } catch (error) {
    if (error?.response && showErrorMessage) {
      // throw new Error(error)
      throw error.response
    }
    return error.response || { data: {} }
  }
}

export default mainApiService
