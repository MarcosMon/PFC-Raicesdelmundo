import { Router} from 'express';

import signInController from '../controller/signinController';

class SignInRoutes{

    public router : Router = Router();

    constructor(){
        this.config();
    }
    config(): void{
        this.router.post('/', signInController.list );
        this.router.get('/users/:id', signInController.listMyMuseums)

    }

}

const signInRoutes = new SignInRoutes();
export default signInRoutes.router;