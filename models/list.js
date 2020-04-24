const mongoose = require("mongoose");

const listSchema = new mongoose.Schema({
    id: String,
    dish_name: String,
    restaurant_name: String,
    rating: Number
});

const list = mongoose.model("list", listSchema, "list");
module.exports = list;