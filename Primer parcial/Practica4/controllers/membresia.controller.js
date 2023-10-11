const { Membresia } = require("../models");


const GetMembresias = async (req, res) => {
    try {
        const membresia = await Membresia.find()
        .populate('idClubFutbol') // Reemplaza 'idClubFutbol' con el nombre del campo de relación en tu modelo Membresia
        .populate('idJugador'); // Reemplaza 'idJugador' con el nombre del campo de relación en tu modelo Membresia


        res.status(200).json({
            msg: 'Membresia obtenido con éxito',
            membresia
        });
    } catch (error) {
        res.status(500).json({
            msg: 'Error al obtener Membresia '
        });
    }
}

const GetMembresia = async (req, res) => {
    try {
        const id = req.params.id
        let membresia = await Membresia.findById(id)
        res.status(200).json({
            msg: `Membresia por ${id} obtenido `,
            membresia
        });
    } catch (error) {
        res.status(500).json({
            msg: 'Error al obtener Membresia'
        });
    }
}


const SaveMembresia = async (req, res) => {
    try {
        
        const data = {
            ...req.body
        }
        
        const saveMembresia = await new Membresia(data);
        await saveMembresia.save();

        res.status(200).json({
            msg: 'Guardado con éxito Membresia',
            saveMembresia
        });
    } catch (error) {
        console.log(error)
        res.status(500).json({
            msg: 'Error al guardar Membresia',
        });
    }

};


const EditMembresia = async (req, res) => {
    try {
        const id = req.params.id
        const membresia = await Membresia.findByIdAndUpdate(id, {...req.body})
        res.status(200).json({
            msg: 'Actualizado correctamente Membresia',
            membresia
        });
    } catch (error) {
        res.status(500).json({
            msg: 'Error al actualizar Membresia'
        });
    }
}

const DeleteMembresia = async (req, res) => {
    try {
        const id = req.params.id
        await Membresia.findByIdAndDelete(id)
        res.status(200).json({
            msg: 'Eliminado correctamente Membresia',
        });
    } catch (error) {
        res.status(500).json({
            msg: 'Error al eliminar Membresia'
        });
    }
}



module.exports ={
    GetMembresias,
    GetMembresia,
    SaveMembresia,
    EditMembresia,
    DeleteMembresia
}




