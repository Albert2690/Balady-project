import User from "../models/adminModel.js";
import bcrypt from 'bcryptjs'
import generateToken from '../utils/jwtConfig/adminJwtConfig/generateToken.js'






const  matchPassword = async function (enteredPassword,userPassword) {
  return await bcrypt.compare(enteredPassword, userPassword);
};
const login = async (req, res) => {
  try {
      const { email, password } = req.body;

      if (!email || !password) {
          return res.status(401).json({ error: "All fields must be filled!" });
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
          return res.status(401).json({ error: "Invalid email format" });
      }

      if (password.length < 4) {
          return res.status(401).json({ error: "Invalid password. Password must be at least 4 characters long." });
      }

      const userExist = await User.findOne({ email: email });
      console.log(userExist)

      if (userExist) {
        console.log(userExist.password,'password')
          const result = await matchPassword(password,userExist.password);

          if (result) {
            generateToken(res, userExist._id);

              return res.status(200).json({
                  admin: userExist,
                  success: true,
              });
          } else {
              return res.status(401).json({ message: "Authentication failed" });
          }
      } else {
          return res.status(404).json({ message: 'Invalid User' });
      }
  } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server Error' });
  }
};


const register = async (req, res) => {
  try {
   
    // let { name, email, password, role, mobile } = req.body;

    // const userdetials = await User.findOne({ email: email });
    // if (userdetials) {
    //   return res
    //     .status(409)
    //     .json({ message: "Email Already Registered", error: true });
    // }
    // const userinfo = await User.findOne({ mobile: mobile });
    // if (userinfo) {
    //   return res
    //     .status(409)
    //     .json({ message: "Mobile Number Already Registerd", error: true });
    // }

    const user = await User.create({
      name: 'admin',
      email: 'admin@gmail.com',
      
      password:'123456',
      is_blocked: false,
      is_admin:true,
      
    });

    if (user) {
      const registeredUser = {
        name: user.name,
        email: user.email,
        role: user.role,
      };

      res.status(201).json({ registeredUser, success: true });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error Occured" });
  }
};

export  {
    login,register
}