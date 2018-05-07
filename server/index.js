let express = require("express");
let comments = require("./comments");
let products = require("./products");
let vehicles = require("./vehicles");
let contacts = require("./contacts");
let bodyParser = require("body-parser");
const app = express();

app.use(express.static('public'))
app.use(bodyParser.json());

app.get("/comments", function(req, res, next)
{
    return res.json({comments});
});

app.post("/comments", function(req, res, next)
{
    let newComment = req.body;
    comments.push(newComment);
    res.json(newComment);
});

app.listen(3001, (err) => {
    if (err) {
    return console.log("Error", err);
    }
console.log("Web server is now living in apartment 3001");
});
