import * as express from 'express';
import User, { IUser } from './models/userModel';
import { ObjectID } from 'mongodb';
import mongoose, { Schema, Document } from 'mongoose';

export class Controller {

    public setupDb(): void {
        // username:password
        const mongoDb = "URL";
        mongoose.connect(mongoDb,
            {useNewUrlParser: true,
            useUnifiedTopology: true});

        const db = mongoose.connection;
        db.on("error", console.error.bind(console, "MongoDB Connection error"));
    }
    
    public getUsers(req: express.Request, res: express.Response): void {
        req.app.locals.db.collection("users").find().toArray(function(err: any, results: any) {
            if (err) {
                console.log("GET USERS ERROR");
            } else {
                res.json(results);
            }
        });
    }

    public createUser(req: express.Request, res: express.Response): void {
        res.send("new user created");
        const newUser: IUser = new User({ username: req.body.user, password: req.body.password });
        newUser.save();
    }

    public updateUser(req: express.Request, res: express.Response): void {
        User.findByIdAndUpdate(req.params.id, req.body, {new: true}, function(err, model) {
            res.send("User has been updated");
        });
    }

    public deleteUser(req: express.Request, res: express.Response): void {
        User.findByIdAndDelete(req.params.id, function (err, model) {
            res.send("User deleted");
        });
    }

    public readUser(req: express.Request, res: express.Response): void {
        User.findById(req.params.id, function (err, results: any) {
            if (err) { console.log("Error reading user. Please try again."); }
            res.json(results);
        })
    }


}