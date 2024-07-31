import jwt from "jsonwebtoken";
import dotenv from 'dotenv';
dotenv.config();

const generateToken = (res, adminId) => {
  const token = jwt.sign({ adminId, role: "admin" }, process.env.JWT_SECRETKEY_ADMIN, {
    expiresIn: "40d",
  });

  res.cookie("adminJwt", token, {
    httpOnly: false,
    secure: process.env.NODE_ENV !== "development",
    sameSite: 'strict',
    maxAge: 40 * 24 * 60 * 60 * 1000, 
    domain: process.env.CLIENT_URL || 'http://www.balady.org.in',
    path: '/',
  });
  

  console.log(token,'token')
  return token;
};

export default generateToken;
