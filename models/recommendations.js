const mongoose = require("mongoose");
const listSchema = require('./list.js')
const restaurantSchema = require('./restaurant.js');

const recommendationsSchema = new mongoose.Schema({
    id: String,
    dish: [listSchema],
    restaurant: [restaurantSchema],
    description: String
});

const recommendations = mongoose.model("recommendations", recommendationsSchema, "recommendations");
module.exports = recommendations;

