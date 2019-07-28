var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {
  burger.all(function (data) {
    var hbsObject = {
      burger: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/burger", function (req, res) {
  burger.create(["burger_name", "devoured"], [req.body.burger_name, req.body.devoured], function (result) {
    res.json({ id: result.insertId}); 
    res.redirect("/");
  });
});

router.put("/api/burger/:id", function (req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

    burger.update({
        devoured: req.body.devoured
      }, function (result) {
        if (result.changedRows === 0) { 
          return res.status(404).end();
        } else {
        res.status(200).end();
      } 
      });
});

router.delete("/burger/delete/:id", function(req, res)
{
  var condition = "id = " + req.params.id;

  burger.delete(condition, function() {
    res.redirect("/");
  });
{
  if (result.affectedRows == 0) {
    return res.status(404).end();
  } else {
      res.status(200).end();
  }
}
});

module.exports = router;