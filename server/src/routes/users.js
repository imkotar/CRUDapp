const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');
const User = require('../models/User')


router.post('/register', async (req, res)=>{
  const { name, email, password, password2 } = req.body
  let errors = []
  if (!name || !email || !password || !password2) {
    errors.push('Please enter all fields');
  }

  if (User.findOne({ email: req.body.email })) {
    errors.push('User already exist');
  }
  if (password != password2) {
    errors.push('Passwords do not match');
  }

  if (password.length < 6) {
    errors.push('Password must be at least 6 characters');
  }

  if (errors.length > 0) {
    res.json(errors)
  } else {
      const newUser = new User({
        name,
        email,
        password
      })
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          try{
            newUser.password = hash;
            newUser.save()
            res.json('Success!');
          }catch(err){
            res.json(err)
          }
        })
      })
    }
});

// Login
router.post('/login', async (req, res) => {
  await User.findOne({ email: req.body.email }, (err, user) => {
    if (err) {
      console.log(err)
    }
    if (!user) {
      return res.json({
        title: 'user not found',
        error: 'invalid credentials'
      })
    }
     if (!bcrypt.compareSync(req.body.password, user.password)) {
      return res.json({
        tite: 'login failed',
        error: 'invalid credentials'
      })
    }
    let token = jwt.sign({ userId: user._id}, 'secretkey');
    return res.json({
      title: 'login sucess',
      token: token
    })
  })
});


module.exports = router;