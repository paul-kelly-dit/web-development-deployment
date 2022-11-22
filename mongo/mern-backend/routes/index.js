var express = require('express');
var User = require('../model/user');
var mongoose = require('mongoose');

var router = express.Router();

router.get('/users', function(req, res, next) {
  let searchQuery = {};

  console.log(req)
  if(req.query.name)
    searchQuery = { name: req.query.name };

  User.find(searchQuery, function(err, users){
    if (err) {
      res.status(400);      
      res.send();
    }

    console.log("returning all the users.");
    res.send(users);
  })
});

router.post('/users', function(req, res, next) {
  let newUser = new User(req.body);
  newUser._id = mongoose.Types.ObjectId();

  newUser.save(function(err) {
    if (err) {
      console.log("not saved!");
      console.log(err);
      res.status(400);
      res.send();
    } else {
      console.log("saved!");
      res.send({ id : newUser._id });
    }

  });
});

//replace a user name and age by his id
router.put('/users/:id', function(req, res, next) {
  let id = req.params.id;
  let user = req.body;
  Console.log(user);

  User.findOneAndReplace({ _id: id }, user, function(err, user) {
    if (err) {
      console.log("not updated!");
      console.log(err);
      res.status(400);
      res.send();
    } else {
      console.log("updated!");
      res.send({ id : user._id,
                 name : user.name,
                 age : user.age });
    }
  });
});

//delete a user
router.delete('/users/:id', function(req, res, next) {
  let id = req.params.id;
  
  User.findByIdAndDelete(id, function(err, user) {
    if (err) {
      console.log("not deleted!");
      console.log(err);
      res.status(400);
      res.send();
    } else {
      console.log("deleted!");
      res.send({ id : user._id });
    }
  });
});

module.exports = router;
var express = require('express');
var User = require('../model/user');
var mongoose = require('mongoose');

var router = express.Router();

router.get('/users', function(req, res, next) {
  let searchQuery = {};

  console.log(req)
  if(req.query.name)
    searchQuery = { name: req.query.name };

  User.find(searchQuery, function(err, users){
    if (err) {
      res.status(400);      
      res.send();
    }

    console.log("returning all the users.");
    res.send(users);
  })
});

router.post('/users', function(req, res, next) {
  let newUser = new User(req.body);
  newUser._id = mongoose.Types.ObjectId();

  newUser.save(function(err) {
    if (err) {
      console.log("not saved!");
      console.log(err);
      res.status(400);
      res.send();
    } else {
      console.log("saved!");
      res.send({ id : newUser._id });
    }

  });
});

//replace a user name and age by his id
router.put('/users/:id', function(req, res, next) {
  let id = req.params.id;
  let user = req.body;
  Console.log(user);

  User.findOneAndReplace({ _id: id }, user, function(err, user) {
    if (err) {
      console.log("not updated!");
      console.log(err);
      res.status(400);
      res.send();
    } else {
      console.log("updated!");
      res.send({ id : user._id,
                 name : user.name,
                 age : user.age });
    }
  });
});

//delete a user
router.delete('/users/:id', function(req, res, next) {
  let id = req.params.id;
  
  User.findByIdAndDelete(id, function(err, user) {
    if (err) {
      console.log("not deleted!");
      console.log(err);
      res.status(400);
      res.send();
    } else {
      console.log("deleted!");
      res.send({ id : user._id });
    }
  });
});

module.exports = router;
