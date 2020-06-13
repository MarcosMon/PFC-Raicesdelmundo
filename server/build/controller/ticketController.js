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
class TicketsController {
    getListTicketsByUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = req.params.id;
            console.log(id);
            yield database_1.default.query("select tickets.id, users.username , tickets.comment, tickets.subject, tickets.status, tickets.type, tickets.created_at " +
                " from users INNER JOIN tickets  ON users.id = tickets.id_user  where tickets.id_user = " + id + " order by created_at asc", function (err, result, fields) {
                if (err)
                    throw err;
                res.json(result);
            });
        });
    }
    getListTickets(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = req.params.id;
            yield database_1.default.query("select tickets.id, users.username , tickets.comment, tickets.subject, tickets.status, tickets.type, tickets.created_at " +
                " from users INNER JOIN tickets  ON users.id = tickets.id_user order by created_at asc", function (err, result, fields) {
                if (err)
                    throw err;
                res.json(result);
            });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query("INSERT INTO tickets set ?", [req.body]);
            console.log(req.body);
            res.json({ mensaje: "Ticket created" });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id_user } = req.params;
            yield database_1.default.query('DELETE FROM tickets WHERE id = ?', [id_user]);
            res.json({ message: ' tickets were deleted' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE tickets set ? WHERE id = ?', [req.body, id]);
            res.json({ message: 'The ticket status was updated' });
        });
    }
}
const ticketsController = new TicketsController();
exports.default = ticketsController;
