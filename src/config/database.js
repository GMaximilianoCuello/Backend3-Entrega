import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config()

const MONGODB_URL = process.env.MONGODB_URL

const connectDB = async () => {
    await mongoose.connect(MONGODB_URL)
    .then(()=> {
        console.log("Conectado a la base de datos")
    })
    .catch(error => {
        console.error("Error al concectar con la base de datos", error)
    })
}

export default connectDB