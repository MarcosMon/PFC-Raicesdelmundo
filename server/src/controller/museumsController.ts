import {Request, Response} from 'express';

import pool from '../database';

class MuseumsController{

    public async list(req: Request, res: Response): Promise<any> {
        
        await pool.query("SELECT * FROM museums ", 
        function (err : any, result : any) {
            if (err) throw err;
            if (result.length > 0) {
              res.json(result);
            } else {
              res.status(404).json({ text: "No hay museos" });
            }
          });
        }

        
        public async getOne (req : Request, res : Response): Promise<any> {
            const { id } = req.params;
            const museums = await pool.query('SELECT * FROM museums WHERE id = ?', [id]);
            if  (museums.length > 0){
                return res.json(museums[0]);
            }
            res.status(404).json({text: "The museum doesn't exist "});
        }
        public async create (req : Request, res : Response): Promise<void> {
            await pool.query('INSERT INTO museums set ?', [req.body])
            res.json({ message : 'Museum Saved'}) 
        }
    
        public async delete (req : Request, res : Response): Promise<void>{
            const { id } = req.params;
            await pool.query('DELETE FROM museums WHERE id = ?', [id]);
            res.json({message: 'The museum was deleted'});
        }
    
        public async update (req : Request, res : Response): Promise<void>{
            const  { id } = req.params;
            await pool.query('UPDATE museums set ? WHERE id = ?', [req.body, id]);
            res.json({message: 'The museum was updated'});
        }
   

}

const  museumsController = new MuseumsController();
export default museumsController;