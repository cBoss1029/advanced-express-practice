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

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(CommentRoutes);
app.use(ContactRoutes);
app.use(ProductRoutes);
app.use(VehicleRoutes);


// app.get("/comments", function(req, res, next)
// {
//     return res.json(comments);
// });

// app.post("/comments", function(req, res, next)
// {
//     let newComment = req.body;
//     comments.push(newComment);
//     res.json(newComment);
// });

app.listen(3001, (err) => {
    if (err) {
    return console.log("Error", err);
    }
console.log("Web server is now living in apartment 3001");
});
