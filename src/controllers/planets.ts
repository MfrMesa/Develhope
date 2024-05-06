import Joi from "joi";
import {Request, Response} from "express"
import { db } from "../db";


//validacion con joi
const planetSchema = Joi.object({
    id: Joi.number().integer().required(),
    name: Joi.string().required()
});




const getAll = async (req: Request, res: Response) => {
    const planets = await db.many("SELECT * FROM planets;")
    res.status(200).json(planets);
};

const getOneById = async (req: Request, res: Response) => {
    const { id } = req.params;
    const planet = await db.oneOrNone("SELECT * FROM planets WHERE id=$1;", Number(id));
    res.status(200).json(planet);
};

const create = async (req: Request, res: Response) => {
    const { error } = planetSchema.validate(req.body);
    if (error) return res.status(400).json({ mensaje: error.details[0].message });

    const {name} = req.body;
    const newPlanet = {name};
    // planets = [...planets, newPlanet];
    await db.none("INSERT INTO planets (name) VALUES ($1)", name)


    res.status(201).json({mensaje: "Planeta creado"});
}


const updateById = async (req: Request, res: Response) => {

    const {id} = req.params;
    const {name} = req.body;

    await db.none("UPDATE planets SET name=$2 WHERE id=$1", [id, name])

    res.status(200).json({mensaje: "todo bien"})
}



const deleteById = async (req: Request, res: Response) => {
    const { error } = planetSchema.validate(req.params.id);
    if (error) return res.status(400).json({ mensaje: error.details[0].message });

    const {id} = req.params;
    await db.none("DELETE FROM planets WHERE id=$1", Number(id))
    res.status(200).json({mensaje: "Planeta eliminado"});
}


    const createImage = async (req: Request, res: Response) => {
        const {id} = req.params;
        const filename = req.file?.path;

        if (filename){
            db.none("UPDATE planets SET image=$2 WHERE id=$1", [id, filename])
            res.status(201).json({mensaje:"Imagen cargada"});
        }else{
            res.status(400).json({mensaje: "Imagen no cargada"});
        }
    };



export {getAll, getOneById, updateById, deleteById, create, createImage}