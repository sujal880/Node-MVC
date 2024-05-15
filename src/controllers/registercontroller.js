const User = require("../models/registermodel");

const RegisterUser=async(req,res)=>{
    try{
        const data=req.body;
        console.log(data);
        const mdata=new User(data);
        const response=await mdata.save();
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