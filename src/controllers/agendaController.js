const agendaModel = require('../models/agendaModel');

const getById = async(request,response)=>{
    try {
        const {id} = request.params;
        const veiculo = await agendaModel.getById(id)
        return response.status(200).json(veiculo[0]);
    } catch (e) {
        return response.status(500).json("Erro: "+e);
    }
};

const getByIdVeiculo = async(request,response)=>{
    try {
        const {idVeiculo} = request.query;
        const agendas = await agendaModel.getByIdVeiculo(idVeiculo)
        return response.status(200).json(agendas);
    } catch (e) {
        return response.status(500).json("Erro: "+e);
    }
};

const setAgenda = async(request,response)=>{ 
    try {
        const agenda = request.body;
        const createdAgenda = await agendaModel.setAgenda(agenda)
        return response.status(201).json(createdAgenda);
    } catch (e) {
        return response.status(500).json("Erro: "+e);
    }
};
const deleteAgenda = async(request,response)=>{
    try {
        const {id} = request.params
        await agendaModel.deleteAgenda(id);
        return response.status(204).json();
    } catch (e) {
        return response.status(500).json("Erro: "+e);
    }
};

module.exports = {
    getById,
    getByIdVeiculo,
    setAgenda,
    deleteAgenda
};