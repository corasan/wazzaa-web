var express = require('express');
var bodyParser = require('body-parser');
var request = require('request');

var app = express();

app.set('view engine', 'ejs');
app.set('views', 'public');
app.use(express.static(__dirname + '/dist'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('*', function(req, res) {
    res.render('index');
});


app.post('/signup', function(req, res) {
    require('./server/signup')(req.body);
    res.redirect('/');
});

app.post('/login', function(req, res) {
    console.log(req.body.email);
    require('./server/auth')(req.body.email, req.body.password);
    res.redirect('/login');
})


const port = process.env.PORT || 3001;
app.listen(port, function(error) {
    if(error) {
        console.log('Error with server.', error);
    } else {
        console.log('Listening to port', port);
    }
});
