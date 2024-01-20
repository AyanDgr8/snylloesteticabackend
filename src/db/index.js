// src/db/index.js


import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            // Add more options as needed
        });

        console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.error("MONGODB connection FAILED ", error.message);
        throw error; // Throw the error to be handled by the calling code
    }
}

export default connectDB;
