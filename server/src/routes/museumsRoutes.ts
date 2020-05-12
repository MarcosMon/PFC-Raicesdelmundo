import { Router} from 'express';

import museumsController from '../controller/museumsController';

class MuseumsRoutes{

    public router : Router = Router();

    constructor(){
        this.config();
    }
    config(): void{
        this.router.get('/', museumsController.list );
        this.router.get('/:id', museumsController.getOne );
        this.router.post('/', museumsController.create);
    }

}

const museumsRoutes = new MuseumsRoutes();
export default museumsRoutes.router;