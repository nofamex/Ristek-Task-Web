"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http_status_1 = require("http-status");
var DEFAULT_API_ERROR_TITLE = 'Internal Server Error.';
var DEFAULT_API_ERROR_MESSAGE = 'Something is not working in the back-end. Please contact back-end team to resolve this issue.';
var ApiError = /** @class */ (function () {
    function ApiError(statusCode, title, message) {
        this._title = title || DEFAULT_API_ERROR_TITLE;
        this._statusCode = statusCode || http_status_1.INTERNAL_SERVER_ERROR;
        this._message = message || DEFAULT_API_ERROR_MESSAGE;
    }
    Object.defineProperty(ApiError.prototype, "statusCode", {
        get: function () {
            return this._statusCode;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiError.prototype, "title", {
        get: function () {
            return this._title;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiError.prototype, "message", {
        get: function () {
            return this._message;
        },
        enumerable: false,
        configurable: true
    });
    return ApiError;
}());
exports.default = ApiError;
