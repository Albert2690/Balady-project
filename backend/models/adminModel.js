import mongoose from "mongoose";
import bcrypt from 'bcryptjs'

const userSchema = mongoose.Schema({
    userName: {
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    mobile:{
        type:Number
    },
    password:{
        type:String
    },
    is_admin:{
        type:Boolean
    },
    is_blocked:{
        type:Boolean
    }

    
},
{
    timestamps:true
}



)

userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) {
      next();
    }
    const salt = await bcrypt.genSalt(10);
    console.log(this.password);
    this.password = await bcrypt.hash(this.password, salt);
  });
  

  
  const User = mongoose.model("user", userSchema);
  
  export default User;