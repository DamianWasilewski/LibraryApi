const express = require('express');
const users = express.Router();
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const User = require('../models/User');
users.use(cors())

//Api starting route
users.get('/', (req, res) => {
  res.send('User registration and verification')
});

//REGISTER new user
users.post('/register', (req, res) => {
  const userData = {
    user_name: req.body.user_name,
    password: req.body.password
  }

  User.findOne({
    where: {
      user_name: req.body.user_name
    }
  })
    .then(user => {
      if(!user) {
        bcrypt.hash(req.body.password, 10, (err, hash) => {
          userData.password = hash
          User.create(userData)
          .then(user => {
            res.json({status: user.user_name + ' registered'})
          })
          .catch(err => {
              res.send('error: ' + err)
          })
        })
      } else {
        res.json({error: 'Uesr already exists'})
      }
    })
    .catch(err => {
      res.send('error: ' + err)
    })
})

module.exports = users
