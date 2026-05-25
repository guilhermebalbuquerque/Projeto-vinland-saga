var express = require("express");
var router = express.Router();

var dashController = require("../controllers/dashboardController");

router.post("/receberDados", function (req, res) {
    dashController.receberDados(req, res);
});

module.exports = router;