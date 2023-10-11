const { Schema, model } = require('mongoose');

const ClubFutbolSchema = new Schema({
  nombreclub: { type: String, required: true },
  direccionclub: { type: String, required: true },
  fechainicio: { type: Date , default: Date.now },
});

module.exports = model("ClubFutbol", ClubFutbolSchema);
