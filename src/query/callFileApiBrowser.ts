import { listfromtextApi, listfromtextResponse } from '../../@types/types'
import {
  LISTFROMTEXT_RAPIDAPI_BASE_URL,
  LISTFROMTEXT_RAPIDAPI_HOST,
} from '../constants/endpoints'
import axios from 'axios'

const callFileApiBrowser = ({
  endpoint,
  apiKey,
  file,
  unique,
  sort,
  search,
}: listfromtextApi): Promise<listfromtextResponse> => {
  const formData = new FormData()

  formData.append('file', file as Blob)

  if (unique) {
    formData.append('unique', unique.toString())
  }

  if (sort) {
    formData.append('sort', sort.toString())
  }

  if (search) {
    formData.append('search', search)
  }

  const headers = {
    'x-rapidapi-host': LISTFROMTEXT_RAPIDAPI_HOST as string,
    'x-rapidapi-key': apiKey as string,
    'content-type': 'multipart/form-data',
  }

  const url = LISTFROMTEXT_RAPIDAPI_BASE_URL + endpoint

  return axios
    .post(url, formData, { headers })
    .then((response): listfromtextResponse => response.data as listfromtextResponse)
    .catch(() => ({
      error: 'Could not get response',
    }))
}

export default callFileApiBrowser
