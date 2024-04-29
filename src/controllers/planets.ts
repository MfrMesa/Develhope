import Joi from "joi";
import {Request, Response} from "express"

//validacion con joi
const planetSchema = Joi.object({
    id: Joi.number().integer().required(),
    name: Joi.string().required()
});


//routes
type Planet = {
    id: number;
    name: string;
}

type Planets = Planet[];


let planets : Planets = [
    {id: 1, name: "Tierra"},
    {id: 2, name: "Marte"},
]



const getAll = (req: Request, res: Response) => {
    res.status(200).json(planets);
};

const getOneById =   (req: Request, res: Response) => {
    const {id} = req.params;
    const planet = planets.find(p => p.id === Number(id))
    res.status(200).json(planet);
};

const create = (req: Request, res: Response) => {
    const { error } = planetSchema.validate(req.body);
    if (error) return res.status(400).json({ mensaje: error.details[0].message });

    const {id, name} = req.body;
    const newPlanet: Planet = {id: id, name};
    planets = [...planets, newPlanet];

    console.log(planets);
    res.status(201).json({mensaje: "Planeta creado"});
}

const updateById = (req: Request, res: Response) => {
    const { error } = planetSchema.validate(req.params.id);
    if (error) return res.status(400).json({ mensaje: error.details[0].message });

    const {id} = req.params;
    const {name} = req.body;
    planets = planets.map ( p => p.id === Number(id) ? ({...p, name}) : p)
    console.log(planets)

    res.status(200).json({mensaje: "todo bien"})
}

const deleteById = (req: Request, res: Response) => {
    const { error } = planetSchema.validate(req.params.id);
    if (error) return res.status(400).json({ mensaje: error.details[0].message });

    const {id} = req.params;
    planets = planets.filter((p) => p.id !== Number(id))

    res.status(200).json({mensaje: "Planeta eliminado"});
}

export {getAll, getOneById, updateById, deleteById, create}