/* eslint no-console:0 */
import {
  FILE_EXTRACTOR_ALPHANUMERIC,
  EXTRACTOR_ALPHANUMERIC,
  EXTRACTOR_CUSTOM_REGEX
} from '../../constants/endpoints'
import validateKeys from '../../validation/validateKeys'

describe('validateKeys', () => {
  it('should return API key missing', () => {
    const endpoint = EXTRACTOR_ALPHANUMERIC
    const apiKey = undefined
    const input = undefined
    const file = undefined
    const unique = undefined
    const sort = undefined
    const search = undefined

    const output = validateKeys({
      endpoint,
      apiKey,
      input,
      file,
      unique,
      sort,
      search,
    })

    expect(output).toEqual({
      message: 'API key missing or too short',
    })
  })

  it('should return API key missing', () => {
    const endpoint = 'not-valid-endpoint'
    const apiKey = 'longstringapikeylongstringapikeylongstringapikey'
    const input = undefined
    const file = undefined
    const unique = undefined
    const sort = undefined
    const search = undefined

    const output = validateKeys({
      endpoint,
      apiKey,
      input,
      file,
      unique,
      sort,
      search,
    })

    expect(output).toEqual({
      message:
        'Endpoint not valid - valid endpoints are: /file/text | /file/extractor/alphanumeric | /file/extractor/bitcoin-wallet | /file/extractor/credit-card | /file/extractor/custom-regex | /file/extractor/date | /file/extractor/digit | /file/extractor/digit-with-decimals | /file/extractor/email | /file/extractor/file-extension | /file/extractor/handle | /file/extractor/hashtag | /file/extractor/hex-color | /file/extractor/iban | /file/extractor/ip-v-4 | /file/extractor/ip-v-6 | /file/extractor/isbn | /file/extractor/noun | /file/extractor/phone-number | /file/extractor/sentence | /file/extractor/single-xml-tag | /file/extractor/web-domain | /file/extractor/web-domain-name | /file/extractor/website-url-hash | /file/extractor/website-url-pathname | /file/extractor/website-url | /file/extractor/xml-tag | /extractor/alphanumeric | /extractor/bitcoin-wallet | /extractor/credit-card | /extractor/custom-regex | /extractor/date | /extractor/digit | /extractor/digit-with-decimals | /extractor/email | /extractor/file-extension | /extractor/handle | /extractor/hashtag | /extractor/hex-color | /extractor/iban | /extractor/ip-v-4 | /extractor/ip-v-6 | /extractor/isbn | /extractor/noun | /extractor/phone-number | /extractor/sentence | /extractor/single-xml-tag | /extractor/web-domain | /extractor/web-domain-name | /extractor/website-url-hash | /extractor/website-url-pathname | /extractor/website-url | /extractor/xml-tag',
    })
  })

  it('should return unique error', () => {
    const endpoint = EXTRACTOR_ALPHANUMERIC
    const apiKey = 'longstringapikeylongstringapikeylongstringapikey'
    const input = undefined
    const file = undefined
    const unique = 'wrong'
    const sort = undefined
    const search = undefined

    const output = validateKeys({
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
  })

  it('should return sort error', () => {
    const endpoint = EXTRACTOR_ALPHANUMERIC
    const apiKey = 'longstringapikeylongstringapikeylongstringapikey'
    const input = undefined
    const file = undefined
    const unique = 'true'
    const sort = 'wrong'
    const search = undefined

    const output = validateKeys({
      endpoint,
      apiKey,
      input,
      file,
      unique,
      sort,
      search,
    })

    expect(output).toEqual({
      message: 'Sort parameter not valid - valid values are: az | za',
    })
  })

  it('should return search error when custom regex', () => {
    const endpoint = EXTRACTOR_CUSTOM_REGEX
    const apiKey = 'longstringapikeylongstringapikeylongstringapikey'
    const input = undefined
    const file = undefined
    const unique = 'true'
    const sort = 'az'
    const search = undefined

    const output = validateKeys({
      endpoint,
      apiKey,
      input,
      file,
      unique,
      sort,
      search,
    })

    expect(output).toEqual({
      message: 'Search parameter required for endpoint: /extractor/custom-regex',
    })
  })

  it('should return wrong file', () => {
    const endpoint = FILE_EXTRACTOR_ALPHANUMERIC
    const apiKey = 'longstringapikeylongstringapikeylongstringapikey'
    const input = undefined
    const file = undefined
    const unique = undefined
    const sort = undefined
    const search = undefined

    const output = validateKeys({
      endpoint,
      apiKey,
      input,
      file,
      unique,
      sort,
      search,
    })

    expect(output).toEqual({
      message: 'Missing or corrupted file',
    })
  })

  it('should return wrong input', () => {
    const endpoint = EXTRACTOR_ALPHANUMERIC
    const apiKey = 'longstringapikeylongstringapikeylongstringapikey'
    const input = undefined
    const file = undefined
    const unique = undefined
    const sort = undefined
    const search = undefined

    const output = validateKeys({
      endpoint,
      apiKey,
      input,
      file,
      unique,
      sort,
      search,
    })

    expect(output).toEqual({
      message: 'input is not a valid string',
    })
  })

  it('should return ok', () => {
    const endpoint = EXTRACTOR_ALPHANUMERIC
    const apiKey = 'longstringapikeylongstringapikeylongstringapikey'
    const input = 'string'
    const file = undefined
    const unique = undefined
    const sort = undefined
    const search = undefined

    const output = validateKeys({
      endpoint,
      apiKey,
      input,
      file,
      unique,
      sort,
      search,
    })

    expect(output).toEqual({
      message: 'ok',
    })
  })
})
