import { listfromtextApi, listfromtextResponse } from '../../@types/types';
declare const callFileApiBrowser: ({ endpoint, apiKey, file, unique, sort, search, }: listfromtextApi) => Promise<listfromtextResponse>;
export default callFileApiBrowser;
