import axios from 'axios'
import callExtractorApi from '../../query/callExtractorApi'
import { EXTRACTOR_ALPHANUMERIC } from '../../constants/endpoints'

jest.mock('axios')

describe('callExtractorApi', () => {
  afterEach(() => jest.resetAllMocks())

  it('should return axios error if server down', async () => {
    const endpoint = EXTRACTOR_ALPHANUMERIC
    const apiKey = 'longstringapikeylongstringapikeylongstringapikey'
    const input = 'string'
    const unique = true
    const sort = 'az'
    const search = ''

    axios.post = jest
      .fn()
      .mockImplementation(() => Promise.reject(new Error('server error')))

    const output = await callExtractorApi({
      endpoint,
      apiKey,
      input,
      unique,
      sort,
      search,
    })

    expect(output).toEqual({
      error: 'server error',
    })
  })

  it('should return response if string', async () => {
    const endpoint = EXTRACTOR_ALPHANUMERIC
    const apiKey = 'longstringapikeylongstringapikeylongstringapikey'
    const input = 'string'
    const unique = true
    const sort = 'az'
    const search = ''

    axios.post = jest
      .fn()
      .mockImplementation(() => Promise.resolve({ data: { data: '3string' } }))

    const output = await callExtractorApi({
      endpoint,
      apiKey,
      input,
      unique,
      sort,
      search,
    })

    expect(output).toEqual({
      data: '3string',
    })
  })
})
