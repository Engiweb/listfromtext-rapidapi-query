import { listfromtextApi, listfromtextResponse } from '../../@types/types';
declare const callExtractorApi: ({ endpoint, apiKey, input, unique, sort, search, }: listfromtextApi) => Promise<listfromtextResponse>;
export default callExtractorApi;
