import { app } from "./src/app.js";
import { sequelize } from "./src/database/database.js"

//MODELS

import "./src/models/Personajes.models.js";
import "./src/models/Usuarios.models.js";
//Levantar servidor y conectarse a la base de datos
const PORT = 3000;

const main = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync({ force: false, alter: true });
        app.listen(PORT, () => {
            console.log(`Servidor escuchando en el puerto: ${PORT}`);
        })
    } catch (error) {
        console.log("Ha ocurrido un error", error);
    }
};

main();