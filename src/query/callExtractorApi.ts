import axios, { AxiosError, AxiosResponse } from 'axios'
import { listfromtextApi, listfromtextResponse } from '../../@types/types'
import {
  LISTFROMTEXT_RAPIDAPI_BASE_URL,
  LISTFROMTEXT_RAPIDAPI_HOST,
} from '../constants/endpoints'

const callExtractorApi = ({
  endpoint,
  apiKey,
  input,
  unique,
  sort,
  search,
}: listfromtextApi): Promise<listfromtextResponse> =>
  axios
    .post(
      `${LISTFROMTEXT_RAPIDAPI_BASE_URL}${endpoint}`,
      {
        input,
        unique,
        sort,
        search,
      },
      {
        headers: {
          'x-rapidapi-host': LISTFROMTEXT_RAPIDAPI_HOST,
          'x-rapidapi-key': apiKey,
          useQueryString: true,
          'content-type': 'application/json',
        },
      }
    )
    .then((response: AxiosResponse): listfromtextResponse => {
      if (!response.data) {
        return { error: 'Could not retrieve data' }
      }

      return response.data
    })
    .catch(
      (error: Error | AxiosError): listfromtextResponse => ({
        error: error.message,
      })
    )

export default callExtractorApi
