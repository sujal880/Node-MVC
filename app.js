const express=require('express');
const userroute=require('./src/routes/userroutes');
require('./database/db');
const allroutes=express.Router();
allroutes.use('/senddata',userroute);

module.exports=allroutes;