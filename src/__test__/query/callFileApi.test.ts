import callFileApi from '../../query/callFileApi'
import { EXTRACTOR_ALPHANUMERIC } from '../../constants/endpoints'
import callFileApiNode from '../../query/callFileApiNode'
import callFileApiBrowser from '../../query/callFileApiBrowser'

let isNode = false

jest.mock('../../query/callFileApiNode')
jest.mock('../../query/callFileApiBrowser')
jest.mock('../../utils/checkNodeOrBrowser', () => (): boolean => {
  isNode = !isNode
  return isNode
})

describe('callFileApi', () => {
  afterEach(() => jest.resetAllMocks())

  it('should callFileApiNode', async () => {
    const endpoint = EXTRACTOR_ALPHANUMERIC
    const apiKey = 'longstringapikeylongstringapikeylongstringapikey'
    const file = 'file'
    const unique = true
    const sort = 'az'
    const search = ''

    await callFileApi({
      endpoint,
      apiKey,
      file,
      unique,
      sort,
      search,
    })

    expect(callFileApiNode).toHaveBeenCalledWith({
      endpoint,
      apiKey,
      file,
      unique,
      sort,
      search,
    })
  })

  it('should callFileApiBrowser', async () => {
    const endpoint = EXTRACTOR_ALPHANUMERIC
    const apiKey = 'longstringapikeylongstringapikeylongstringapikey'
    const file = 'file'
    const unique = true
    const sort = 'az'
    const search = ''

    await callFileApi({
      endpoint,
      apiKey,
      file,
      unique,
      sort,
      search,
    })

    expect(callFileApiBrowser).toHaveBeenCalledWith({
      endpoint,
      apiKey,
      file,
      unique,
      sort,
      search,
    })
  })
})
