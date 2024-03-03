import express, { Express } from "express";
import * as database from "./config/database";
import dotenv from "dotenv";

import clientRoutes from "./routes/client/index.router";
dotenv.config();

database.connect();

const app: Express = express();
const port: number | string = process.env.PORT || 3000;

app.set("views","./views");
app.set("view engine","pug");

//client routes
clientRoutes(app);

app.listen(port,() => {
    console.log("App listening on port ${port}");
});