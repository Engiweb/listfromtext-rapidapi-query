import { listfromtextApi, listfromtextResponse } from '../../@types/types'
import callFileApiNode from './callFileApiNode'
import checkNodeOrBrowser from '../utils/checkNodeOrBrowser'
import callFileApiBrowser from './callFileApiBrowser'

const callFileApi = ({
  endpoint,
  apiKey,
  file,
  unique,
  sort,
  search,
}: listfromtextApi): Promise<listfromtextResponse> => {
  const isNode = checkNodeOrBrowser(process)

  if (isNode) {
    return callFileApiNode({
      endpoint,
      apiKey,
      file,
      unique,
      sort,
      search,
    })
  }

  return callFileApiBrowser({
    endpoint,
    apiKey,
    file,
    unique,
    sort,
    search,
  })
}

export default callFileApi
