import jwt from "jsonwebtoken";
import dotenv from 'dotenv';
dotenv.config();

const generateToken = (res, adminId) => {
  const token = jwt.sign({ adminId, role: "admin" }, process.env.JWT_SECRETKEY_ADMIN, {
    expiresIn: "40d",
  });

  res.cookie("adminJwt", token, {
    httpOnly: false,
    secure: false, // Set to false for HTTP
    sameSite: 'strict', // 'strict' or 'lax' based on your needs
    maxAge: 40 * 24 * 60 * 60 * 1000,
  });
  

  console.log(token,'token')
  return token;
};

export default generateToken;
