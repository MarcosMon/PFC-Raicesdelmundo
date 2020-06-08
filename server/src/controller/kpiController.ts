import {Request, Response} from 'express';

import pool from '../database';

class KpiController{

        
    public async listMyMuseumsKPI(req: Request, res: Response): Promise<any> {
        
        const id = req.params.id;
        await pool.query("SELECT  k.id, m.name, k.webVisitClicks, k.webTicketBuy, k.amountOfComments, m.user_id from kpi as k INNER JOIN museums as m ON k.id_museum = m.id where  k.id_museum= " + id , 
        function (err : any, result : any) {
            if (err) throw err;
            if (result.length > 0) {
              res.json(result);
            } else {
              res.status(404).json({ text: "no tiene museos" });
            }
          });
        }
        public async update (req : Request, res : Response): Promise<void>{
            const  { id } = req.params;
            console.log(id);
            console.log(req.body);
            await pool.query('UPDATE kpi set ? WHERE id_museum = ?', [req.body, id]);
            res.json({message: 'The kpi was updated'});
        }

        public async create (req : Request, res : Response): Promise<void> {
            console.log(req.body);
            await pool.query('INSERT INTO kpi set ?', [req.body])
            res.json({ message : 'kpi Saved'}) 
        }

        public async delete (req : Request, res : Response): Promise<void>{
          const { id } = req.params;
          await pool.query('DELETE FROM kpi WHERE id_museum = ?', [id]);
          res.json({message: 'The kpi was deleted'});
      }
   

}

const  kpiController = new KpiController();
export default kpiController;