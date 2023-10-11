const { Schema, model } = require('mongoose');

const PatrocinadorSchema = new Schema({
  nombre: { type: String, required: true },
});

module.exports = model("Patrocinador", PatrocinadorSchema);