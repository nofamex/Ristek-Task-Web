"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertToken = void 0;
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var config_1 = __importDefault(require("../config"));
var ServiceError_1 = require("../error/ServiceError");
var convertToken = function (req, res, next) {
    var bearer = req.headers.authorization;
    if (!bearer) {
        res.send(ServiceError_1.UnauthorizedAccesError());
        return;
    }
    var token = bearer.split(' ')[1];
    var verified = jsonwebtoken_1.default.verify(token, config_1.default.JWT_SECRET_KEY);
    req.body.data = verified;
    next();
};
exports.convertToken = convertToken;
