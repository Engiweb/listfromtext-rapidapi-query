import callFileApiNode from '../../query/callFileApiNode'
import { EXTRACTOR_ALPHANUMERIC } from '../../constants/endpoints'
import submitFormData from '../../query/submitFormData'

jest.mock('../../query/submitFormData')

describe('callFileApiNode', () => {
  afterEach(() => jest.resetAllMocks())

  it('should return axios error if server down', async () => {
    const endpoint = EXTRACTOR_ALPHANUMERIC
    const apiKey = 'longstringapikeylongstringapikeylongstringapikey'
    const file = 'file'
    const unique = true
    const sort = 'az'
    const search = ''

    await callFileApiNode({
      endpoint,
      apiKey,
      file,
      unique,
      sort,
      search,
    })

    expect(submitFormData).toHaveBeenCalledTimes(1)
  })
})
