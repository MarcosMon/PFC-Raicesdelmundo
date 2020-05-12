import {Request, Response} from 'express';

import pool from '../database';

class MuseumsController{

    public async list(req: Request, res: Response) {
        await pool.query('SELECT * FROM museums', function (err : any, result : any, fields : any) {
            if (err) throw err;
            res.json(result);
        });
    }
    public async getOne (req : Request, res : Response): Promise<any> {
        const { id } = req.params;
        const museums = await pool.query('SELECT * FROM museums WHERE id = ?', [id]);
        console.log(museums);
        if  (museums.length > 0){
            return res.json(museums[0]);
        }
        res.status(404).json({text: "The museum doesn't exist "});
    }
   

}

const  museumsController = new MuseumsController();
export default museumsController;