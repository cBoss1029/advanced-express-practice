let mongoose = require('mongoose');
let schema = require('../schemas/Vehicles');

module.exports =  mongoose.model("Vehicle", schema);
