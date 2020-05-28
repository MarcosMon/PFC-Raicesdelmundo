import {Request, Response} from 'express';
import * as bcrypt from 'bcryptjs';
import Auth from '../lib/helpers';
import pool from '../database';

class SignInController{

    public async list (req : Request, res : Response): Promise<any>{
        console.log(req.body);
        const rows = await pool.query('SELECT * FROM users WHERE username = ?', req.body.username);
        const user = rows[0];
        if(rows.length > 0){
            
            Auth.compare(req.body.password,user.password).then((validUser) => {
                if(validUser){
                    res.json({message: 'respuesta ' + user.id + ' ' + user.username});    
                }
                else{
                    res.json({message: 'contraseña incorrecta'}); 
                }
           })
        }
        else{
            res.json({message: 'El usuario ' + req.body.username + ' No existe' }); 

        }
        
    }
    public async listMyMuseums(req: Request, res: Response): Promise<any> {
        
        const id = req.params.id;
        await pool.query("SELECT * FROM museums WHERE museums.user_id = " + id , 
        function (err : any, result : any) {
            if (err) throw err;
            if (result.length > 0) {
              res.json(result);
            } else {
              res.status(404).json({ text: "no tiene museos" });
            }
          });
        }
}


const  signInController = new SignInController();
export default signInController;