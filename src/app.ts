
//Config database
import express from "express";
import morgan from "morgan";
import cors from 'cors';

//star module express
const app= express();

app.use(morgan('dev'));
app.use(cors());

export default app;
