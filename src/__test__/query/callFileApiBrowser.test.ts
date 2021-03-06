import callFileApiBrowser from '../../query/callFileApiBrowser'
import { EXTRACTOR_ALPHANUMERIC } from '../../constants/endpoints'
import axios from 'axios'

jest.mock('axios')

describe('callFileApiBrowser', () => {
  beforeEach(() => {
    global.FormData = jest.fn().mockImplementation(() => ({
      form: {},
      append: function (name: string, value: unknown): void {
        this.form[name] = value
      },
    }))
  })

  afterEach(() => {
    jest.resetAllMocks()
    delete global.FormData
  })

  it('should return axios error if server down', async () => {
    const endpoint = EXTRACTOR_ALPHANUMERIC
    const apiKey = 'longstringapikeylongstringapikeylongstringapikey'
    const file = 'file'
    const unique = true
    const sort = 'az'
    const search = ''

    axios.post = jest.fn().mockImplementation(() => Promise.reject(false))

    const output = await callFileApiBrowser({
      endpoint,
      apiKey,
      file,
      unique,
      sort,
      search,
    })

    expect(output).toEqual({
      error: 'Could not get response',
    })
  })

  it('should return data', async () => {
    const endpoint = EXTRACTOR_ALPHANUMERIC
    const apiKey = 'longstringapikeylongstringapikeylongstringapikey'
    const file = 'file'
    const unique = true
    const sort = 'az'
    const search = ''
    const data = { data: '1Line1\n2Line2\n3Line3' }

    axios.post = jest.fn().mockImplementation(() => Promise.resolve({ data }))

    const output = await callFileApiBrowser({
      endpoint,
      apiKey,
      file,
      unique,
      sort,
      search,
    })

    expect(output).toEqual(data)
  })
})
