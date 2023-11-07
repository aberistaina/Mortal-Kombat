import express from "express"
import cors from "cors"
import morgan from "morgan"
import fileUpload from "express-fileupload";
import personajesRoutes  from "./routes/personajes.routes.js"
import usuariosRoutes  from "./routes/usuarios.routes.js"

import * as path from "path";
import { fileURLToPath } from "url";
const __dirname = path.dirname(fileURLToPath(import.meta.url));

export const app = express()

//MIDDLEWARES
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());
app.use(morgan("tiny"));
app.use(fileUpload());

//Carpeta Publica
app.use("/public", express.static(__dirname + "/public"));

//Endpoints
app.use("/api/v1/mortalkombat", personajesRoutes)
app.use("/api/v1/usuarios", usuariosRoutes)

