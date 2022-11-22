let express = require('express');
let User = require('../model/user');
let mongoose = require('mongoose');

var router = express.Router();

router.get('/user', (req, res, next) => {
  let searchQuery = {};

  searchQuery = { "name": { $regex: req.query.name, $options: 'i' } };

  User.find(searchQuery, (err, users) => {
    if (err) {
      res.status(400);
      res.send();
    }

    // Could do a 204 or 404 for no results
    // but the reponse is a success
    // and the filter results are accurate

    res.status(200);
    res.send(users);
  })
});

router.post('/user', (req, res, next) => {
  const newUser = new User(req.body);

  newUser._id = mongoose.Types.ObjectId();

  newUser.save((err) => {
    if (err) {
      res.status(400);
      res.send();
    } else {
      res.status(201);
      res.send({ id : newUser._id });
    }

  });
});

router.put('/user', (req, res, next) => {
  console.log(req.body);

  const id = req.body._id;

  User.replaceOne({ id }, { name: req.body.name, age: req.body.age }, (err, users) => {
    if (err) {
      res.status(400);
      res.send();
    }

    res.status(200);
    res.send(req.body);
  })
});

module.exports = router;