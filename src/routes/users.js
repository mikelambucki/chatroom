const express = require('express');
const router = express.Router();
const db = require('../db/db');
const User = require('../models/User');

//Users router

//Returns all users in database
router.get('/', (req,res) =>
    User.findAll()
        .then(users => {
            console.log(users);
            res.sendStatus(200);
        })
        .catch(err => console.log(err))
);


//Posts a user to database (registration)
router.post('/register', async function(req, res) {


    const data = {
        name: req.body.name,
        password: req.body.password
    };

    let { name, password } = data;

    //need to do an authentication
    let registeredUser = await User.findOne({where: {name}});

    console.log("REGISTERED USER VAR: ",registeredUser);
    if(registeredUser.dataValues.name !== name) {
        User.create({
            name,
            password
        })
            .then(user => console.log("Inserted user..... ", user))
            .catch(err => console.log(err));
    }
    else{
        console.log("Username has been taken");
        res.status(200).json({registered: false});
    }
});

router.post('/login', async function(req,res){
    //encrypt plaintext
    //make sure encrypted passwords match
});

module.exports = router;