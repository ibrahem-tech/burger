const express = require('express');
const app = express();
const hbs = require('express-handlebars');


const port = process.env.PORT || 7000;

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main"}));
app.set("view engine", "handlebars");

var routes = require("./controllers/controller.js");


app.use(routes);

// Listening to Port
app.listen(port, () => {
    console.log("App is listening at localhost: " + PORT);
});
