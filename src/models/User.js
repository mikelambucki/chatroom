const Sequelize = require('sequelize');
const db = require('../db/db');


//model for sequelize using postgres
const User = db.define('user', {
    name: {
        type: Sequelize.STRING
    },
    password: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    }
});

module.exports = User;