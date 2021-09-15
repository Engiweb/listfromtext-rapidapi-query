"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var endpoints_1 = require("../constants/endpoints");
var extractors_1 = require("../constants/extractors");
var validateKeys = function (_a) {
    var endpoint = _a.endpoint, apiKey = _a.apiKey, input = _a.input, file = _a.file, unique = _a.unique, sort = _a.sort, search = _a.search;
    if (!apiKey || apiKey.length < 20) {
        return {
            message: 'API key missing or too short',
        };
    }
    if (!endpoints_1.ENDPOINTS.includes(endpoint)) {
        return {
            message: "Endpoint not valid - valid endpoints are: " + endpoints_1.ENDPOINTS.join(' | '),
        };
    }
    if (unique) {
        if (!extractors_1.UNIQUE_OPTIONS.includes(unique.toString())) {
            return {
                message: "Unique parameter not valid - valid values are: " + extractors_1.UNIQUE_OPTIONS.join(' | '),
            };
        }
    }
    if (sort) {
        if (!extractors_1.SORT_OPTIONS.includes(sort)) {
            return {
                message: "Sort parameter not valid - valid values are: " + extractors_1.SORT_OPTIONS.join(' | '),
            };
        }
    }
    if (extractors_1.SEARCH_REQUIRED.includes(endpoint)) {
        if (!search || search === '') {
            return {
                message: "Search parameter required for endpoint: " + endpoint,
            };
        }
    }
    var isFile = endpoint.includes('/file/');
    if (isFile) {
        if (!file) {
            return {
                message: 'Missing or corrupted file',
            };
        }
    }
    else {
        if (!input || typeof input !== 'string') {
            return {
                message: 'input is not a valid string',
            };
        }
    }
    return { message: 'ok' };
};
exports.default = validateKeys;
