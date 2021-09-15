import FormData from 'form-data'
import { IncomingMessage } from 'http'
import { listfromtextResponse } from '../../@types/types'

type FormSubmit = {
  formData: FormData
  options: FormData.SubmitOptions
}

const submitFormData = ({
  formData,
  options,
}: FormSubmit): Promise<listfromtextResponse> =>
  new Promise((resolve) => {
    formData.submit(options, (err: Error | null, res: IncomingMessage) => {
      if (err) {
        return resolve({ error: err.message })
      }

      const body: Uint8Array[] = []

      res.on('data', (chunk: Uint8Array) => body.push(chunk))

      res.on('end', () => {
        try {
          const response = JSON.parse(Buffer.concat(body).toString())
          resolve(response)
        } catch {
          resolve({ error: 'Could not get response' })
        }
      })
    })
  })

export default submitFormData
