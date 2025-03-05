
const jwt = require('jsonwebtoken')
const verifyToken = (req,res,next)=>{
  let token;
  let authHeader = req.headers.Authorization||req.headers.authorization
  if(authHeader&&authHeader.startsWith("Bearer"))
  {
    token = authHeader.split(" ")[1];
    console.log(token)
    if(!token)
    {
        return res.status(401).json({message:"token authorization denied"})
    }
    try{
           const decode = jwt.verify(token,process.env.JWT_SECRET);
           req.user=decode;
           console.log("Decode User:",req.user);
           next();
    }
    catch(err)
    {
        res.status(400).json({message:"token not valid"})
    }
  }
  else{
    res.status(400).json({message:"token not valid"})
  }
}
module.exports=verifyToken;