const mongoose = require("mongoose");

const restaurantSchema = new mongoose.Schema({
    id: String,
    restaurant_name: String,
    location: String,
    open_hour: String
});

const restaurant = mongoose.model("restaurant", restaurantSchema, "restaurant");
module.exports = restaurant;