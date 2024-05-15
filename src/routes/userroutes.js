const express=require('express');
const RegisterUser = require('../controllers/registercontroller');
const userRoute=express.Router();
userRoute.post('/senddata',RegisterUser);

module.exports=userRoute;