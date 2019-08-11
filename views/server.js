var express = require('express');
var bodyParser = require('body-parser');
var methodOveride = require('method-overide');
var exphbs = require('express-handlebars');

var app = express();
app.use(express.static(_dirname + '/public'));

app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(methodOveride('_method'));
app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));

app.set('view engine', 'handlebars');

var port = 8889;
app.listen(port);
