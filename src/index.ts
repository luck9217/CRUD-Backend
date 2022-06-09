import express from "express";
import morgan from "morgan";
import cors from 'cors';

//star module express
const app= express();

app.use(morgan('dev'));
app.use(cors());

//try server
app.listen(3000);
console.log('Sever is listening on port',3000);


