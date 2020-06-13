"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const commentsController_1 = __importDefault(require("../controller/commentsController"));
class CommentsRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/:id', commentsController_1.default.getListCommentsByMuseum),
            this.router.post('/', commentsController_1.default.create),
            this.router.delete('/:id', commentsController_1.default.delete);
    }
}
const commentsRoutes = new CommentsRoutes();
exports.default = commentsRoutes.router;
