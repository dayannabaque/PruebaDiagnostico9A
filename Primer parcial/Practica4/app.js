const express =require('express')
const cors = require('cors')

const { 
    PatrocinadorRoute,
    ConcursoTorneoRoute,
    ClubFutbolRoute,
    MembresiaRoute,
    JugadorRoute,
    EquipoRoute, 
    ParticipacionRoute,
    TorneoRoute
    
} = require('./router')

const app = express();

app.use(express.static('public'));

app.use(cors())
app.use(express.json())



app.use('/api/patrocinador', PatrocinadorRoute);
app.use('/api/concursotorneo', ConcursoTorneoRoute);
app.use('/api/clubfutbol', ClubFutbolRoute);
app.use('/api/membresia', MembresiaRoute);
app.use('/api/jugador', JugadorRoute);
app.use('/api/equipo', EquipoRoute);
app.use('/api/participacion', ParticipacionRoute);
app.use('/api/torneo', TorneoRoute);



module.exports = app;