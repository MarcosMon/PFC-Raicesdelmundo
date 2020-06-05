import {Request, Response} from 'express';
import Auth from '../lib/helpers';
import pool from '../database';
import * as bcrypt from 'bcryptjs';

class AuthentificationController{

    public async list(req: Request, res: Response) {
        await pool.query('SELECT * FROM users', function (err : any, result : any, fields : any) {
            if (err) throw err;
            res.json(result);
        });
    }

    public async create (req : Request, res : Response): Promise<any> {
       let user;
       console.log(req.body);
       Auth.encryptPassword(req.body.password).then((hash) => {
         user ={
            username: req.body.username,
            password: hash,
            fullname : req.body.fullname
        }
         pool.query("INSERT INTO users SET ? ", user);
            res.json({message: 'Usuario creado'}); 
    })
    
        };
        
         
    }


const  authentificationController = new AuthentificationController();
export default authentificationController;