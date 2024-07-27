import express from 'express'
import dotenv from "dotenv";
import cors from "cors";
import connectDb from './config/db.js';
import adminRouter from './routers/adminRoutes.js';
import cookieParser from "cookie-parser";

const app =express()

connectDb()


  app.use(express.json());
app.use(cookieParser())

const corsOptions = {
    origin: 'http://localhost:5173',
    methods: 'GET,POST,PUT,DELETE,OPTIONS',
    allowedHeaders: 'Content-Type,Authorization'
};

app.use(cors(corsOptions));

app.use('/admin',adminRouter,)


app.use(express.urlencoded({ extended: true }));



app.listen(7007,()=>{
    console.log('Sever is running on port 7007')
})