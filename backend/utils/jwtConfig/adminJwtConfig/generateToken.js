import jwt from "jsonwebtoken";
import dotenv from 'dotenv';
dotenv.config();

const generateToken = (res, adminId) => {
  const token = jwt.sign({ adminId, role: "admin" }, process.env.JWT_SECRETKEY_ADMIN, {
    expiresIn: "40d",
  });

  const cookieOptions = {
    httpOnly: false,
    secure: false, // Set to true if using HTTPS
    sameSite: 'strict', // 'strict' or 'lax' based on your needs
    maxAge: 40 * 24 * 60 * 60 * 1000, // 40 days
    path: '/', // Global path
  };

  // if (process.env.NODE_ENV === 'production') {
  //   cookieOptions.secure = true; // Ensure the cookie is only sent over HTTPS
  //   cookieOptions.domain = '.balady.org.in'; // Set the cookie for the entire domain
  // }

  res.cookie("adminJwt", token, cookieOptions);

  console.log(token, 'token');
  return token;
};

export default generateToken;
