"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WrongPasswordError = exports.NoUserFoundError = exports.ExistingUserError = void 0;
var ApiError_1 = __importDefault(require("./ApiError"));
var http_status_1 = require("http-status");
var ExistingUserError = function () {
    return new ApiError_1.default(http_status_1.CONFLICT, 'Sign Up Failed', 'A user with same username already exist');
};
exports.ExistingUserError = ExistingUserError;
var NoUserFoundError = function () {
    return new ApiError_1.default(http_status_1.INTERNAL_SERVER_ERROR, 'Sign In Failed', 'There is no user with this username');
};
exports.NoUserFoundError = NoUserFoundError;
var WrongPasswordError = function () {
    return new ApiError_1.default(http_status_1.INTERNAL_SERVER_ERROR, 'Sign In Failed', 'Wrong password');
};
exports.WrongPasswordError = WrongPasswordError;
