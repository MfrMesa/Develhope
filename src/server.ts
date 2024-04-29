import express from "express";
import  {getAll, getOneById, updateById, deleteById, create} from "./controllers/planets.js"
import "express-async-errors"
import morgan from "morgan";
import dotenv from 'dotenv';
dotenv.config();


const app = express();
const port = process.env.PORT || 3000;

//middleware
app.use(express.json());
app.use(morgan("dev"));



//pedidos get
app.get("/api/planets", getAll);

app.get("/api/planets/:id", getOneById);

//pedidos post
app.post("/api/planets/", create);


//pedidos put
app.put("/api/planets/:id", updateById)


//pedidos delete

app.delete("/api/planets/:id", deleteById)


//start server
app.listen(port, () => {
    console.log(`Usando http://localhost:${port}`);
})


