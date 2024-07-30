import jwt from "jsonwebtoken";
import User from '../models/adminModel.js'

const authenticateAdmin = async (req, res, next) => {
    console.log(process.env.JWT_SECRETKEY_ADMIN, 'from admin midldeware' )
    console.log(req.cookies.adminJwt,'tokenn middle')
    console.log('middleaware')
    

  const tokenFromRequest = req.cookies.adminJwt;

  if (tokenFromRequest) {
    try {
      const decodedToken = jwt.verify(
        tokenFromRequest,
      process.env.JWT_SECRETKEY_ADMIN
      );

      const requestUser = await User.findById(decodedToken.adminId).select(
        "-password"
      );

      if (requestUser) {
        req.admin = requestUser;
        next();
      }
      
    } catch (error) {
      res.status(401).json({ message: "Authentication failed.Invalid Token" });
    }
  } else {
    res
      .status(401)
      .json({ message: "Authentication Failed.No Token is Found" });
  }
};

export default authenticateAdmin;
