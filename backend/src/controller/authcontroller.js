const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const User = require('../models/userModel')
const register = async (req,res)=>{
    try{
    const {username,password,role}= req.body;
    const hashedPassword = await bcrypt.hash(password,10); //BCRYPT PASSWORD

    const newUser = new User({username,password: hashedPassword,role})
    await newUser.save();
    res.status(201).json({message:`User Register ${username}`})
    console.log(req.body)}
    catch(err){
       res.status(500).json({message :`someting went wrong`})
     }
};

const login = async (req,res)=>
    { try{
      const {username,password}=req.body;
      const user = await User.findOne({username})
      if(!user)
      {return res.status(404).json({message:`user not found`})}
      const isMatch = await bcrypt.compare(password,user.password)
      if(!isMatch)
        {return res.status(404).json({message:`Invalid password`})}
      const token =jwt.sign({id:user._id,role:user.role},process.env.JWT_SECRET,{
        expiresIn:"1h" //TOKEN VALID FOR 1 HOUR
      })
      res.status(200).json({token})
    }
    catch(err){
            res.status(500).json({message:"something went wrong"})
    }

    }
    
module.exports={
    register,
    login
}