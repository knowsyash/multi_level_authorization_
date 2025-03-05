const mongoose = require('mongoose')
const dbConnet = async ()=>{
    
    try{
        const connect = await mongoose.connect(process.env.CONNECTION_STRING)
    
    console.log(`Database :${connect.connection.host},${connect.connection.name }`)}
    catch(err){
        console.log(err)
        process.exit(1);
    }

}
module.exports=dbConnet;