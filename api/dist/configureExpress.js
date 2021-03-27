"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
var express_1 = __importDefault(require("express"));
var authRouter_1 = __importDefault(require("./routes/authRouter"));
var blogsRouter_1 = __importDefault(require("./routes/blogsRouter"));
var commentsRouter_1 = __importDefault(require("./routes/commentsRouter"));
exports.app = express_1.default();
var apiRouter = express_1.default.Router();
var v1 = express_1.default.Router();
exports.app.use('/api', apiRouter);
apiRouter.use('/v1', v1);
v1.use(express_1.default.json(), express_1.default.urlencoded({ extended: true }));
v1.use('/auth', authRouter_1.default);
v1.use('/blogs', blogsRouter_1.default);
v1.use('/comment', commentsRouter_1.default);
