import { Router} from 'express';

import ticketsController from '../controller/ticketController';

class TicketsRoutes{

    public router : Router = Router();

    constructor(){
        this.config();
    }
    config(): void{
        this.router.get('/:id', ticketsController.getListTicketsByUser),
        this.router.get('/', ticketsController.getListTickets)
        this.router.post('/', ticketsController.create),
        this.router.put('/:id', ticketsController.update),
        this.router.delete('/:id', ticketsController.delete);

    }

}

const ticketsRoutes = new TicketsRoutes();
export default ticketsRoutes.router;