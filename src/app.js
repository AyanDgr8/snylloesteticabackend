// src/app.js


import express from "express";
import cors from "cors";
// import router from './routes/router.js';


const app = express();

app.use(express.json());
app.use(cors());

// app.use(router); 

export { app };