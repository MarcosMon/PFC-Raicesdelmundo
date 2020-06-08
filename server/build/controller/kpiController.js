"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class KpiController {
    listMyMuseumsKPI(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = req.params.id;
            yield database_1.default.query("SELECT  k.id, m.name, k.webVisitClicks, k.webTicketBuy, k.amountOfComments, m.user_id from kpi as k INNER JOIN museums as m ON k.id_museum = m.id where  k.id_museum= " + id, function (err, result) {
                if (err)
                    throw err;
                if (result.length > 0) {
                    res.json(result);
                }
                else {
                    res.status(404).json({ text: "no tiene museos" });
                }
            });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            console.log(id);
            console.log(req.body);
            yield database_1.default.query('UPDATE kpi set ? WHERE id_museum = ?', [req.body, id]);
            res.json({ message: 'The kpi was updated' });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.body);
            yield database_1.default.query('INSERT INTO kpi set ?', [req.body]);
            res.json({ message: 'kpi Saved' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM kpi WHERE id_museum = ?', [id]);
            res.json({ message: 'The kpi was deleted' });
        });
    }
}
const kpiController = new KpiController();
exports.default = kpiController;
