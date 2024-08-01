import jwt from "jsonwebtoken";
import dotenv from 'dotenv';

dotenv.config();

const generateToken = (res, adminId) => {
  const token = jwt.sign({ adminId, role: "admin" }, process.env.JWT_SECRETKEY_ADMIN, {
    expiresIn: "40d",
  });

  const isProduction = process.env.NODE_ENV === 'production';

  res.cookie("adminJwt", token, {
    httpOnly: false, 
    secure: isProduction,
    sameSite: 'strict', 
    maxAge: 40 * 24 * 60 * 60 * 1000,
  });

  console.log(token, 'token');
  return token;
};

export default generateToken;
