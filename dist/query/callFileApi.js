"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var callFileApiNode_1 = __importDefault(require("./callFileApiNode"));
var checkNodeOrBrowser_1 = __importDefault(require("../utils/checkNodeOrBrowser"));
var callFileApiBrowser_1 = __importDefault(require("./callFileApiBrowser"));
var callFileApi = function (_a) {
    var endpoint = _a.endpoint, apiKey = _a.apiKey, file = _a.file, unique = _a.unique, sort = _a.sort, search = _a.search;
    var isNode = checkNodeOrBrowser_1.default(process);
    if (isNode) {
        return callFileApiNode_1.default({
            endpoint: endpoint,
            apiKey: apiKey,
            file: file,
            unique: unique,
            sort: sort,
            search: search,
        });
    }
    return callFileApiBrowser_1.default({
        endpoint: endpoint,
        apiKey: apiKey,
        file: file,
        unique: unique,
        sort: sort,
        search: search,
    });
};
exports.default = callFileApi;
