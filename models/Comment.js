let mongoose = require('mongoose');
let schema = require('../schemas/Comments');

module.exports =  mongoose.model("Comment", schema);
