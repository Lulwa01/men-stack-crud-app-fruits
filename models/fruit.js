const mongoose = require('mongoose')


//1. create the schema
const fruitSchema = new mangoose.Schema({
    name: String,
    isReadyToEat: Boolean
})

//2. register the model
const Fruit = mangoose.model('Fruit', fruitSchema)

//3. share it with the rest of the app
module.exports = Fruit