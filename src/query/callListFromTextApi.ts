import { listfromtextApi, listfromtextResponse } from '../../@types/types'
import validateKeys from '../validation/validateKeys'
import callExtractorApi from './callExtractorApi'
import callFileApi from './callFileApi'

const callListFromTextApi = ({
  endpoint,
  apiKey,
  input,
  file,
  unique,
  sort,
  search,
}: listfromtextApi): Promise<listfromtextResponse> => {
  const validityMessage = validateKeys({
    endpoint,
    apiKey,
    input,
    file,
    unique,
    sort,
    search,
  })

  if (validityMessage.message !== 'ok') {
    return Promise.resolve(validityMessage)
  }

  const isFile = endpoint.includes('/file/')

  if (isFile) {
    return callFileApi({
      endpoint,
      apiKey,
      file,
      unique,
      sort,
      search,
    })
  }

  return callExtractorApi({
    endpoint,
    apiKey,
    input,
    unique,
    sort,
    search,
  })
}

export default callListFromTextApi
