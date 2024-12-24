const mongoose = require('mongoose')


//1. create the schema
const fruitSchema = new mongoose.Schema({
    name: String,
    isReadyToEat: Boolean
})

//2. register the model
const Fruit = mongoose.model('Fruit', fruitSchema)

//3. share it with the rest of the app
module.exports = Fruit