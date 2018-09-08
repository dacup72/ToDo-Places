const db = require("../models");

module.exports = {
  findAll: function(req, res) {
    db.Map
      .find({})
      .then(dbMapCoord => res.json(dbMapCoord))
      .catch(err => res.status(422).json(err));
  },
};
