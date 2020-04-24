const mongoose = require("mongoose");

const recommendationsSchema = new mongoose.Schema({
    id: String,
    dish_name: String,
    restaurant_name: String,
    description: String
});

const recommendations = mongoose.model("recommendations", recommendationsSchema, "recommendations");
module.exports = recommendations;