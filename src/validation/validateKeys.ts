import { listfromtextApi, listfromtextResponse } from '../../@types/types'
import { ENDPOINTS } from '../constants/endpoints'
import { UNIQUE_OPTIONS, SORT_OPTIONS,
  SEARCH_REQUIRED } from '../constants/extractors'

const validateKeys = ({
  endpoint,
  apiKey,
  input,
  file,
  unique,
  sort,
  search,
}: listfromtextApi): listfromtextResponse => {
  if (!apiKey || apiKey.length < 20) {
    return {
      message: 'API key missing or too short',
    }
  }

  if (!ENDPOINTS.includes(endpoint)) {
    return {
      message: `Endpoint not valid - valid endpoints are: ${ENDPOINTS.join(
        ' | '
      )}`,
    }
  }

  if (unique) {
    if (!UNIQUE_OPTIONS.includes(unique.toString())) {
      return {
        message: `Unique parameter not valid - valid values are: ${UNIQUE_OPTIONS.join(
          ' | '
        )}`,
      }
    }
  }

  if (sort) {
    if (!SORT_OPTIONS.includes(sort)) {
      return {
        message: `Sort parameter not valid - valid values are: ${SORT_OPTIONS.join(
          ' | '
        )}`,
      }
    }
  }

  if (SEARCH_REQUIRED.includes(endpoint)) {
    if (!search || search === '') {
      return {
        message: `Search parameter required for endpoint: ${endpoint}`,
      }
    }
  }

  const isFile = endpoint.includes('/file/')

  if (isFile) {
    if (!file) {
      return {
        message: 'Missing or corrupted file',
      }
    }
  } else {
    if (!input || typeof input !== 'string') {
      return {
        message: 'input is not a valid string',
      }
    }
  }

  return { message: 'ok' }
}

export default validateKeys
