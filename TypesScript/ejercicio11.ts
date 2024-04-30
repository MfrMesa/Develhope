import express from "express";
import "express-async-errors"
import morgan from "morgan";
import Joi from "joi";
import dotenv from 'dotenv';
dotenv.config();


const app = express();
const port = process.env.PORT || 3000;

//middleware
app.use(express.json());
app.use(morgan("dev"));


//validacion con joi
const planetSchema = Joi.object({
    id: Joi.number().required(),
    name: Joi.string().required()
});



//routes
type Planet = {
    id: number;
    name: string;
}

type Planets = Planet[];


let planets = [
    {id: 1, name: "Tierra"},
    {id: 2, name: "Marte"},
]


//pedidos get
app.get("/api/planets", (request, response) => {
    response.status(200).json(planets);
});

app.get("/api/planets/:id", (request, response) => {
    const {id} = request.params;
    const planet = planets.find(p => p.id === Number(id))
    response.status(200).json(planet);
});



//pedidos post
app.post("/api/planets/", (req, res) => {
    const { error } = planetSchema.validate(req.body);
    if (error) return res.status(400).json({ mensaje: error.details[0].message });

    const {id, name} = req.body;
    const newPlanet = {id, name};
    planets = [...planets, newPlanet];

    console.log(planets);
    res.status(201).json({mensaje: "Planeta creado"});
});



//pedidos put
app.put("/api/planets/:id", (req, res) => {
    const { error } = planetSchema.validate(req.body);
    if (error) return res.status(400).json({ mensaje: error.details[0].message });

    const {id, name} = req.body;
    planets = planets.map ( p => p.id === Number(id) ? ({...p, name}) : p)
    console.log(planets)

    res.status(200).json({mensaje: "todo bien"})
})


//pedidos delete

app.delete("/api/planets/:id", (req, res) => {

    const {id} = req.params;
    planets = planets.filter((p) => p.id !== Number(id))

    res.status(200).json({mensaje: "Planeta eliminado"});
})



