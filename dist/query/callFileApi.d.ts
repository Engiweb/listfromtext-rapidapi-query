import { listfromtextApi, listfromtextResponse } from '../../@types/types';
declare const callFileApi: ({ endpoint, apiKey, file, unique, sort, search, }: listfromtextApi) => Promise<listfromtextResponse>;
export default callFileApi;
