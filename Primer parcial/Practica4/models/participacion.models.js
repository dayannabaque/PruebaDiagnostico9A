const { model, Schema } = require("mongoose");

const ParticipacionSchema = new Schema({ 
 

  lugarequipo: { type: String, required:true  },
  fecha: { type: Date ,  required:true, default: Date.now},
  idTorneo: {type: Schema.Types.ObjectId, ref:"Torneo"},
  idEquipo: {type: Schema.Types.ObjectId, ref:"Equipo" },
  
});

module.exports = model("Participacion", ParticipacionSchema);
