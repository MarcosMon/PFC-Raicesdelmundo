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
                    res.json({message: 'respuesta ' + user.id + ' ' + user.username + ' ' + user.user_role });    
                }
                else{
                    res.json({message: 'contraseña incorrecta'}); 
                }
           })
        }
        else{
            res.json({message: 'El usuario ' + req.body.username + ' no existe' }); 

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
              res.status(404).json({ text: "No dispone de ningún Museo." });
            }
          });
        }
        public async listMyMuseumsKPIUser(req: Request, res: Response): Promise<any> {
        
            const id = req.params.id;
            await pool.query("SELECT  k.id, m.name, k.webVisitClicks, k.webTicketBuy, m.user_id from kpi as k INNER JOIN museums as m ON k.id_museum = m.id where  m.user_id= " + id , 
            function (err : any, result : any) {
                if (err) throw err;
                if (result.length > 0) {
                  res.json(result);
                } else {
                  res.status(404).json({ text: "No dispone de ningún Museo." });
                }
              });
            }
}


const  signInController = new SignInController();
export default signInController;