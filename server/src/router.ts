import * as express from 'express';
import { Controller } from './controller';

export class ApiRouter {
    private router: express.Router = express.Router();
    private controller: Controller = new Controller();

    // Creates the routes for this router and returns a populated router object
    public getRouter(): express.Router {

        this.controller.setupDb();
        
        // User endpoints
        this.router.get("/users", this.controller.getUsers);
        this.router.post("/users", this.controller.createUser);
        this.router.get("/users/:id", this.controller.readUser);
        this.router.put("/users/:id", this.controller.updateUser);
        this.router.delete("/users/:id", this.controller.deleteUser);

        return this.router;
    }
}