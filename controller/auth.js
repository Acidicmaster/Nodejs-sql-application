const { sequelize, User } = require('../models');
const crypto = require("crypto");
const asyncHandler = require("../middleware/async");


const RegisterUser = asyncHandler(async (req, res, next) => {
  
 await User.create({ ...req.body }).then( (data) => {
        res.status(200).json(data.toJSON());
    }).catch((err) => {
        res.status(404).json({
            error: err.errors[0].message
        })
    });
  
   
  });

  
  const LoginUser = asyncHandler(async (req, res, next) => {
  
    var message = [];
    var success = false;
    var status = 404;
    USERS.findOne({
       where:{
        username: req.body.username
       }
    }).then( (user)=> {
        if (user) {
            message.push("user found");
            if(user.validPassword(req.body.password)) {
                status=200;
                success = true
                message.push("You are authorised");
            }else{
                message.push("Check Credentials");
            }
        }else{
            message.push("Check Credentials");
        }
       
        res.json({status,success,message});
    });
     
      
    });

    module.exports = {
        RegisterUser,LoginUser
    }




