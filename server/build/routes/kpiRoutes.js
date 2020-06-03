"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const kpiController_1 = __importDefault(require("../controller/kpiController"));
class KpiRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/:id', kpiController_1.default.listMyMuseumsKPI);
        this.router.post('/', kpiController_1.default.create);
        this.router.put('/:id', kpiController_1.default.update);
    }
}
const kpiRoutes = new KpiRoutes();
exports.default = kpiRoutes.router;
