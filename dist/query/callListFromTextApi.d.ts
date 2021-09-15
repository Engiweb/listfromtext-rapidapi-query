import { listfromtextApi, listfromtextResponse } from '../../@types/types';
declare const callListFromTextApi: ({ endpoint, apiKey, input, file, unique, sort, search, }: listfromtextApi) => Promise<listfromtextResponse>;
export default callListFromTextApi;
