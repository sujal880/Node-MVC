const User = require("../models/registermodel");
const bcrypt=require('bcrypt');

const RegisterUser=async(req,res)=>{
    try{
        const data=req.body;
        data.password=await bcrypt.hash(data.password,10);
    
    
        const mdata=new User(data);
        const response=await mdata.save();
        console.log(response);
        res.status(200).json({
            message:"user registered",
            data:response
        })
    }

    catch(ex){
        console.log(ex);
        res.status(500).json({
            message:"Internal Server Error"
        })
    }
};

module.exports=RegisterUser;