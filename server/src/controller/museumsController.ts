import {Request, Response} from 'express';

import pool from '../database';

class MuseumsController{

    public index (req : Request, res : Response) {
        pool.query('DESCRIBE museums');
        res.json('museums');
        
    }

}

const  museumsController = new MuseumsController();
export default museumsController;