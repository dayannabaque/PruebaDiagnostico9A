const { Participacion } = require("../models");


const GetParticipacions = async (req, res) => {
    try {
        const participacion = await Participacion.find()

        res.status(200).json({
            msg: 'Participacion obtenido con éxito',
            participacion
        });
    } catch (error) {
        res.status(500).json({
            msg: 'Error al obtener Participacion '
        });
    }
}

const GetParticipacion = async (req, res) => {
    try {
        const id = req.params.id
        let participacion = await Participacion.findById(id)
        res.status(200).json({
            msg: `Participacion por ${id} obtenido `,
            participacion
        });
    } catch (error) {
        res.status(500).json({
            msg: 'Error al obtener Participacion'
        });
    }
}


const SaveParticipacion = async (req, res) => {
    try {
        
        const data = {
            ...req.body
        }
        
        const saveParticipacion = await new Participacion(data);
        await saveParticipacion.save();

        res.status(200).json({
            msg: 'Guardado con éxito Participacion',
            saveParticipacion
        });
    } catch (error) {
        console.log(error)
        res.status(500).json({
            msg: 'Error al guardar Participacion',
        });
    }

};


const EditParticipacion = async (req, res) => {
    try {
        const id = req.params.id
        const participacion = await Participacion.findByIdAndUpdate(id, {...req.body})
        res.status(200).json({
            msg: 'Actualizado correctamente Participacion',
            participacion
        });
    } catch (error) {
        res.status(500).json({
            msg: 'Error al actualizar Participacion'
        });
    }
}

const DeleteParticipacion = async (req, res) => {
    try {
        const id = req.params.id
        await Participacion.findByIdAndDelete(id)
        res.status(200).json({
            msg: 'Eliminado correctamente Participacion',
        });
    } catch (error) {
        res.status(500).json({
            msg: 'Error al eliminar Participacion'
        });
    }
}



module.exports ={
    GetParticipacions,
    GetParticipacion,
    SaveParticipacion,
    EditParticipacion,
    DeleteParticipacion
}




