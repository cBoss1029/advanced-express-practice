let express = require("express");
let comments = require("./comments");
let products = require("./products");
let vehicles = require("./vehicles");
let contacts = require("./contacts");
let bodyParser = require("body-parser");
let CommentRoutes = require("../routes/CommentRoutes.js");
let ContactRoutes = require("../routes/ContactRoutes.js");
let ProductRoutes = require("../routes/ProductRoutes.js");
let VehicleRoutes = require("../routes/VehicleRoutes.js");
const app = express();
let mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://coryB:Drowssap21@ds117590.mlab.com:17590/aca-express-practice");
let Comment = require('../models/Comment');
let Contact = require('../models/Contact');
let Vehicle = require('../models/Vehicle');
let Product = require('../models/Product');


app.use(express.static('public'));
app.use(bodyParser.json());
app.use(CommentRoutes);
app.use(ContactRoutes);
app.use(ProductRoutes);
app.use(VehicleRoutes);


<<<<<<< HEAD


=======
>>>>>>> feff299a42cbf75499c8a4db48bf3579970e76c5
app.listen(3001, (err) => {
    if (err) {
    return console.log("Error", err);
    }
console.log("Web server is now living in apartment 3001");
});
