"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const museumsController_1 = __importDefault(require("../controller/museumsController"));
class MuseumsRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', museumsController_1.default.list);
        this.router.get('/:id', museumsController_1.default.listMyMuseums);
        this.router.get('/:id', museumsController_1.default.getOne);
        this.router.post('/', museumsController_1.default.create);
        this.router.delete('/:id', museumsController_1.default.delete);
        this.router.put('/:id', museumsController_1.default.update);
    }
}
const museumsRoutes = new MuseumsRoutes();
exports.default = museumsRoutes.router;
