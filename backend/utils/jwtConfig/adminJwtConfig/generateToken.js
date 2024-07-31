import jwt from "jsonwebtoken";
import dotenv from 'dotenv';
dotenv.config();

const generateToken = (res, adminId) => {
  const token = jwt.sign({ adminId, role: "admin" }, process.env.JWT_SECRETKEY_ADMIN, {
    expiresIn: "40d",
  });

  res.cookie("adminJwt", token, {
    httpOnly: true,
    secure: false, // Set to false for HTTP
    sameSite: 'strict', // 'strict' or 'lax' based on your needs
    maxAge: 40 * 24 * 60 * 60 * 1000,
    domain: 'balady.org.in', // Ensure this matches your domain without protocol
    path: '/', 
  });
  

  console.log(token,'token')
  return token;
};

export default generateToken;
