var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { title: "Express" });
});

/* GET home page. */
router.get("/test", function(req, res, next) {
  const response = {
    name: "Testiobjekti",
    data: "100"
  };
  res.json(response);
});

module.exports = router;
