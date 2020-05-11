const express = require('express');
const router = express.Router();
const User =require('../models/User')

//GETS ALL USERS
router.get('/', async (req, res) => {
    try{
        const users = await User.find();
        res.json(users)
    }catch(err){
        res.json(err)
    }
});

//SPECIFIC USER
router.get('/:userId', async (req, res) => {
    try{
    const user = await User.findById(req.params.userId);
    res.json(user);
    }catch(err){
        req.json(err)
    }
});

//ADD NEW USER
router.post('/', async (req, res)=>{
    console.log(req.body)
    const user = new User(
        {
            username: req.body.username,
            password: req.body.password
        }
    );
    try{
        const savedUser = await user.save();
        res.json(savedUser);
    }catch(err){
        res.json(err)
    }
})

//DELETE SPECIFIC POST
router.delete('/:userId', async (req, res) => {
    try{
    const user = await User.remove({_id: req.params.userId });
    res.json(user);
    }catch(err){
        req.json(err)
    }
});


module.exports = router;