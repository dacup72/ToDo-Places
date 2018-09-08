const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const mapCoordSchema = new Schema({
  _id: { type: Schema.Types.ObjectId, required: true },
  name: { type: String, required: true },
  lat: { type: Number, required: true },
  lng: { type: Number, required: true },
}, { _id: false });

const MapCoord = mongoose.model("MapCoord", mapCoordSchema);

module.exports = MapCoord;
