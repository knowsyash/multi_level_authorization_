const express = require('express')
const router = express.Router();
const authorizeRole = require('../middleware/roleMiddleware')
const verifyToken= require('../middleware/authMiddleware')
router.get('/admin',verifyToken,authorizeRole("admin"),(req,res)=>{
    res.json({message:"welcome Admin"})
})
router.get('/manager',verifyToken,authorizeRole("admin","manager"),(req,res)=>{
    res.json({message:"welcome  manager"})
})
router.get('/user',verifyToken,authorizeRole("admin","manager","user"),(req,res)=>{
    res.json({message:"welcome user"})
})
module.exports=router;