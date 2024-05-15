const mongoose=require('mongoose');
const bcrypt=require('bcryptjs');
const userSchema=new mongoose.Schema({
    
    email:String,
    password:String
});

userSchema.pre('save',async function(next){
    if(!this.isModified('password'))return next();
    this.password=await bcrypt.hash(this.password,8);
})
const User=mongoose.model('users',userSchema);
module.exports=User;