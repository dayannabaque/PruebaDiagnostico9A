const { ConcursoTorneo } = require("../models");


const GetConcursoTorneos = async (req, res) => {
    try {
        const concursotorneo = await ConcursoTorneo.find()

        res.status(200).json({
            msg: 'concursotorneo obtenido con éxito',
            concursotorneo
        });
    } catch (error) {
        res.status(500).json({
            msg: 'Error al obtener concursotorneo '
        });
    }
}

const GetConcursoTorneo = async (req, res) => {
    try {
        const id = req.params.id
        let concursotorneo = await ConcursoTorneo.findById(id)
        res.status(200).json({
            msg: `Concursotorneo por ${id} obtenido `,
            concursotorneo
        });
    } catch (error) {
        res.status(500).json({
            msg: 'Error al obtener concursotorneo'
        });
    }
}


const SaveConcursoTorneo = async (req, res) => {
    try {
        
        const data = {
            ...req.body
        }
        
        const saveconcursotorneo = await new ConcursoTorneo(data);
        await saveconcursotorneo.save();

        res.status(200).json({
            msg: 'Guardado con éxito concursotorneo',
            saveconcursotorneo
        });
    } catch (error) {
        console.log(error)
        res.status(500).json({
            msg: 'Error al guardar concursotorneo',
        });
    }

};


const EditConcursoTorneo = async (req, res) => {
    try {
        const id = req.params.id
        const concursotorneo = await ConcursoTorneo.findByIdAndUpdate(id, {...req.body})
        res.status(200).json({
            msg: 'Actualizado correctamente concursotorneo',
            concursotorneo
        });
    } catch (error) {
        res.status(500).json({
            msg: 'Error al actualizar concursotorneo'
        });
    }
}

const DeleteConcursoTorneo = async (req, res) => {
    try {
        const id = req.params.id
        await ConcursoTorneo.findByIdAndDelete(id)
        res.status(200).json({
            msg: 'Eliminado correctamente concursotorneo',
        });
    } catch (error) {
        res.status(500).json({
            msg: 'Error al eliminar concursotorneo'
        });
    }
}



module.exports ={
    GetConcursoTorneos,
    GetConcursoTorneo,
    SaveConcursoTorneo,
    EditConcursoTorneo,
    DeleteConcursoTorneo
}




