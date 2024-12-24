// Here is where we import modules. We begin by loading Express
require('dotenv').config()
require('./config/database')
const express = require('express');
const morgan = require('morgan');


//Models
const Fruit = require("./models/fruit.js");


const app = express();
app.use(express.urlencoded({ extended: false }));


// MIDDLEWARE
app.use(morgan('dev'));


// GET /
app.get("/", async (req, res) => {
    res.render("index.ejs");
  });  


// GET /fruits/new


app.get('/fruits', async (req, res) => {
  const allFruits = await Fruit.find()
  res.render('fruits/index.ejs', { fruits: allFruits})
})

app.get("/fruits/new", (req, res) => {
    res.render('/fruits/new.ejs')
  });

// POST /fruits
app.post("/fruits", async (req, res) => {
  if (req.body.isReadyToEat === "on") {
    req.body.isReadyToEat = true;
  } else {
    req.body.isReadyToEat = false;
  }
  await Fruit.create(req.body);
  res.redirect("/fruits");
});


// ROUTES
app.listen(3000, () => {
  console.log('Listening on port 3000');
});