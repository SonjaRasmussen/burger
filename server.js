var express = require("express");
var methodOverride = require("method-override");
var bodyParser = require("body-parser");

let port = process.env.PORT || 8080;

console.log(port);

var app = express();

app.use(express.static(process.cwd() + '/public'));

app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride('method'));

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main"}));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controller.js");

app.use("/", routes);

app.listen(port);