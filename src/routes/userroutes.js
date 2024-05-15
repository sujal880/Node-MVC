const express=require('express');
const RegisterUser = require('../controllers/registercontroller');
const getuser=require('../controllers/getusercontroller');
const userRoute=express.Router();
userRoute.post('/senddata',RegisterUser);
userRoute.get('/getdata',getuser);

module.exports=userRoute;