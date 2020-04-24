const mongoose = require("mongoose");

// import author model
const recommendations = mongoose.model("recommendations");


const getRecommendations = (req, res) => {
    res.send((recommendations)); // return the list of recommendations
};

// Remember to export the callbacks
module.exports = {
    getRecommendations,
};

