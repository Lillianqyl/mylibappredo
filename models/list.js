const mongoose = require("mongoose");
const restaurantSchema = require('./restaurant.js');

const listSchema = new mongoose.Schema({
    id: String,
    dish_name: String,
    restaurant_name: String,
    restaurant: [restaurantSchema]
    rating: Number
});

const list = mongoose.model("list", listSchema, "list");
module.exports = list;