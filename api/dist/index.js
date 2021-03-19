"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var v1 = require('./routes/routes');
var app = express_1.default();
var PORT = process.env.PORT || 5000;
app.use(express_1.default.json());
app.use('/v1', v1);
app.listen(PORT, function () { return console.log("Server is running on Port " + PORT); });
