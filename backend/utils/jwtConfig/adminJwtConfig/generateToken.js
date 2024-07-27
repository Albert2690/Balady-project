import jwt from "jsonwebtoken";

const generateToken = (res, adminId) => {
  const token = jwt.sign({ adminId, role: "admin" }, JWT_SECRETKEY_ADMIN, {
    expiresIn: "40d",
  });

  res.cookie("adminJwt", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV !== "development",
    sameSite: "strict",
    maxAge: 30 * 24 * 60 * 1000,
  });

  return token;
};
export default generateToken;