var express = require("express");

var router = express.Router();

var food = require("../models/food");

router.get("/", function(req, res){
    food.selectAll(data => {
        console.log(data)
    })
});

router.post("/api/food", function(req, res){
    food.insertOne(["food_name"], [req.body.name], function(result){
        res.json(result)
    })
})

router.put("/api/food/:id", function(req, res){
    var condition = "id: " + req.params.id
    food.updateOne({
        eaten: req.body.eaten
    }, condition, function(result){
        if (result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    })
})

module.exports = router;