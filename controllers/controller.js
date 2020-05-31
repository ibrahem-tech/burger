var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

router.get("/", function (req, res) {
    burger.all(function (data) {
        var hbsObject = { burgers: data };
        console.log(hbsObject);

        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", function (req, res) {
    let name = req.body.name;

    burger.insert(name, function (result) {
        // Send back the ID
        res.json({ id: result.insertId });
    });
});

router.put("/api/burgers/:id", function (req, res) {
    var condition = "id = " + req.params.id;
    let value = req.body.devoured;
    console.log("condition", condition);

    burger.update(value, condition, function (result) {
        if (result.changedRows === 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        }
        res.status(200).end();
    });
});

router.delete("/api/clearburgers", function (req, res) {
    burger.delete(function (result) {
        if (result.affectedRows === 0) {
            return res.status(404).end();
        }
        res.status(200).end();
    });
});

module.exports = router;