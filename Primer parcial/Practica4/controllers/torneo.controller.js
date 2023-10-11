const { Torneo } = require("../models");


const GetTorneos = async (req, res) => {
    try {
        const torneo = await Torneo.find()

        res.status(200).json({
            msg: 'Torneo obtenido con éxito',
            torneo
        });
    } catch (error) {
        res.status(500).json({
            msg: 'Error al obtener Torneo '
        });
    }
}

const GetTorneo = async (req, res) => {
    try {
        const id = req.params.id
        let torneo = await Torneo.findById(id)
        res.status(200).json({
            msg: `Torneo por ${id} obtenido `,
            torneo
        });
    } catch (error) {
        res.status(500).json({
            msg: 'Error al obtener Torneo'
        });
    }
}


const SaveTorneo = async (req, res) => {
    try {
        
        const data = {
            ...req.body
        }
        
        const saveTorneo = await new Torneo(data);
        await saveTorneo.save();

        res.status(200).json({
            msg: 'Guardado con éxito Torneo',
            saveTorneo
        });
    } catch (error) {
        console.log(error)
        res.status(500).json({
            msg: 'Error al guardar Torneo',
        });
    }

};


const EditTorneo = async (req, res) => {
    try {
        const id = req.params.id
        const torneo = await Torneo.findByIdAndUpdate(id, {...req.body})
        res.status(200).json({
            msg: 'Actualizado correctamente Torneo',
            torneo
        });
    } catch (error) {
        res.status(500).json({
            msg: 'Error al actualizar Torneo'
        });
    }
}

const DeleteTorneo = async (req, res) => {
    try {
        const id = req.params.id
        await Torneo.findByIdAndDelete(id)
        res.status(200).json({
            msg: 'Eliminado correctamente Torneo',
        });
    } catch (error) {
        res.status(500).json({
            msg: 'Error al eliminar Torneo'
        });
    }
}



module.exports ={
    GetTorneos,
    GetTorneo,
    SaveTorneo,
    EditTorneo,
    DeleteTorneo
}




