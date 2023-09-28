const mongoose = require("mongoose");

const pageSchema = new mongoose.Schema({

 pagedescription: {
    type: String,
    required: true,
 },
});

module.exports = mongoose.model("Pages", postSchema);