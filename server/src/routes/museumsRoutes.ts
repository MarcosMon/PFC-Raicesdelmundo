import { Router} from 'express';

import museumsController from '../controller/museumsController';

class MuseumsRoutes{

    public router : Router = Router();

    constructor(){
        this.config();
    }
    config(): void{
        this.router.get('/', museumsController.index );
    }

}

const museumsRoutes = new MuseumsRoutes();
export default museumsRoutes.router;