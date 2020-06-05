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
const helpers_1 = __importDefault(require("../lib/helpers"));
const database_1 = __importDefault(require("../database"));
class SignInController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.body);
            const rows = yield database_1.default.query('SELECT * FROM users WHERE username = ?', req.body.username);
            const user = rows[0];
            if (rows.length > 0) {
                helpers_1.default.compare(req.body.password, user.password).then((validUser) => {
                    if (validUser) {
                        res.json({ message: 'respuesta ' + user.id + ' ' + user.username });
                    }
                    else {
                        res.json({ message: 'contraseña incorrecta' });
                    }
                });
            }
            else {
                res.json({ message: 'El usuario ' + req.body.username + ' No existe' });
            }
        });
    }
    listMyMuseums(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = req.params.id;
            yield database_1.default.query("SELECT * FROM museums WHERE museums.user_id = " + id, function (err, result) {
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
    listMyMuseumsKPIUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = req.params.id;
            yield database_1.default.query("SELECT  k.id, m.name, k.webVisitClicks, k.webTicketBuy, k.amountOfComments, m.user_id from kpi as k INNER JOIN museums as m ON k.id_museum = m.id where  m.user_id= " + id, function (err, result) {
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
}
const signInController = new SignInController();
exports.default = signInController;
