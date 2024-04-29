import express from "express";
import "express-async-errors"
import morgan from "morgan";
import dotenv from 'dotenv';
dotenv.config();


const app = express();
const port = process.env.PORT || 3000;

//middleware
app.use(express.json());
app.use(morgan("dev"));


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
