import * as express from "express";
import * as bodyParser from "body-parser";
import * as cookieParser from "cookie-parser";
import * as cors from "cors";
import { Application, Request, Response } from "express";
import { User } from "../interfaces/user";
import { authRoute } from "../routes/auth";
import { authenticateRoute } from "../routes/authenticate";
import { AppConfig } from "../interfaces/app-config";
import { APP_CONFIG } from "../config";
import { AuthStrategies } from "./auth-strategies";
import * as mongoose from "mongoose";
import { RestApiMiddlewareFactory } from "../middleware/factories/rest-api.middleware.factory";
import { UserModel } from "../models/user.model";
import { jwtCheck } from "../middleware/jwt-check.middleware";

import { authorize, MongooseHandler } from "forms-common-libraries";
import { PermissionChecker } from "../middleware/permissions-check.middleware";
import { permissionsGet } from "../middleware/permissions-get.middleware";
import { getUserPermissions } from "../routes/get-user-permissions";
import { Permission } from "../interfaces/permission";
import { PermissionModel } from "../models/permission.model";
import * as passport from "passport";

export class Server {

    private _app: Application;

    private _connectToDb(): Promise<any> {
        return mongoose.connect(APP_CONFIG.mongoDbUrl);
    }
    
    public start(): void {
        console.log(`Connecting to MongoDB at address ${APP_CONFIG.mongoDbUrl}`);
        this._connectToDb().then(() => {
            console.log("Connected")
            this._app.listen(APP_CONFIG.port);
            console.log("server started at port " + APP_CONFIG.port);
        })
        .catch((err: Error) => {
            console.error(err);
        });
    }
    constructor() {
        AuthStrategies.initStatrategies();
        this._app = express();
        this._app.use(bodyParser.json());
        this._app.use(cors({
            origin: "*",
            exposedHeaders: [
                'Content-Range'
            ]
        }));
        this._app.options("*", cors());
        this._app.use(cookieParser());
        this._app.use(bodyParser.urlencoded({
            extended: true
        }));
        this._app.post("/auth", passport.authenticate(APP_CONFIG.authStrategy, {
            session: false
        }));
        this._app.post("/auth", permissionsGet);
        this._app.post(
            "/auth",
            authRoute);
        this._app.get(
            "/auth",
            authorize(APP_CONFIG.jwtSecret));
        this._app.get(
            "/auth",
            authenticateRoute);

        this._app.get("/permissions", authorize(APP_CONFIG.jwtSecret));
        this._app.get("/permissions", permissionsGet);
        this._app.get("/permissions", getUserPermissions);

        this._app.use("/rest/*", authorize(APP_CONFIG.jwtSecret));
        this._app.use("/rest/*", permissionsGet);
        this._app.use("/rest", (new PermissionChecker()).router);
        this._app.use(
            "/rest/users", (new MongooseHandler<User>(UserModel, "username")).getRouter());

        this._app.use(
            "/rest/permissions", (new MongooseHandler<Permission>(PermissionModel, "name")).getRouter());
    }
}