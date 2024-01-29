// src/db/index.js

import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    const uri = `${process.env.MONGODB_URI}/${DB_NAME}`;

    const options = {
      // useNewUrlParser: true,
      // useUnifiedTopology: true,
      connectTimeoutMS: 10000, // (10 seconds)
    };

    const connectionInstance = await mongoose.connect(uri, options);

    console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);
  } catch (error) {
    console.error("MONGODB connection FAILED ", error.message);
    throw error;
  }
};

export default connectDB;