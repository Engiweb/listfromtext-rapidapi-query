import { listfromtextApi, listfromtextResponse } from '../../@types/types'
import FormData from 'form-data'
import submitFormData from './submitFormData'
import { LISTFROMTEXT_RAPIDAPI_HOST } from '../constants/endpoints'

const callFileApiNode = ({
  endpoint,
  apiKey,
  file,
  unique,
  sort,
  search,
}: listfromtextApi): Promise<listfromtextResponse> => {
  const formData = new FormData()

  formData.append('file', file)

  if (unique) {
    formData.append('unique', unique.toString())
  }

  if (sort) {
    formData.append('sort', sort.toString())
  }

  if (search) {
    formData.append('search', search)
  }

  const options: FormData.SubmitOptions = {
    host: LISTFROMTEXT_RAPIDAPI_HOST,
    path: endpoint,
    method: 'POST',
    protocol: 'https:',
    headers: {
      'x-rapidapi-host': LISTFROMTEXT_RAPIDAPI_HOST,
      'x-rapidapi-key': apiKey,
    },
  }

  return submitFormData({
    formData,
    options,
  })
}

export default callFileApiNode
