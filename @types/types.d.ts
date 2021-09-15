import { AxiosError } from 'axios'

export type listfromtextApi = {
  endpoint: string
  apiKey: string | undefined
  input?: string | undefined
  file?: unknown | undefined
  unique?: string | boolean | undefined
  sort?: string | undefined
  search?: string | undefined
}

export type listfromtextMessage = {
  message: string
}

export type listfromtextResponse = {
  message?: string
  data?: string
  error?: string | AxiosError
}

