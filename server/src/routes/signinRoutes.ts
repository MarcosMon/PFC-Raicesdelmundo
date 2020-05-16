import { Router} from 'express';

import signInController from '../controller/signinController';

class SignInRoutes{

    public router : Router = Router();

    constructor(){
        this.config();
    }
    config(): void{
        this.router.get('/', signInController.list );
        
    }

}

const signInRoutes = new SignInRoutes();
export default signInRoutes.router;