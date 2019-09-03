var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Users = require("../models/users.model");

router.post('/',function(req,res){

  var user= new Users();
  user.name = req.body.name;
  user.save();
  res.json({
      status : true,
      message : "User saved successfully!"
  })

})

router.get('/', function(req, res, next) {

    Users.find({},function(err,users){
      if(err){
          res.render({
              status : false,
              error : err
          })
      }
      else{
        res.render('users', { title: users });
      }
    })

});

module.exports = router;
