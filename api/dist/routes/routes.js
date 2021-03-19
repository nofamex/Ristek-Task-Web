"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var V1 = express_1.Router();
V1.get('/', function (req, res) {
    res.send('Hello');
});
module.exports = V1;
