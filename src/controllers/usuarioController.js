const usuarioModel = require('../models/usuarioModel')

const getById= async (request,response)=> {
    try{
        const {id} = request.params;
        const usuario = await usuarioModel.getById(id);
        return response.status(200).json(usuario[0]);
    }catch (e){
        return response.status(500).json("Erro: "+e);
    }
};
const getLogin= async (request,response)=> {
    const usuario = request.query;
    try{
        const loginUsuario = await usuarioModel.getLogin(usuario);
        return response.status(200).json(loginUsuario);
    }catch (e){
        return response.status(500).json("Erro: "+e);
    }
    
};
const setRegister= async (request,response)=> {
    const usuario = request.body;
    try{
        const createdUsuario = await usuarioModel.setRegister(usuario);
        return response.status(201).json(createdUsuario);
    }catch (e){
        return response.status(500).json("Erro: "+e);
    }
    
};

module.exports={
    getLogin,
    getById,
    setRegister
};