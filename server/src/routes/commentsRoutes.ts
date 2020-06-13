import { Router} from 'express';

import commentsController from '../controller/commentsController';

class CommentsRoutes{

    public router : Router = Router();

    constructor(){
        this.config();
    }
    config(): void{
        this.router.get('/:id', commentsController.getListCommentsByMuseum),
        this.router.post('/', commentsController.create),
        this.router.delete('/:id', commentsController.delete);

    }

}

const commentsRoutes = new CommentsRoutes();
export default commentsRoutes.router;