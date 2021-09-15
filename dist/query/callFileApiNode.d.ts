import { listfromtextApi, listfromtextResponse } from '../../@types/types';
declare const callFileApiNode: ({ endpoint, apiKey, file, unique, sort, search, }: listfromtextApi) => Promise<listfromtextResponse>;
export default callFileApiNode;
