var express = require('express');
var bodyParser = require('body-parser');
var request = require('request');

// var $ = require('jquery');

var app = express();

app.set('view engine', 'ejs');
app.set('views', 'public');
app.use(express.static(__dirname + '/dist'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('*', function(req, res) {
    res.render('index');
});

app.post('/', function(req, res) {
    // console.log(req.body.fname);
    res.redirect('/');
    // require('./server/postit')(req.body.fname);
    request.post('https://be769fef.ngrok.io/users').form({first_name: req.body.fname});
});

const port = process.env.PORT || 3001;
app.listen(port, function(error) {
    if(error) {
        console.log('Error with server.', error);
    } else {
        console.log('Listening to port', port);
    }
});
