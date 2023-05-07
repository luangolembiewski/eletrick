const proprietarioModel = require('../models/proprietarioModel')

const getById= async (request,response)=> {
    try{
        const {id} = request.params;
        const proprietario = await proprietarioModel.getById(id);
        return response.status(200).json(proprietario[0]);
    }catch (e){
        return response.status(500).json("Erro: "+e);
    }
};
const getLogin= async (request,response)=> {
    const proprietario = request.query;
    try{
        const loginProprietario = await proprietarioModel.getLogin(proprietario);
        return response.status(200).json(loginProprietario);
    }catch (e){
        return response.status(500).json("Erro: "+e);
    }
    
};
const setRegister= async (request,response)=> {
    const proprietario = request.body;
    try{
        const createdProprietario = await proprietarioModel.setRegister(proprietario);
        return response.status(201).json(createdProprietario);
    }catch (e){
        return response.status(500).json("Erro: "+e);
    }
};

module.exports={
    getLogin,
    getById,
    setRegister
};