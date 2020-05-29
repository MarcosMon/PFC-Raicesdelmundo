import {Request, Response} from 'express';
import pool from '../database';

class CommentsController{

    public async getListCommentsByMuseum(req: Request, res: Response) {
        const id = req.params.id;
        console.log(id);
        await pool.query("select users.username , comments.comment, comments.created_at " +
        " from users INNER JOIN comments  ON users.id = comments.id_user  where comments.id_museum = " + id + " order by created_at desc" , function (err : any, result : any, fields : any) {
        if (err) throw err;
        res.json(result);
        });
    } 

    public async create(req: Request, res: Response): Promise<void> {
        await pool.query("INSERT INTO comments set ?", [req.body]);
        console.log(req.body);

        res.json({ mensaje: "comentario creado" });
    }

}


const  commentsController = new CommentsController();
export default commentsController;