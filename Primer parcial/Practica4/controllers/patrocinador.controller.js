const { Patrocinador } = require("../models");


const GetPatrocinadors = async (req, res) => {
    try {
        const patrocinador = await Patrocinador.find()

        res.status(200).json({
            msg: 'Patrocinador obtenido con éxito',
            patrocinador
        });
    } catch (error) {
        res.status(500).json({
            msg: 'Error al obtener Patrocinador '
        });
    }
}

const GetPatrocinador = async (req, res) => {
    try {
        const id = req.params.id
        let patrocinador = await Patrocinador.findById(id)
        res.status(200).json({
            msg: `Patrocionador por ${id} obtenido `,
            patrocinador
        });
    } catch (error) {
        res.status(500).json({
            msg: 'Error al obtener Patrocinador'
        });
    }
}


const SavePatrocinador = async (req, res) => {
    try {
        
        const data = {
            ...req.body
        }
        
        const savePatrocinador = await new Patrocinador(data);
        await savePatrocinador.save();

        res.status(200).json({
            msg: 'Guardado con éxito patrocinador',
            savePatrocinador
        });
    } catch (error) {
        console.log(error)
        res.status(500).json({
            msg: 'Error al guardar patrocinador',
        });
    }

};


const EditPatrocinador = async (req, res) => {
    try {
        const id = req.params.id
        const patrocinador = await Patrocinador.findByIdAndUpdate(id, {...req.body})
        res.status(200).json({
            msg: 'Actualizado correctamente patrocinador',
            patrocinador
        });
    } catch (error) {
        res.status(500).json({
            msg: 'Error al actualizar patrocinador'
        });
    }
}

const DeletePatrocinador = async (req, res) => {
    try {
        const id = req.params.id
        await Patrocinador.findByIdAndDelete(id)
        res.status(200).json({
            msg: 'Eliminado correctamente patrocinador',
        });
    } catch (error) {
        res.status(500).json({
            msg: 'Error al eliminar patrocinador'
        });
    }
}



module.exports ={
    GetPatrocinadors,
    GetPatrocinador,
    SavePatrocinador,
    EditPatrocinador,
    DeletePatrocinador
}




