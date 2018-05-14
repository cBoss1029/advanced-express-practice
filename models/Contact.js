let mongoose = require('mongoose');
let schema = require('../schemas/Contacts');

module.exports =  mongoose.model("Contact", schema);
