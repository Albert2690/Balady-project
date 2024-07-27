import express from 'express'
import dotenv from "dotenv";
import cors from "cors";
import connectDb from './config/db.js';
import adminRouter from './routers/adminRoutes.js';

const app =express()

const router = express.Router()

app.use('/admin',adminRouter)
connectDb()
app.use(cors())



app.listen(7007,()=>{
    console.log('Sever is running on port 7007')
})