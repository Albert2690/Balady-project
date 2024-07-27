import User from "../models/adminModel.js";

const login = async(req,res)=>{
    try{
        const {email,password} = req.body
        const userExist = User.findOne({email:email})

        if (!email || !password) {
            res.status(401).json({error:"All fields must be filled!"});
            
          }
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailRegex.test(email)) {
            res.status(401).json({error:"Invalid email format"});
           
          }
        
          if (password.length < 4) {
            res.status(401).json({error: "Invalid password. Password must be at least 6 characters long."});
           
          }
        if(userExist){
            const result = await userExist.matchPassword(
                password,
                userExist.password
              );
              if (result) {
                 generateAdmintoken(res, userExist._id);
      
                res
                  .status(200)
                  .json({
                   admin:userExist,
                    success: true,
                  });
              } else {
                res.status(401).json({ message: "Authentication failed" });
              }

        }else{
            res.status(404).json({message:'invalid User'})
        }
    }catch(err){
        console.log(err)
        res.status(500).json({error:'Internal Server Error'})
    }
}

export  {
    login
}