const Sequelize = require('sequelize');


//const dbUrl = "postgresql://postgres:hyp123@localhost:3013/postgres";

module.exports = new Sequelize('postgres', 'postgres', 'hyp123', {
    host: 'localhost',
    dialect: 'postgres',
    define: {
        timestamps: false
    },

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});

