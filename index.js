const express=require('express');
const allroutes=require('./src/routes/userroutes');
require('./database/db');
const app=express();
app.use(express.json());
app.use(allroutes);
app.get('/home',(req,res)=>{
    res.status(200).json({
        message:"Welcome To Sujal Website"
    });
});

app.listen(5000,()=>{
    console.log(`App is Running on PORT ${5000}`);
})