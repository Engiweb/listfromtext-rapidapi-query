import fs from 'fs'
import path from 'path'
import callListFromTextApi from '../../query/callListFromTextApi'
import {
  FILE_EXTRACTOR_ALPHANUMERIC,
  EXTRACTOR_ALPHANUMERIC,
} from '../../constants/endpoints'
import callExtractorApi from '../../query/callExtractorApi'
import callFileApi from '../../query/callFileApi'

jest.mock('../../query/callExtractorApi')
jest.mock('../../query/callFileApi')

describe('callListFromTextApi', () => {
  afterEach(() => jest.resetAllMocks())

  it('should return error message when unique not valid', async () => {
    const endpoint = EXTRACTOR_ALPHANUMERIC
    const apiKey = 'longstringapikeylongstringapikeylongstringapikey'
    const input = 'string'
    const file = undefined
    const unique = 'wrong'
    const sort = 'az'
    const search = ''

    const output = await callListFromTextApi({
      endpoint,
      apiKey,
      input,
      file,
      unique,
      sort,
      search,
    })

    expect(output).toEqual({
      message: 'Unique parameter not valid - valid values are: true | false',
    })

    expect(callExtractorApi).toBeCalledTimes(0)
  })

  it('should return response if string', async () => {
    const endpoint = EXTRACTOR_ALPHANUMERIC
    const apiKey = 'longstringapikeylongstringapikeylongstringapikey'
    const input = 'string'
    const file = undefined
    const unique = true
    const sort = 'az'
    const search = ''

    await callListFromTextApi({
      endpoint,
      apiKey,
      input,
      file,
      unique,
      sort,
      search,
    })

    expect(callExtractorApi).toHaveBeenCalledWith({
      endpoint,
      apiKey,
      input,
      unique,
      sort,
      search,
    })
  })

  it('should return response if file', async () => {
    const endpoint = FILE_EXTRACTOR_ALPHANUMERIC
    const apiKey = 'longstringapikeylongstringapikeylongstringapikey'
    const input = undefined
    const file = fs.readFileSync(
      path.join(__dirname, '../../../fixtures/sample.txt')
    )
    const unique = true
    const sort = 'az'
    const search = ''

    await callListFromTextApi({
      endpoint,
      apiKey,
      input,
      file,
      unique,
      sort,
      search,
    })

    expect(callFileApi).toHaveBeenCalledWith({
      endpoint,
      apiKey,
      file,
      unique,
      sort,
      search,
    })
  })
})
