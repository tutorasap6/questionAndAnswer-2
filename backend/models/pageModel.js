const mongoose = require("mongoose");

const pageSchema = new mongoose.Schema({

 about: {
    type: String,
    required: [true,'page must have about']
 },
 how: {
    type: String,
    required: [true,'page must have position']
 },
 service: {
    type: String,
    required: [true,'service is required']
 },
 Term: {
    type: String,
    required: [true,'Term is required']
 },
});

module.exports = mongoose.model("Pages", pageSchema);