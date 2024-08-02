import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import studentRouter from "./routers/studentRoutes.js";
import connectDb from "./config/db.js";
import adminRouter from "./routers/adminRoutes.js";
import cookieParser from "cookie-parser";
import path from 'path';

import { notFoundError, handler } from "./middlewares/errorHandlingMidlleware.js";

dotenv.config();

const app = express();

connectDb();

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

const corsOptions = {
  origin: process.env.CLIENT_URL || 'http://www.balady.org.in','http://timezy.site'
,
  methods: "GET,POST,PUT,DELETE,OPTIONS",
  allowedHeaders: "Content-Type,Authorization",
  credentials: true 
};

app.use(cors(corsOptions));

app.use("/admin", adminRouter);
app.use("/student", studentRouter);



if (process.env.NODE_ENV === "production") {
  console.log(process.env.NODE_ENV);
  console.log("hai", new Date().toLocaleString());
  const __dirname = path.resolve();
  const parentDir = path.join(__dirname, '..'); 
  console.log(parentDir);

  app.use(express.static(path.join(parentDir, '/frontend/dist')));

  app.get('*', (req, res) => res.sendFile(path.resolve(parentDir, 'frontend', 'dist', 'index.html')));
} else {
  app.get('/', (req, res) => {
    res.send("Server is Ready");
  });
}
app.use(notFoundError);
app.use(handler);

const PORT = process.env.PORT || 7007;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
