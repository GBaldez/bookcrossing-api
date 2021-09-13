const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const GeoSchema = new Schema({
  type: {
    type: String,
    default: "Point"
  },
  coordinates: {
    type: [Number],
    index: "2dsphere"
  }
});

const CBSchema = new Schema({
  name: {
  type: String,
  required: [true, "*Campo obrigatório!"]
  },
  author: {
    type: String,
  },
  details: {
  type: String
  },
  rating: {
  type: Number
  },
  liked: {
    type: Boolean,
    default: false
  },
  geometry: GeoSchema
});

const CB = mongoose.model("Book", CBSchema);

module.exports = CB;