import { Personajes } from "../models/Personajes.models.js";

export const findAll = async (req, res) => {
    let { search } = req.query;

    try {
        let personajes = await Personajes.findAll({
            order: [["nombre", "ASC"]],
        });

        if (!search) {
            return res
                .status(200)
                .json({
                    code: 200,
                    message: "Personajes encontrados",
                    data: personajes,
                });
        }

        const results = personajes.filter((personaje) =>
            personaje.nombre.toLowerCase().includes(search.toLowerCase())
        );

        console.log(search);
        res.status(200).json({
            code: 200,
            message: "Personajes encontrados",
            data: results,
        });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({
            code: 500,
            message: "Error interno del servidor",
        });
    }
};

export const createCharacter = async (req, res) => {
    try {
        let { nombre, reino, raza, apariciones, imagen, descripcion, historia } = req.body;
        console.log(req.body);
        let newCharacter = await Personajes.create({
            nombre,
            reino,
            raza,
            apariciones,
            imagen,
            descripcion,
            historia
        });
        res.status(201).json({
            code: 201,
            message: "Personajes creado con éxtito",
            data: newCharacter,
        });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({
            code: 500,
            message: "Error interno del servidor",
        });
    }
};

export const deleteCharacter = async (req, res) => {
    try {
        let id = req.params.id;
        let personaje = await Personajes.findOne({
            where:{
                id
            }
            
        })

        if(!personaje){
            res.status(400).json({
                code: 400,
                message: "El Personaje no existe en la base de datos",
            });
        }
        
        await Personajes.destroy({
            where: {
                id,
            },
        });
        res.status(200).json({
            code: 200,
            message: "Personaje Eliminado Con Éxito",
        });
    } catch (error) {
        res.status(500).json({
            code: 500,
            message: "No se pudo eliminar el personaje",
        });
    }
};

export const updateCharacter = async (req, res) => {
    try {
        let id = req.params.id;
        let { nombre, reino, raza, descripcion, apariciones, imagen, historia } = req.body;

        let datos = {
            nombre,
            reino,
            raza,
            descripcion,
            apariciones,
            imagen,
            historia
        };
        let personaje = await Personajes.findOne({
            where: {
                id,
            },
        });
        if (!personaje) {
            return res
                .status(400)
                .json({
                    code: 400,
                    message: "Personaje No Existe en la base de datos",
                });
        }

        if(!nombre || !reino || !raza || !descripcion || !apariciones || !imagen || !historia)return res
        .status(400)
        .json({
            code: 400,
            message: "No pueden haber campos vacíos",
        });

        await Personajes.update(datos, {
            where: {
                id,
            },
        });

        let personajeModificado = await Personajes.findOne({
            where: {
                id,
            },
        });

        res.status(200).json({
            code: 200,
            message: "Personaje modificado Con Éxito",
            data: personajeModificado,
        });
    } catch (error) {
        res.status(500).json({
            code: 500,
            message: "Error interno del servidor",
        });
    }
};

export const findOne = async (req, res) => {
    try {
        let id = req.params.id;
        console.log(id);
        let personaje = await Personajes.findOne({
            where: {
                id,
            },
        });
        res.status(200).json({
            code: 200,
            message: "Personaje encontrado Con Éxito",
            data: personaje,
        });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({
            code: 500,
            message: "Error interno del servidor",
        });
    }
};
