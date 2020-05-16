"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authentificationController_1 = __importDefault(require("../controller/authentificationController"));
class Authentification {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', authentificationController_1.default.list);
        this.router.post('/', authentificationController_1.default.create);
    }
}
const authentification = new Authentification();
exports.default = authentification.router;
