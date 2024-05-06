import express from "express";
import  {getAll, getOneById, updateById, deleteById, create, createImage} from "./controllers/planets.js"
import "express-async-errors"
import morgan from "morgan";
import dotenv from 'dotenv';
dotenv.config();
import multer from "multer";
import { logIn, signUp, logOut } from "./controllers/users.js";
import authorization from "./controllers/authorization.js";
import "passport";

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./uploads")
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    }
})


const  upload = multer({storage}) 

const app = express();
const port = process.env.PORT || 3000;


//hacer uso de archivos en la parte de front app.use("/nombre de la carpeta")
app.use("/uploads", express.static("uploads"));
app.use("/static", express.static("static"))


//middleware
app.use(express.json());
app.use(morgan("dev"));



//pedidos get
app.get("/api/planets", getAll);

app.get("/api/planets/:id", getOneById);

//pedidos post
app.post("/api/planets/", create);
app.post("/api/planets/:id/image", upload.single("image"), createImage)


//pedidos put
app.put("/api/planets/:id", updateById)


//pedidos delete

app.delete("/api/planets/:id", deleteById);


//pedidos con passport 
app.post("/api/users/login", logIn);
app.post("/api/users/sigup", signUp);
app.get("/api/users/logout", authorization, logOut);




//start server
app.listen(port, () => {
    console.log(`Usando http://localhost:${port}`);
})



