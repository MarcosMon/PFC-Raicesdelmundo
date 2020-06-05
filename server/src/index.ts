import express, {Application} from 'express';
import morgan from 'morgan';
import cors from 'cors';

import indexRoutes from './routes/indexRoutes';
import museumsRoutes from './routes/museumsRoutes';
import authentification from './routes/authentification';
import signinRoutes from './routes/signinRoutes';
import commentsRoutes from './routes/commentsRoutes';
import kpiRoutes from './routes/kpiRoutes';



class Server{

    public app: Application;

    constructor(){
        this.app = express();
        this.config();
        this.routes();
    }

    config(): void{
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: false}));
        
    }

    routes(): void{
        this.app.use('/', indexRoutes);
        this.app.use('/api/museums', museumsRoutes);
        this.app.use('/api/register', authentification);
        this.app.use('/api/login', signinRoutes);
        this.app.use('/api/comments', commentsRoutes);
        this.app.use('/api/kpi', kpiRoutes);
    }
    start(): void{
        this.app.listen(this.app.get('port'), () => {
            console.log('Server on port', this.app.get('port'))
        });
    }
}

const server = new Server();
server.start();