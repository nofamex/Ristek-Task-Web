"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = require("dotenv");
var configureExpress_1 = require("./configureExpress");
dotenv_1.config();
var PORT = process.env.PORT || 5000;
configureExpress_1.app.listen(PORT, function () { return console.log("Server is running on Port " + PORT); });
