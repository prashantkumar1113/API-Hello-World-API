// Require Mongoose
const mongoose = require("mongoose");
const {Schema} = mongoose;

// Create Schema
const languageSchema = new Schema({
    name: {type: String, required: true},
    greeting: String,
    pangram: String,
    filler: String,
});

// Create Model and export
const Language = mongoose.model("Language", languageSchema);
module.exports = Language;
