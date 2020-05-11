"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class MuseumsRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', (req, res) => res.send('Museum'));
    }
}
const museumsRoutes = new MuseumsRoutes();
exports.default = museumsRoutes.router;
