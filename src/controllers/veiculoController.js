const veiculoModel = require('../models/veiculoModel');

const getById = async(request,response)=>{
    try {
        const {id} = request.params;
        const veiculo = await veiculoModel.getById(id);
        return response.status(200).json(veiculo[0]);
    } catch (e) {
        return response.status(500).json("Erro: "+e);
    }
}
const getByQuery = async(request,response)=>{
    try {
        var veiculos = null;
        const qr = request.query;
        if(qr.idDono) {
            const {idDono} = qr;
            veiculos = await veiculoModel.getByDono(idDono)
        }
        else if(qr.cidade){
            const {cidade} = qr;
            veiculos = await veiculoModel.getByCity(cidade)
        }
        return response.status(200).json(veiculos)
    } catch (e) {
        return response.status(500).json("Erro: "+e);
    }
}

const setVehicle = async(request,response)=>{
    try {
        const veiculo = request.body;
        const createdVeiculo = await veiculoModel.setVehicle(veiculo);
        return response.status(201).json(createdVeiculo);
    } catch (e) {
        return response.status(500).json("Erro: "+e);
    }
}
const updateVehicle = async(request,response)=>{
    try {
        const {id} = request.params;
        const veiculo = request.body;
        const updatedVehicle = await veiculoModel.updateVehicle(id,veiculo);
        return response.status(204).json(updatedVehicle);
    } catch (e) {
        return response.status(500).json("Erro: "+e);
    }
}
const deleteVehicle = async(request,response)=>{
    try {
        const {id} = request.params;
        await veiculoModel.deleteVehicle(id);
        return response.status(204).json();
    } catch (e) {
        return response.status(500).json("Erro: "+e);
    }
}

module.exports = {
    getById,
    getByQuery,
    setVehicle,
    updateVehicle,
    deleteVehicle
}