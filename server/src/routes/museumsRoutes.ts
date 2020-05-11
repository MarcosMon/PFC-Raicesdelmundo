import { Router} from 'express';

class MuseumsRoutes{

    public router : Router = Router();

    constructor(){
        this.config();
    }
    config(): void{
        this.router.get('/', (req, res) => res.send('Museum'));
    }

}

const museumsRoutes = new MuseumsRoutes();
export default museumsRoutes.router;