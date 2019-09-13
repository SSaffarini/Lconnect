var express = require('express');
var exphbs  = require('express-handlebars');
var config = require('./config');
var googleTranslate = require('google-translate')(config.google_API_Key);

var app = express();
const path = require("path");
const sassMiddleware = require("node-sass-middleware");

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
app.use(
  sassMiddleware({
    /* Options */
    src: path.join(__dirname, "scss"),
    dest: path.join(__dirname, "public/css/"),
    debug: true,
    outputStyle: "compressed",
    prefix: "/css"
  })
);
app.get('/', function (req, res) {
    res.render('home',{
      layout:"empty"
    });
});

app.get('/test', function (req, res) {
    res.render('test');
});


app.use(express.static("public"));
app.listen(3000);
