import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

export const dbConnection = async() => {

    try {
        mongoose.set('strictQuery', true);
        await mongoose.connect(process.env.URL_DB);
        console.log("😎😎 db conectada");
    } catch (error) {
        console.log("😒😒" + error);
    }
}