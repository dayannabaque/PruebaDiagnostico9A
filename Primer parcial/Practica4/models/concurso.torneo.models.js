const { Schema, model } = require('mongoose');

const ConcursoTorneoSchema = new Schema({
  nombreconcurso: { type: String, required: true },
});

module.exports = model("ConcursoTorneo", ConcursoTorneoSchema);