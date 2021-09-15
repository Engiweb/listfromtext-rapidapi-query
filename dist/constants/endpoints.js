"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ENDPOINTS = exports.EXTRACTOR_XML_TAG = exports.EXTRACTOR_WEBSITE_URL = exports.EXTRACTOR_WEBSITE_URL_PATHNAME = exports.EXTRACTOR_WEBSITE_URL_HASH = exports.EXTRACTOR_WEB_DOMAIN_NAME = exports.EXTRACTOR_WEB_DOMAIN = exports.EXTRACTOR_SINGLE_XML_TAG = exports.EXTRACTOR_SENTENCE = exports.EXTRACTOR_PHONE_NUMBER = exports.EXTRACTOR_NOUN = exports.EXTRACTOR_ISBN = exports.EXTRACTOR_IP_V_6 = exports.EXTRACTOR_IP_V_4 = exports.EXTRACTOR_IBAN = exports.EXTRACTOR_HEX_COLOR = exports.EXTRACTOR_HASHTAG = exports.EXTRACTOR_HANDLE = exports.EXTRACTOR_FILE_EXTENSION = exports.EXTRACTOR_EMAIL = exports.EXTRACTOR_DIGIT_WITH_DECIMALS = exports.EXTRACTOR_DIGIT = exports.EXTRACTOR_DATE = exports.EXTRACTOR_CUSTOM_REGEX = exports.EXTRACTOR_CREDIT_CARD = exports.EXTRACTOR_BITCOIN_WALLET = exports.EXTRACTOR_ALPHANUMERIC = exports.FILE_EXTRACTOR_XML_TAG = exports.FILE_EXTRACTOR_WEBSITE_URL = exports.FILE_EXTRACTOR_WEBSITE_URL_PATHNAME = exports.FILE_EXTRACTOR_WEBSITE_URL_HASH = exports.FILE_EXTRACTOR_WEB_DOMAIN_NAME = exports.FILE_EXTRACTOR_WEB_DOMAIN = exports.FILE_EXTRACTOR_SINGLE_XML_TAG = exports.FILE_EXTRACTOR_SENTENCE = exports.FILE_EXTRACTOR_PHONE_NUMBER = exports.FILE_EXTRACTOR_NOUN = exports.FILE_EXTRACTOR_ISBN = exports.FILE_EXTRACTOR_IP_V_6 = exports.FILE_EXTRACTOR_IP_V_4 = exports.FILE_EXTRACTOR_IBAN = exports.FILE_EXTRACTOR_HEX_COLOR = exports.FILE_EXTRACTOR_HASHTAG = exports.FILE_EXTRACTOR_HANDLE = exports.FILE_EXTRACTOR_FILE_EXTENSION = exports.FILE_EXTRACTOR_EMAIL = exports.FILE_EXTRACTOR_DIGIT_WITH_DECIMALS = exports.FILE_EXTRACTOR_DIGIT = exports.FILE_EXTRACTOR_DATE = exports.FILE_EXTRACTOR_CUSTOM_REGEX = exports.FILE_EXTRACTOR_CREDIT_CARD = exports.FILE_EXTRACTOR_BITCOIN_WALLET = exports.FILE_EXTRACTOR_ALPHANUMERIC = exports.FILE_TEXT = exports.LISTFROMTEXT_RAPIDAPI_BASE_URL = exports.LISTFROMTEXT_RAPIDAPI_HOST = void 0;
// general
exports.LISTFROMTEXT_RAPIDAPI_HOST = 'listfromtext.p.rapidapi.com';
exports.LISTFROMTEXT_RAPIDAPI_BASE_URL = "https://" + exports.LISTFROMTEXT_RAPIDAPI_HOST;
var FILE = '/file';
var EXTRACTOR = '/extractor';
exports.FILE_TEXT = FILE + "/text";
exports.FILE_EXTRACTOR_ALPHANUMERIC = "" + FILE + EXTRACTOR + "/alphanumeric";
exports.FILE_EXTRACTOR_BITCOIN_WALLET = "" + FILE + EXTRACTOR + "/bitcoin-wallet";
exports.FILE_EXTRACTOR_CREDIT_CARD = "" + FILE + EXTRACTOR + "/credit-card";
exports.FILE_EXTRACTOR_CUSTOM_REGEX = "" + FILE + EXTRACTOR + "/custom-regex";
exports.FILE_EXTRACTOR_DATE = "" + FILE + EXTRACTOR + "/date";
exports.FILE_EXTRACTOR_DIGIT = "" + FILE + EXTRACTOR + "/digit";
exports.FILE_EXTRACTOR_DIGIT_WITH_DECIMALS = "" + FILE + EXTRACTOR + "/digit-with-decimals";
exports.FILE_EXTRACTOR_EMAIL = "" + FILE + EXTRACTOR + "/email";
exports.FILE_EXTRACTOR_FILE_EXTENSION = "" + FILE + EXTRACTOR + "/file-extension";
exports.FILE_EXTRACTOR_HANDLE = "" + FILE + EXTRACTOR + "/handle";
exports.FILE_EXTRACTOR_HASHTAG = "" + FILE + EXTRACTOR + "/hashtag";
exports.FILE_EXTRACTOR_HEX_COLOR = "" + FILE + EXTRACTOR + "/hex-color";
exports.FILE_EXTRACTOR_IBAN = "" + FILE + EXTRACTOR + "/iban";
exports.FILE_EXTRACTOR_IP_V_4 = "" + FILE + EXTRACTOR + "/ip-v-4";
exports.FILE_EXTRACTOR_IP_V_6 = "" + FILE + EXTRACTOR + "/ip-v-6";
exports.FILE_EXTRACTOR_ISBN = "" + FILE + EXTRACTOR + "/isbn";
exports.FILE_EXTRACTOR_NOUN = "" + FILE + EXTRACTOR + "/noun";
exports.FILE_EXTRACTOR_PHONE_NUMBER = "" + FILE + EXTRACTOR + "/phone-number";
exports.FILE_EXTRACTOR_SENTENCE = "" + FILE + EXTRACTOR + "/sentence";
exports.FILE_EXTRACTOR_SINGLE_XML_TAG = "" + FILE + EXTRACTOR + "/single-xml-tag";
exports.FILE_EXTRACTOR_WEB_DOMAIN = "" + FILE + EXTRACTOR + "/web-domain";
exports.FILE_EXTRACTOR_WEB_DOMAIN_NAME = "" + FILE + EXTRACTOR + "/web-domain-name";
exports.FILE_EXTRACTOR_WEBSITE_URL_HASH = "" + FILE + EXTRACTOR + "/website-url-hash";
exports.FILE_EXTRACTOR_WEBSITE_URL_PATHNAME = "" + FILE + EXTRACTOR + "/website-url-pathname";
exports.FILE_EXTRACTOR_WEBSITE_URL = "" + FILE + EXTRACTOR + "/website-url";
exports.FILE_EXTRACTOR_XML_TAG = "" + FILE + EXTRACTOR + "/xml-tag";
exports.EXTRACTOR_ALPHANUMERIC = EXTRACTOR + "/alphanumeric";
exports.EXTRACTOR_BITCOIN_WALLET = EXTRACTOR + "/bitcoin-wallet";
exports.EXTRACTOR_CREDIT_CARD = EXTRACTOR + "/credit-card";
exports.EXTRACTOR_CUSTOM_REGEX = EXTRACTOR + "/custom-regex";
exports.EXTRACTOR_DATE = EXTRACTOR + "/date";
exports.EXTRACTOR_DIGIT = EXTRACTOR + "/digit";
exports.EXTRACTOR_DIGIT_WITH_DECIMALS = EXTRACTOR + "/digit-with-decimals";
exports.EXTRACTOR_EMAIL = EXTRACTOR + "/email";
exports.EXTRACTOR_FILE_EXTENSION = EXTRACTOR + "/file-extension";
exports.EXTRACTOR_HANDLE = EXTRACTOR + "/handle";
exports.EXTRACTOR_HASHTAG = EXTRACTOR + "/hashtag";
exports.EXTRACTOR_HEX_COLOR = EXTRACTOR + "/hex-color";
exports.EXTRACTOR_IBAN = EXTRACTOR + "/iban";
exports.EXTRACTOR_IP_V_4 = EXTRACTOR + "/ip-v-4";
exports.EXTRACTOR_IP_V_6 = EXTRACTOR + "/ip-v-6";
exports.EXTRACTOR_ISBN = EXTRACTOR + "/isbn";
exports.EXTRACTOR_NOUN = EXTRACTOR + "/noun";
exports.EXTRACTOR_PHONE_NUMBER = EXTRACTOR + "/phone-number";
exports.EXTRACTOR_SENTENCE = EXTRACTOR + "/sentence";
exports.EXTRACTOR_SINGLE_XML_TAG = EXTRACTOR + "/single-xml-tag";
exports.EXTRACTOR_WEB_DOMAIN = EXTRACTOR + "/web-domain";
exports.EXTRACTOR_WEB_DOMAIN_NAME = EXTRACTOR + "/web-domain-name";
exports.EXTRACTOR_WEBSITE_URL_HASH = EXTRACTOR + "/website-url-hash";
exports.EXTRACTOR_WEBSITE_URL_PATHNAME = EXTRACTOR + "/website-url-pathname";
exports.EXTRACTOR_WEBSITE_URL = EXTRACTOR + "/website-url";
exports.EXTRACTOR_XML_TAG = EXTRACTOR + "/xml-tag";
exports.ENDPOINTS = [
    exports.FILE_TEXT,
    exports.FILE_EXTRACTOR_ALPHANUMERIC,
    exports.FILE_EXTRACTOR_BITCOIN_WALLET,
    exports.FILE_EXTRACTOR_CREDIT_CARD,
    exports.FILE_EXTRACTOR_CUSTOM_REGEX,
    exports.FILE_EXTRACTOR_DATE,
    exports.FILE_EXTRACTOR_DIGIT,
    exports.FILE_EXTRACTOR_DIGIT_WITH_DECIMALS,
    exports.FILE_EXTRACTOR_EMAIL,
    exports.FILE_EXTRACTOR_FILE_EXTENSION,
    exports.FILE_EXTRACTOR_HANDLE,
    exports.FILE_EXTRACTOR_HASHTAG,
    exports.FILE_EXTRACTOR_HEX_COLOR,
    exports.FILE_EXTRACTOR_IBAN,
    exports.FILE_EXTRACTOR_IP_V_4,
    exports.FILE_EXTRACTOR_IP_V_6,
    exports.FILE_EXTRACTOR_ISBN,
    exports.FILE_EXTRACTOR_NOUN,
    exports.FILE_EXTRACTOR_PHONE_NUMBER,
    exports.FILE_EXTRACTOR_SENTENCE,
    exports.FILE_EXTRACTOR_SINGLE_XML_TAG,
    exports.FILE_EXTRACTOR_WEB_DOMAIN,
    exports.FILE_EXTRACTOR_WEB_DOMAIN_NAME,
    exports.FILE_EXTRACTOR_WEBSITE_URL_HASH,
    exports.FILE_EXTRACTOR_WEBSITE_URL_PATHNAME,
    exports.FILE_EXTRACTOR_WEBSITE_URL,
    exports.FILE_EXTRACTOR_XML_TAG,
    exports.EXTRACTOR_ALPHANUMERIC,
    exports.EXTRACTOR_BITCOIN_WALLET,
    exports.EXTRACTOR_CREDIT_CARD,
    exports.EXTRACTOR_CUSTOM_REGEX,
    exports.EXTRACTOR_DATE,
    exports.EXTRACTOR_DIGIT,
    exports.EXTRACTOR_DIGIT_WITH_DECIMALS,
    exports.EXTRACTOR_EMAIL,
    exports.EXTRACTOR_FILE_EXTENSION,
    exports.EXTRACTOR_HANDLE,
    exports.EXTRACTOR_HASHTAG,
    exports.EXTRACTOR_HEX_COLOR,
    exports.EXTRACTOR_IBAN,
    exports.EXTRACTOR_IP_V_4,
    exports.EXTRACTOR_IP_V_6,
    exports.EXTRACTOR_ISBN,
    exports.EXTRACTOR_NOUN,
    exports.EXTRACTOR_PHONE_NUMBER,
    exports.EXTRACTOR_SENTENCE,
    exports.EXTRACTOR_SINGLE_XML_TAG,
    exports.EXTRACTOR_WEB_DOMAIN,
    exports.EXTRACTOR_WEB_DOMAIN_NAME,
    exports.EXTRACTOR_WEBSITE_URL_HASH,
    exports.EXTRACTOR_WEBSITE_URL_PATHNAME,
    exports.EXTRACTOR_WEBSITE_URL,
    exports.EXTRACTOR_XML_TAG,
];
