const { model, Schema } = require("mongoose");

const membresiaSchema = new Schema({ 
 

  fechainicio: { type: Date, required:true  },
  fechafinal: { type: Date ,  required:true},
  idClubFutbol: {type: Schema.Types.ObjectId, ref:"ClubFutbol"},
  idJugador: {type: Schema.Types.ObjectId,ref:"Jugador"},
  activa: {type:Boolean}
  
});

module.exports = model("Membresia", membresiaSchema);
