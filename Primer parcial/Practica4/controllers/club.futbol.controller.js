const { ClubFutbol } = require("../models");


const GetClubFutbols = async (req, res) => {
    try {
        const clubFutbol = await ClubFutbol.find()

        res.status(200).json({
            msg: 'ClubFutbol obtenido con éxito',
            clubFutbol
        });
    } catch (error) {
        res.status(500).json({
            msg: 'Error al obtener ClubFutbol '
        });
    }
}

const GetClubFutbol = async (req, res) => {
    try {
        const id = req.params.id
        let clubFutbol = await ClubFutbol.findById(id)
        res.status(200).json({
            msg: `ClubFutbol por ${id} obtenido `,
            clubFutbol
        });
    } catch (error) {
        res.status(500).json({
            msg: 'Error al obtener ClubFutbol'
        });
    }
}


const SaveClubFutbol = async (req, res) => {
    try {
        
        const data = {
            ...req.body
        }
        
        const saveClubFutbol = await new ClubFutbol(data);
        await saveClubFutbol.save();

        res.status(200).json({
            msg: 'Guardado con éxito ClubFutbol',
            saveClubFutbol
        });
    } catch (error) {
        console.log(error)
        res.status(500).json({
            msg: 'Error al guardar ClubFutbol',
        });
    }

};


const EditClubFutbol = async (req, res) => {
    try {
        const id = req.params.id
        const clubFutbol = await ClubFutbol.findByIdAndUpdate(id, {...req.body})
        res.status(200).json({
            msg: 'Actualizado correctamente ClubFutbol',
            clubFutbol
        });
    } catch (error) {
        res.status(500).json({
            msg: 'Error al actualizar ClubFutbol'
        });
    }
}

const DeleteClubFutbol = async (req, res) => {
    try {
        const id = req.params.id
        await ClubFutbol.findByIdAndDelete(id)
        res.status(200).json({
            msg: 'Eliminado correctamente ClubFutbol',
        });
    } catch (error) {
        res.status(500).json({
            msg: 'Error al eliminar ClubFutbol'
        });
    }
}



module.exports ={
    GetClubFutbols,
    GetClubFutbol,
    SaveClubFutbol,
    EditClubFutbol,
    DeleteClubFutbol
}




