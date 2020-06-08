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
class CommentsController {
    getListCommentsByMuseum(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = req.params.id;
            console.log(id);
            yield database_1.default.query("select users.username , comments.comment, comments.created_at " +
                " from users INNER JOIN comments  ON users.id = comments.id_user  where comments.id_museum = " + id + " order by created_at desc", function (err, result, fields) {
                if (err)
                    throw err;
                res.json(result);
            });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query("INSERT INTO comments set ?", [req.body]);
            console.log(req.body);
            res.json({ mensaje: "Comment created" });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM comments WHERE id_museum = ?', [id]);
            res.json({ message: 'museum comments were deleted' });
        });
    }
}
const commentsController = new CommentsController();
exports.default = commentsController;
