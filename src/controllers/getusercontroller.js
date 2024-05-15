const User=require('../models/registermodel');
const userdata=async(req,res)=>{
    const responsedata=await User.find();
    res.status(200).json({
        message:"Data Get Successfully",
        data:responsedata
    });
}

module.exports=userdata;