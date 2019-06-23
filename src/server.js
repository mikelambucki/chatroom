const db = require('./db/db');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
//const router = express.Router();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
var path = require('path');


//Connects to server and checks if properly authenticated
db.authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

//Links socket.io and express server
io.attach(server);


//CORS workaround as require('cors') was not working
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});
//Apply bodyparser for JSON middleware
app.use(bodyParser.json());

server.listen(3013, function () {
    console.log('CORS-enabled web server listening on port 3013')
});

app.get('/', function (req, res){
    res.sendFile(path.join(__dirname+'./public/index.html'));
});

//Emits messages sent in chat to every user currently connected to server
app.post('/',function (req, res) {
    console.log(req.body);
    io.emit('action', {type: 'msg', payload: req.body});
});


app.use('/users', require('./routes/users'));





