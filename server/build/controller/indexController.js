"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class IndexController {
    index(req, res) {
        res.json({ text: 'API is /api/museums' });
    }
}
exports.indexController = new IndexController();
