"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const signinController_1 = __importDefault(require("../controller/signinController"));
class SignInRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.post('/', signinController_1.default.list);
    }
}
const signInRoutes = new SignInRoutes();
exports.default = signInRoutes.router;
