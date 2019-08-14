//require npm packages
var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var exphbs = require('express-handlebars');

var app = express();
app.use(express.static("public"));

app.use(bodyParser.urlencoded({extended: true}));

app.use(bodyParser.json());
// app.use(methodOveride('_method'));

app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));

app.set('view engine', 'handlebars');

var routes = require('./controllers/routes.js');

app.use(routes);

var PORT = process.env.PORT || 3000
app.listen(PORT, function () {
    console.log("App listening at localhost:" + PORT);
});