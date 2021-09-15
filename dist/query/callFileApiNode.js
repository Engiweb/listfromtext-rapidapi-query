"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var form_data_1 = __importDefault(require("form-data"));
var submitFormData_1 = __importDefault(require("./submitFormData"));
var endpoints_1 = require("../constants/endpoints");
var callFileApiNode = function (_a) {
    var endpoint = _a.endpoint, apiKey = _a.apiKey, file = _a.file, unique = _a.unique, sort = _a.sort, search = _a.search;
    var formData = new form_data_1.default();
    formData.append('file', file);
    if (unique) {
        formData.append('unique', unique.toString());
    }
    if (sort) {
        formData.append('sort', sort.toString());
    }
    if (search) {
        formData.append('search', search);
    }
    var options = {
        host: endpoints_1.LISTFROMTEXT_RAPIDAPI_HOST,
        path: endpoint,
        method: 'POST',
        protocol: 'https:',
        headers: {
            'x-rapidapi-host': endpoints_1.LISTFROMTEXT_RAPIDAPI_HOST,
            'x-rapidapi-key': apiKey,
        },
    };
    return submitFormData_1.default({
        formData: formData,
        options: options,
    });
};
exports.default = callFileApiNode;
