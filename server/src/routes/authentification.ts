import { Router} from 'express';

import authentificationController from '../controller/authentificationController';

class Authentification{

    public router : Router = Router();

    constructor(){
        this.config();
    }
    config(): void{
        this.router.get('/', authentificationController.list );
        this.router.post('/', authentificationController.create);
        
    }

}

const authentification = new Authentification();
export default authentification.router;