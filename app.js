import "dotenv/config";
import express from "express";
import cors from "cors";
import { json } from "express";
import routes from './app/routes/index.js';
import dbConnect from "./config/posgress.js";

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(json());

/**
 * Aquí se hace la invocación de las rutas o endpoints
 * de toda la API Rest.
 */
app.use('/api/1/', routes);
/**
 * Aquí se hace la connect a la DB
 */
dbConnect();

app.listen(port, () => {
    console.log(`Run server http://localhost:${port}`);
});
