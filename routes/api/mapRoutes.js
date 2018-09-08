const router = require("express").Router();
const articleController = require("../../controllers/mapController");

// Matches with "/api/map"
router.route("/")
  .get(articleController.findAll)

module.exports = router;
