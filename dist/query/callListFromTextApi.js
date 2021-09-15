"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var validateKeys_1 = __importDefault(require("../validation/validateKeys"));
var callExtractorApi_1 = __importDefault(require("./callExtractorApi"));
var callFileApi_1 = __importDefault(require("./callFileApi"));
var callListFromTextApi = function (_a) {
    var endpoint = _a.endpoint, apiKey = _a.apiKey, input = _a.input, file = _a.file, unique = _a.unique, sort = _a.sort, search = _a.search;
    var validityMessage = validateKeys_1.default({
        endpoint: endpoint,
        apiKey: apiKey,
        input: input,
        file: file,
        unique: unique,
        sort: sort,
        search: search,
    });
    if (validityMessage.message !== 'ok') {
        return Promise.resolve(validityMessage);
    }
    var isFile = endpoint.includes('/file/');
    if (isFile) {
        return callFileApi_1.default({
            endpoint: endpoint,
            apiKey: apiKey,
            file: file,
            unique: unique,
            sort: sort,
            search: search,
        });
    }
    return callExtractorApi_1.default({
        endpoint: endpoint,
        apiKey: apiKey,
        input: input,
        unique: unique,
        sort: sort,
        search: search,
    });
};
exports.default = callListFromTextApi;
