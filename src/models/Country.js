const mongoose = require("mongoose");

const { Schema } = mongoose;

const CountrySchema = new Schema({
    /*
    country: {
        type: String,
    },

    city: {
        type: String,
    },

    */

    Country: String,
});

const Country = new mongoose.model("Country", CountrySchema);

module.exports = Country;
