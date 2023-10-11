const { model, Schema } = require("mongoose");

const TorneoSchema = new Schema({ 
 

  nombretorneo: { type: Date, required:true  },
  fechainicio: { type: Date ,  required:true, default: Date.now},
  fechafinal: { type: Date ,  required:true},
  idConcursoTorneo: {type: Schema.Types.ObjectId, ref:"ConcursoTorneo"},
  idPatrocinador: {type: Schema.Types.ObjectId, ref:"Patrocinador" },
  
});

module.exports = model("Torneo", TorneoSchema);
