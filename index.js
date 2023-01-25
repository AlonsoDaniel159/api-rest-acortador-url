import express from "express";
import { dbConnection } from "./database/config.js";
import cors from 'cors';
import dotenv from 'dotenv';
import authRouter from "./routes/auth.route.js";
dotenv.config();


//Crear el servidor express
const app = express();

//Configuración de cors
app.use(cors());

//Lectura y parseo del body
app.use(express.json());

//Base de datos
dbConnection();

//Rutas
app.use('/api/v1', authRouter)



app.listen(process.env.PORT, () => console.log(`hola desde el puerto ${process.env.PORT} 🔥`))