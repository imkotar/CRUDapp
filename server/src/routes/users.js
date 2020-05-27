const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const User = require('../models/User')
const passport = require('passport')

//FOR TESTING
router.get('/', async (req, res) => {
  try{
      const users = await User.find();
      res.json(users)
  }catch(err){
      res.json(err)
  }
});
// DO 'EMAIL ALREADY EXIST' CHECK !!!!
router.post('/register', async (req, res)=>{
  const { name, email, password, password2 } = req.body
  let errors = []
  if (!name || !email || !password || !password2) {
    errors.push('Please enter all fields');
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
})

// Login
router.post('/login', (req, res, next) => {
  console.log(req.body)
  passport.authenticate('local', {
    successRedirect: '/dashboard',
    failureRedirect: '/users/login',
    failureFlash: true
  })
  (req, res, next);
});

// Logout
router.get('/logout', (req, res) => {
  req.logout();
  req.flash('success_msg', 'You are logged out');
  res.redirect('/users/login');
});

module.exports = router;