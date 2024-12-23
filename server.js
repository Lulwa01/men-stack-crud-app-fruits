// Here is where we import modules. We begin by loading Express
require('dotenv').config()
require('./config/database')
const express = require('express');
const morgan = require('morgan');

//Models
const Fruit = require("./models/fruit.js");

const app = express();

// MIDDLEWARE
app.use(morgan('dev'));

// GET /
app.get("/", async (req, res) => {
    res.render("index.ejs");
  });  
  
// ROUTES
app.listen(3000, () => {
  console.log('Listening on port 3000');
});