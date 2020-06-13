import {Request, Response} from 'express';
import pool from '../database';

class TicketsController{

    public async getListTicketsByUser(req: Request, res: Response) {
        const id = req.params.id;
        console.log(id);
        await pool.query("select tickets.id, users.username , tickets.comment, tickets.subject, tickets.status, tickets.type, tickets.created_at " +
        " from users INNER JOIN tickets  ON users.id = tickets.id_user  where tickets.id_user = " + id + " order by created_at asc" , function (err : any, result : any, fields : any) {
        if (err) throw err;
        res.json(result);
        });
    } 
    public async getListTickets(req: Request, res: Response) {
        const id = req.params.id;
        await pool.query("select tickets.id, users.username , tickets.comment, tickets.subject, tickets.status, tickets.type, tickets.created_at " +
        " from users INNER JOIN tickets  ON users.id = tickets.id_user order by created_at asc" , function (err : any, result : any, fields : any) {
        if (err) throw err;
        res.json(result);
        });
    } 
    
    public async create(req: Request, res: Response): Promise<void> {
        await pool.query("INSERT INTO tickets set ?", [req.body]);
        console.log(req.body);

        res.json({ mensaje: "Ticket created" });
    }
    public async delete (req : Request, res : Response): Promise<void>{
        const { id_user } = req.params;
        await pool.query('DELETE FROM tickets WHERE id = ?', [id_user]);
        res.json({message: ' tickets were deleted'});
    }
    public async update (req : Request, res : Response): Promise<void>{
        const  { id } = req.params;
        await pool.query('UPDATE tickets set ? WHERE id = ?', [req.body, id]);
        res.json({message: 'The ticket status was updated'});
    }

}


const  ticketsController = new TicketsController();
export default ticketsController;