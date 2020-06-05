import { Router} from 'express';

import kpiController from '../controller/kpiController';
import signInController from '../controller/signinController';


class KpiRoutes{

    public router : Router = Router();

    constructor(){
        this.config();
    }
    config(): void{
        this.router.get('/:id', kpiController.listMyMuseumsKPI );
        this.router.post('/', kpiController.create);
        this.router.put('/:id', kpiController.update);
    }

}

const kpiRoutes = new KpiRoutes();
export default kpiRoutes.router;