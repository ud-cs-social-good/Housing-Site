import express from 'express';
import Mongoose from 'mongoose';
import BodyParser from 'body-parser';
import { ApiRouter } from './router';

class Application {
    public app: express.Application;
    public port: number;

    constructor() {
        this.app = express();
        this.port = +process.env.serverPort || 3000;
        this.app.use(BodyParser.urlencoded({ extended: false }));
        this.app.use(BodyParser.json());
        this.initCors();
    }

    // Starts the server on the port specified in the environment variable or on port 3000
    public start(): void {
        this.buildRoutes();
        this.app.listen(this.port, () => console.log("Server listening on port " + this.port + "!"));
    }

    // sets up to allow cross-origin support from any host. Change options to limit who can access API.
    // Without this, angular would not be able to access the API if it was on another server
    public initCors(): void {
        this.app.use(function(req: express.Request, res: express.Response, next: any) {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Methods", "PUT, GET, POST, DELETE, OPTIONS");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Credentials");
            res.header("Access-Control-Allow-Credentials", "true");
            next();
        }) 
    }
    
    // set up routes for the express server
    public buildRoutes(): void {
        this.app.use("/api", new ApiRouter().getRouter());
    }
}
new Application().start();